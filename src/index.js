import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { LanguageProvider } from './contexts/LanguageSwitcher';

const root = ReactDOM.createRoot(document.getElementById('root'));


root.render(
  <React.StrictMode>
    <LanguageProvider>
      <App />
    </LanguageProvider>
  </React.StrictMode>
);

