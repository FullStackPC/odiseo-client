/**
 * @fileoverview Navigation component for the container application
 * This component serves as the main navigation menu for the micro-frontend architecture,
 * providing links to access different micro-frontends and components.
 */

import React from "react"
import { Link } from "react-router-dom"

/**
 * Navigation Component
 * 
 * A React functional component that renders the main navigation menu.
 * It provides routing links to:
 * - Home page (/)
 * - React Micro-Frontend (/react)
 * - React Component demo (/react-component)
 * - Angular Micro-Frontend (/angular)
 * 
 * The component uses react-router-dom's Link component for client-side routing,
 * ensuring smooth transitions between different micro-frontends without page reloads.
 * 
 * @component
 * @example
 * ```tsx
 * <Navigation />
 * ```
 * 
 * @returns {JSX.Element} A navigation menu with links to different sections of the application
 */
const Navigation: React.FC = () => {
  return (
    <nav>
      <ul>
        <li>
          <Link to="/react">React Micro-Frontend</Link>
        </li>
        <li>
          <Link to="/react-component">React Component</Link>
        </li>
        <li>
          <Link to="/angular">Angular Micro-Frontend</Link>
        </li>
        <li>
          <Link to="/">Home</Link>
        </li>
      </ul>
    </nav>
  )
}

export default Navigation
