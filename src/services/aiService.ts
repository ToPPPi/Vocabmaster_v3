
import { AIExplanation, AIWordDetails } from "../types";

// --- CONFIGURATION ---
// Universal Client for OpenAI-compatible APIs (DeepSeek, OpenAI, etc.)

const getEnvVar = (key: string): string => {
    // Helper to safely access env vars in Vite
    const val = (import.meta as any).env[key];
    return val || "";
};

// Defaults for DeepSeek
const DEFAULT_BASE_URL = "https://api.deepseek.com"; 
const DEFAULT_MODEL = "deepseek-chat"; 

// --- TYPES ---
interface ChatMessage {
    role: "system" | "user" | "assistant";
    content: string;
}

interface OpenAIResponse {
    choices: {
        message: {
            content: string;
        };
    }[];
    error?: {
        message: string;
        type?: string;
    };
}

// --- HELPER: ROBUST JSON PARSER ---
const extractJSON = <T>(text: string): T | null => {
    try {
        // 0. Clean potential DeepSeek "thinking" blocks if R1 is used by mistake
        // <think>...</think>
        const cleanText = text.replace(/<think>[\s\S]*?<\/think>/g, '').trim();

        // 1. Try direct parse
        return JSON.parse(cleanText);
    } catch (e) {
        // 2. Try extracting from markdown ```json ... ```
        const match = text.match(/```json([\s\S]*?)```/);
        if (match) {
            try { return JSON.parse(match[1]); } catch(e2) {}
        }
        // 3. Try finding the outer braces { ... }
        const firstBrace = text.indexOf('{');
        const lastBrace = text.lastIndexOf('}');
        if (firstBrace !== -1 && lastBrace !== -1) {
             try { return JSON.parse(text.substring(firstBrace, lastBrace + 1)); } catch(e3) {}
        }
    }
    console.error("Failed to parse JSON from AI response:", text);
    return null;
};

// --- API CALLER ---
const callUniversalAI = async (messages: ChatMessage[]): Promise<string | null> => {
    
    if (!navigator.onLine) {
        throw new Error("Нет интернета. Проверьте соединение.");
    }

    // Trim whitespace to prevent copy-paste errors
    const apiKey = getEnvVar("VITE_AI_API_KEY").trim();
    let baseUrl = getEnvVar("VITE_AI_BASE_URL") || DEFAULT_BASE_URL;
    const model = getEnvVar("VITE_AI_MODEL") || DEFAULT_MODEL;

    // --- CORS FIX FOR LOCALHOST ---
    if ((import.meta as any).env.DEV) {
        console.log(`🔧 Dev Mode: Using Proxy /ai-proxy`);
        baseUrl = '/ai-proxy';
    }

    if (!apiKey) {
        throw new Error("API ключ не найден. Настройте .env.local");
    }

    // Clean URL construction
    const cleanBase = baseUrl.replace(/\/+$/, '');
    const endpoint = cleanBase.endsWith('/chat/completions') 
        ? cleanBase 
        : `${cleanBase}/chat/completions`;

    console.log(`🤖 Sending AI Request to: ${endpoint} (Model: ${model})`);

    try {
        const response = await fetch(endpoint, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
                "Authorization": `Bearer ${apiKey}`,
                "HTTP-Referer": window.location.origin,
                "X-Title": "VocabMaster",
            },
            body: JSON.stringify({
                model: model,
                messages: messages,
                temperature: 1.1, // DeepSeek V3 benefits from slightly higher temp for creativity
                max_tokens: 2000,
                // Only 'deepseek-chat' supports JSON mode reliably. R1 ('deepseek-reasoner') does not.
                response_format: model.includes('reasoner') ? undefined : { type: "json_object" } 
            }),
        });

        if (!response.ok) {
            console.error(`AI API Error Status: ${response.status} ${response.statusText}`);
            
            const errData = await response.json().catch(() => ({}));
            
            if (response.status === 401) {
                console.error("Auth Error Body:", errData);
                throw new Error("Ошибка ключа API (401). Проверьте баланс на deepseek.com или правильность ключа в .env.local");
            }
            if (response.status === 402) {
                throw new Error(`Недостаточно средств на балансе DeepSeek.`);
            }
            if (response.status === 405) {
                throw new Error(`Ошибка конфигурации (405). Пожалуйста, перезапустите сервер (npm run dev).`);
            }
            if (response.status === 404) {
                throw new Error(`Ошибка адреса (404). Проверьте VITE_AI_BASE_URL.`);
            }

            console.error("AI API Error Body:", errData);
            throw new Error(errData?.error?.message || `Ошибка API (${response.status})`);
        }

        const data: OpenAIResponse = await response.json();
        const content = data.choices?.[0]?.message?.content;
        
        if (!content) throw new Error("Пустой ответ от сервера.");

        return content;

    } catch (error: any) {
        console.error("AI Request Failed:", error);
        const msg = error.message.toLowerCase();
        if (msg.includes('expired') || msg.includes('key') || msg.includes('auth')) {
            throw new Error("Ошибка ключа API. Проверьте баланс и .env.local");
        }
        if (msg.includes('failed to fetch')) {
             throw new Error("Ошибка сети. Проверьте VPN или соединение.");
        }
        throw error;
    }
};

// --- EXPORTED FUNCTIONS ---

export const explainWordWithAI = async (term: string, level: string): Promise<AIExplanation | null> => {
  const systemPrompt = `
    You are an expert English tutor for a Russian student.
    Analyze the English word provided.
    
    Output strictly VALID JSON in the following format:
    {
      "alternativeDefinition": "Simple definition in Russian",
      "detailedExplanation": "2-3 sentences explaining meaning and usage nuances in Russian",
      "nuance": "Specific connotation or usage warning (e.g. formal/slang) in Russian",
      "extraExamples": [
         { "en": "Example sentence 1", "ru": "Russian translation 1" },
         { "en": "Example sentence 2", "ru": "Russian translation 2" },
         { "en": "Example sentence 3", "ru": "Russian translation 3" }
      ],
      "collocations": [
         { "en": "Phrase 1", "ru": "Translation 1" },
         { "en": "Phrase 2", "ru": "Translation 2" }
      ],
      "mnemonic": "A short, catchy memory aid or association in Russian"
    }
    
    IMPORTANT: All explanations must be in RUSSIAN. JSON only. No markdown formatting.
  `;

  const userPrompt = `Word: "${term}" (Level ${level})`;

  try {
    const content = await callUniversalAI([
        { role: "system", content: systemPrompt },
        { role: "user", content: userPrompt }
    ]);

    if (!content) return null;
    return extractJSON<AIExplanation>(content);

  } catch (error) {
    console.error("Explain Word Error:", error);
    throw error;
  }
};

export const generateWordDetails = async (term: string): Promise<AIWordDetails | null> => {
  const systemPrompt = `
    Provide dictionary details for the English word "${term}".
    Output strictly VALID JSON:
    {
      "transcription": "IPA",
      "translation": "Russian translation",
      "definition": "Definition in English",
      "partOfSpeech": "noun/verb/etc",
      "exampleEn": "Example sentence",
      "exampleRu": "Translation of example"
    }
  `;

  try {
    const content = await callUniversalAI([
        { role: "system", content: systemPrompt },
        { role: "user", content: "Details please." }
    ]);

    if (!content) return null;
    return extractJSON<AIWordDetails>(content);

  } catch (error) {
    console.error("Word Details Error:", error);
    return null;
  }
};
