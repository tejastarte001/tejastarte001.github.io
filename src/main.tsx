import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import './index.css';
import App from './App';
import '@fontsource/inter/400.css' // Normal weight
import '@fontsource/inter/500.css' // Medium weight
import '@fontsource/inter/700.css' // Bold weight

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>
);