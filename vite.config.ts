
import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  const env = loadEnv(mode, '.', '');
  
  // 1. Get the base URL from env or default to DeepSeek
  let rawTarget = env.VITE_AI_BASE_URL || 'https://api.deepseek.com';

  // 2. Normalize the target: remove trailing slashes and specific endpoint paths
  const target = rawTarget
    .replace(/\/chat\/completions\/?$/, '') 
    .replace(/\/+$/, ''); 

  console.log(`🔌 Proxy Target Configured: ${target}`);

  return {
    plugins: [react()],
    server: {
      proxy: {
        // Proxy requests starting with /ai-proxy to the target API
        '/ai-proxy': {
          target: target,
          changeOrigin: true,
          secure: false,
          rewrite: (path) => path.replace(/^\/ai-proxy/, ''),
          configure: (proxy, _options) => {
            proxy.on('error', (err, _req, _res) => {
              console.error('Proxy Error:', err);
            });
            proxy.on('proxyReq', (proxyReq, req, _res) => {
              // console.log('Proxying:', req.method, req.url, '->', target + proxyReq.path);
            });
            proxy.on('proxyRes', (proxyRes, req, _res) => {
              // console.log('Proxy Response:', proxyRes.statusCode, req.url);
            });
          },
        },
      },
    },
  };
});
