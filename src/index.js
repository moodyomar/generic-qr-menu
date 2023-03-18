import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './contexts/LanguageSwitcher';
import { WhatsappProvider } from './contexts/WhatsappCart';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <LanguageProvider>
      <WhatsappProvider>
      <App />
      </WhatsappProvider>
    </LanguageProvider>
  </React.StrictMode>
);

