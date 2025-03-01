/**
 * @fileoverview Bootstrap configuration for React micro-frontends
 * This file handles the lazy loading of React components in a micro-frontend architecture
 */

/**
 * Loads the main React application micro-frontend
 * @returns {Promise<any>} The React app component
 */
export const loadReactApp = () => import("reactApp/App")

/**
 * Loads the React component micro-frontend
 * @returns {Promise<any>} The React component
 */
export const loadReactComponent = () => import("reactApp/ReactComponent")
