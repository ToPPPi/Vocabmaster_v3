
import React from 'react';
import { createRoot } from 'react-dom/client';
import App from './src/App';
import { ErrorBoundary } from './src/components/ErrorBoundary';

const root = createRoot(document.getElementById('root')!);
root.render(
  <React.StrictMode>
    <ErrorBoundary>
      <App />
    </ErrorBoundary>
  </React.StrictMode>
);
