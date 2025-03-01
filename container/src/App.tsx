/**
 * @fileoverview Main container application for micro-frontends
 * 
 * This file serves as the entry point for the container application, integrating
 * multiple micro-frontends including React and Angular-based applications.
 * It utilizes React Router for navigation and lazy loading to optimize performance.
 */

import React, { lazy, Suspense, useEffect } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import Navigation from "./components/Navigation"
import { bootstrapAngular } from "./bootstrappers/angular.bootstrap"
import {
  loadReactApp,
  loadReactComponent,
} from "./bootstrappers/react.bootstrap"

// React micro-frontends with lazy loading
const ReactApp = lazy(loadReactApp)
const ReactComponent = lazy(loadReactComponent)

/**
 * Angular Micro-Frontend Wrapper
 * 
 * A React functional component that serves as a wrapper for the Angular micro-frontend.
 * It bootstraps the Angular application on mount and renders the `<app-root>` element
 * as a container for the Angular app.
 * 
 * @component
 * @example
 * ```tsx
 * <AngularWrapper />
 * ```
 * 
 * @returns {JSX.Element} The Angular app root element
 */
const AngularWrapper: React.FC = () => {
  useEffect(() => {
    bootstrapAngular()
  }, [])

  return <app-root />
}

/**
 * Main Application Component
 * 
 * This component serves as the root of the container application, handling routing,
 * navigation, and rendering of micro-frontends.
 * 
 * Features:
 * - **Navigation**: Provides a menu to access different micro-frontends.
 * - **Lazy Loading**: Uses `React.lazy` and `Suspense` to load React micro-frontends dynamically.
 * - **Micro-Frontend Integration**: Includes both React and Angular-based applications.
 * - **React Router**: Manages navigation between different sections.
 * 
 * @component
 * @example
 * ```tsx
 * <App />
 * ```
 * 
 * @returns {JSX.Element} The main container application layout
 */
const App: React.FC = () => {
  return (
    <Router>
      <div>
        <Navigation />
        <h1>Container Application</h1>
        <Suspense fallback={<div>Loading...</div>}>
          <Switch>
            <Route path="/react" render={() => <ReactApp />} />
            <Route path="/react-component" render={() => <ReactComponent />} />
            <Route path="/angular" render={() => <AngularWrapper />} />
            <Route
              path="/"
              exact
              render={() => <div>Welcome to the Micro-Frontend Project</div>}
            />
          </Switch>
        </Suspense>
      </div>
    </Router>
  )
}

export default App
