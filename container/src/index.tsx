/**
 * @fileoverview Entry point for the React container application
 *
 * This file asynchronously imports and executes the bootstrap file to initialize the application.
 * This approach ensures that shared dependencies are loaded before rendering the app,
 * improving performance and module federation compatibility.
 */

export {};
import('./bootstrap');
