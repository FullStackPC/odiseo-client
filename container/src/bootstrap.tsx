/**
 * @fileoverview Entry point for the React container application
 * 
 * This file initializes and renders the main React application using React 18's `createRoot`.
 * It ensures that the application is mounted onto the DOM and wrapped in `React.StrictMode`
 * for enhanced development checks.
 */

import React from "react"
import { createRoot } from "react-dom/client"
import App from "./App"

/**
 * Gets the root element from the DOM and validates its existence before rendering the application.
 * Throws an error if the element is not found.
 */
const rootElement = document.getElementById("root")

if (!rootElement) {
  throw new Error("Root element not found in the DOM")
}

/**
 * Creates a React root 18 and renders the main application. * importante 
 */
const root = createRoot(rootElement)
root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
)
