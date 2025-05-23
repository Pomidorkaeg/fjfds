import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import './index.css'
import { SiteProvider } from './contexts/SiteContext'

// Improved rendering that ensures all elements are loaded before display
const root = document.getElementById('root')!;

// Create and render the app
ReactDOM.createRoot(root).render(
  <React.StrictMode>
    <SiteProvider>
      <App />
    </SiteProvider>
  </React.StrictMode>,
);
