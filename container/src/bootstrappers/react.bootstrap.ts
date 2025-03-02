/**
 * @fileoverview Bootstrap configuration for React micro-frontends
 * This file handles the lazy loading of React components in a micro-frontend architecture
 */

/**
 * Load the React micro-frontend application
 * @returns Promise that resolves to the React application component
 */
export const loadReactApp = () => import('reactApp/App');

/**
 * Load an individual React micro-frontend component
 * @returns Promise that resolves to the React component
 */
export const loadReactComponent = () => import('reactApp/ReactComponent');
