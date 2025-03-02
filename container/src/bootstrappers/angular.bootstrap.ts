/**
 * @fileoverview Bootstrap configuration for Angular micro-frontend
 * This file handles the initialization and bootstrapping of the Angular application
 * including the required Zone.js setup and platform initialization.
 */

import 'zone.js';
import { platformBrowserDynamic } from '@angular/platform-browser-dynamic';
import type { NgModuleRef } from '@angular/core';

// Define el tipo para el módulo de Angular
interface AngularModuleType {
  AppModule: unknown;
}

/**
 * Bootstraps the Angular application
 * This function handles:
 * 1. Loading of Zone.js for Angular's change detection
 * 2. Loading Angular core dependencies
 * 3. Initializing the browser platform
 * 4. Bootstrapping the main Angular module
 *
 * @returns {Promise<NgModuleRef<unknown>>} A promise that resolves when the Angular app is bootstrapped
 */
export const bootstrapAngular = async (): Promise<NgModuleRef<unknown>> => {
  try {
    const module = (await import('angularApp/Module')) as AngularModuleType;
    const { AppModule } = module;

    return platformBrowserDynamic().bootstrapModule(AppModule);
  } catch (err) {
    console.error('Error bootstrapping Angular:', err);
    throw err;
  }
};
