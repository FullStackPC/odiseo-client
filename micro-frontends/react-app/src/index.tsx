/**
 * Entry point for the React micro-frontend
 */
import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';

// Bootstrap must be imported as a module
export const bootstrap = async () => {
  await import('./bootstrap');
};

bootstrap();

const root = ReactDOM.createRoot(document.getElementById('root') as HTMLElement);
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
