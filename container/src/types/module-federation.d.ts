/**
 * @fileoverview Type declarations for Module Federation remote modules
 *
 * This file defines TypeScript module declarations for remote micro-frontends
 * used within the container application. These declarations allow TypeScript
 * to recognize dynamically imported modules from remote applications.
 */

// Definición de interfaces para los componentes
interface ReactAppProps {
  className?: string;
  // Define las props que acepta el componente React App aquí
  // Por ejemplo: name?: string; onClick?: () => void;
}

interface ReactComponentProps {
  className?: string;
  // Define las props que acepta el ReactComponent aquí
  // Por ejemplo: variant?: 'primary' | 'secondary'; data?: unknown;
}

declare module 'reactApp/App' {
  import { ComponentType } from 'react';

  /**
   * React Micro-Frontend Application
   *
   * This module represents the entry point of the React micro-frontend.
   * It is dynamically imported and integrated into the container application.
   *
   * @example
   * ```tsx
   * import ReactApp from "reactApp/App"
   *
   * function AppContainer() {
   *   return <ReactApp />
   * }
   * ```
   */
  const App: ComponentType<ReactAppProps>;
  export default App;
}

declare module 'reactApp/ReactComponent' {
  import { ComponentType } from 'react';

  /**
   * React Micro-Frontend Component
   *
   * This module exposes an individual React component from the micro-frontend.
   * It can be imported and used independently within the container application.
   *
   * @example
   * ```tsx
   * import ReactComponent from "reactApp/ReactComponent"
   *
   * function Demo() {
   *   return <ReactComponent />
   * }
   * ```
   */
  const ReactComponent: ComponentType<ReactComponentProps>;
  export default ReactComponent;
}

declare module 'angularApp/Module' {
  /**
   * Angular Micro-Frontend Module
   *
   * This module represents the entry point of the Angular micro-frontend.
   * It is dynamically imported and bootstrapped within the container application.
   *
   * @example
   * ```ts
   * import { bootstrapAngular } from "./bootstrapAngular"
   *
   * bootstrapAngular().then(() => {
   *   console.log("Angular app bootstrapped")
   * })
   * ```
   */
  export class AppModule {}
}
