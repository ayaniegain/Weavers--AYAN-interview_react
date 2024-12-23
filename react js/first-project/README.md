# React.js Notes

## What is a Component?
- A **component** is a function that:
  - Returns a set of HTML code (JSX).
  - Contains blocks of code for logic and behavior.

### Types of Components
1. **Functional Components**
   - Simple JavaScript functions that return JSX.
2. **Class Components**
   - ES6 classes extending `React.Component`.

## Exporting Components

### Single Export (Default Export)
- Allows exporting one default component per file.
  ```javascript
  export default App;
  import App from './App';
  ```

### Named Export
- Multiple components can be exported as named exports.
  ```javascript
  export { App, Second };
  import { App, Second } from './App';
  ```
- Named exports are treated as an object: `{ "App": "App" }`.

## Component Naming Conventions
- **Capitalized Names**: Component names should start with a capital letter (e.g., `<App />`).
- **File Names**: Use the same name for the file and the component, e.g., `App.jsx`.
- **Other Functions**: Non-component functions can use lowercase names (e.g., `app()`).

## React Fragments
- A **React Fragment** (`<React.Fragment>` or shorthand `<>`) allows grouping multiple elements without adding extra nodes to the DOM.
  ```javascript
  return (
    <>
      <Header />
      <Content />
    </>
  );
  ```
- Does not create unnecessary space in the DOM.

---

By following these guidelines, you can maintain consistency and structure in your React.js projects.

