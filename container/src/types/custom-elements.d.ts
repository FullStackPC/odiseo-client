/**
 * @fileoverview Type declarations for custom elements in JSX
 * 
 * This file extends JSX intrinsic elements to support the use of custom elements
 * within React applications. Specifically, it declares the `app-root` element,
 * ensuring TypeScript recognizes it as a valid JSX element.
 */

declare namespace JSX {
  interface IntrinsicElements {
    /**
     * Custom element `<app-root>`
     * 
     * This element serves as the root container for the Angular micro-frontend,
     * allowing seamless integration within the React application.
     * 
     * @example
     * ```tsx
     * <app-root></app-root>
     * ```
     */
    "app-root": React.DetailedHTMLProps<
      React.HTMLAttributes<HTMLElement>,
      HTMLElement
    >
  }
}
