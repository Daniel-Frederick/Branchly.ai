import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import ReactDOM from "react-dom/client";
import React from "react";
import { FirebaseProvider } from "/Users/ramonbordelies/AiPrompExplorer/AI-Prompt-Explorer/src/FirebaseProvider.tsx"; // Custom provider for auth state

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <FirebaseProvider> {/* Wrap App with FirebaseProvider */}
      <App />
    </FirebaseProvider>
  </React.StrictMode>
);
