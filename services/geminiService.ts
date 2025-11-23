import { GoogleGenAI, Type } from "@google/genai";
import { UserLevel } from "../types";

// NOTE: In a real production app, you should proxy these requests through your own backend
// to protect the API Key. For this demo, we use the env var directly.

const getAiClient = () => {
  // Ensure process is defined before accessing it to prevent browser crashes
  const apiKey = (typeof process !== 'undefined' && process.env) ? process.env.API_KEY : undefined;
  
  if (!apiKey) {
    console.warn("API_KEY not set. Mocking AI response.");
    return null;
  }
  return new GoogleGenAI({ apiKey });
};

export const generateWordContext = async (word: string, level: UserLevel): Promise<{ examples: string[], translation?: string }> => {
  const ai = getAiClient();

  // Fallback if no API key
  if (!ai) {
    await new Promise(r => setTimeout(r, 1000)); // Simulate delay
    return {
      examples: [
        `This is a simulated example for '${word}'.`,
        `Another dummy sentence using '${word}' for level ${level}.`
      ],
      translation: "Симуляция"
    };
  }

  const prompt = `
    Generate content for the English word "${word}".
    Target proficiency level: ${level}.
    Task:
    1. Provide 2 distinct example sentences using the word in context suitable for the level.
    2. Provide a Russian translation of the word.
  `;

  try {
    const response = await ai.models.generateContent({
      model: "gemini-2.5-flash",
      contents: prompt,
      config: {
        responseMimeType: "application/json",
        responseSchema: {
          type: Type.OBJECT,
          properties: {
            examples: {
              type: Type.ARRAY,
              items: { type: Type.STRING },
              description: "Two example sentences"
            },
            translation: {
              type: Type.STRING,
              description: "Russian translation"
            }
          }
        }
      }
    });

    const json = JSON.parse(response.text || '{}');
    return {
      examples: json.examples || [],
      translation: json.translation
    };

  } catch (error) {
    console.error("Gemini API Error:", error);
    return {
      examples: ["Error generating examples.", "Please try again later."],
      translation: "Error"
    };
  }
};