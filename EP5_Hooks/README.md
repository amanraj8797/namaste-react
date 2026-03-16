````markdown
# Namaste React – Notes

This repository contains my notes while learning **React**.  
These notes cover core concepts such as exports, hooks, virtual DOM, reconciliation, and React Fiber.

---

# 1. Named Export vs Default Export vs `* as` Export

JavaScript modules allow us to export functionality from one file and import it into another.

---

# Named Export

Named exports allow **multiple values to be exported from a single file**.

### Example

```javascript
// utils.js

export const sum = (a, b) => a + b;
export const multiply = (a, b) => a * b;
````

Importing:

```javascript
import { sum, multiply } from "./utils";
```

### Characteristics

* Multiple exports allowed
* Import using `{ }`
* Import name must match export name

---

# Default Export

A file can have **only one default export**.

The import name **does not need to match the exported name**.

### Example

```javascript
// Header.js

const Header = () => {
  return <h1>Header Component</h1>;
};

export default Header;
```

Importing:

```javascript
import Header from "./Header";
```

---

# `* as` Export

Imports **all named exports as an object**.

### Example

```javascript
// utils.js

export const sum = (a, b) => a + b;
export const multiply = (a, b) => a * b;
```

Importing:

```javascript
import * as utils from "./utils";

utils.sum(2,3);
utils.multiply(2,3);
```

---

# Export Comparison

| Feature         | Named Export      | Default Export | `* as` Export |
| --------------- | ----------------- | -------------- | ------------- |
| Exports allowed | Multiple          | One            | Imports all   |
| Import syntax   | `{ name }`        | any name       | `* as object` |
| Use case        | Utility functions | Main component | Group imports |

---

# 2. Importance of `config.js`

`config.js` stores **constants and configuration values used throughout the application**.

Instead of hardcoding values multiple times, they are stored in a single place.

## Benefits

* Centralized configuration
* Avoids hardcoding
* Easy maintenance
* Reusable constants

### Example

```javascript
// config.js

export const LOGO_URL =
"https://example.com/logo.png";

export const API_URL =
"https://api.example.com/restaurants";
```

Usage:

```javascript
import { LOGO_URL } from "./config";

<img src={LOGO_URL} />
```

---

# 3. React Hooks

Hooks are **special functions that allow functional components to use state and lifecycle features**.

Before Hooks:

* Only **Class Components** could use state and lifecycle methods.

After Hooks:

* **Function Components** can use state and side effects.

Example:

```javascript
import { useState } from "react";
```

---

# Types of Hooks

Common Hooks include:

* useState
* useEffect
* useContext
* useRef
* useReducer
* useMemo
* useCallback
* useLayoutEffect
* useImperativeHandle

Developers can also create **Custom Hooks**.

---

# 4. useState Hook

`useState` allows functional components to **store and update state**.

State allows components to **remember data between renders**.

## Syntax

```javascript
const [state, setState] = useState(initialValue);
```

Where:

* `state` → current value
* `setState` → updates state

---

## Example

```javascript
import { useState } from "react";

function Counter() {

  const [count, setCount] = useState(0);

  return (
    <div>

      <h1>{count}</h1>

      <button onClick={() => setCount(count + 1)}>
        Increment
      </button>

    </div>
  );
}
```

### What happens internally

1. State is initialized
2. `setState` updates the state
3. React re-renders the component
4. UI updates automatically

---

# 5. Why do we need useState?

Without state:

* Components cannot remember values
* UI cannot update dynamically

Examples where state is required:

* Counter
* Like button
* Form inputs
* Toggle menu
* API responses

State makes UI **interactive and dynamic**.

---

# 6. useEffect Hook

`useEffect` is used to **handle side effects inside components**.

Side effects include:

* API calls
* Event listeners
* Timers
* DOM manipulation

---

## Syntax

```javascript
useEffect(() => {

  // side effect logic

  return () => {
    // cleanup logic
  };

}, [dependencies]);
```

---

## Example

```javascript
import { useEffect, useState } from "react";

function DataComponent() {

  const [data, setData] = useState([]);

  useEffect(() => {

    fetch("https://api.example.com")
      .then(res => res.json())
      .then(data => setData(data));

  }, []);

  return <div>Data Loaded</div>;
}
```

---

# Dependency Array Behavior

| Dependency    | Behavior                |
| ------------- | ----------------------- |
| `[]`          | Runs once               |
| `[state]`     | Runs when state changes |
| No dependency | Runs every render       |

---

# 7. Virtual DOM

The **Virtual DOM** is a lightweight JavaScript representation of the real DOM.

Instead of updating the real DOM directly, React:

```
State Change
     ↓
Virtual DOM Update
     ↓
Diffing Algorithm
     ↓
Real DOM Update
```

Benefits:

* Faster rendering
* Efficient updates
* Less DOM manipulation

---

# 8. Diffing Algorithm

React uses a **diffing algorithm** to compare the old Virtual DOM with the new Virtual DOM.

Goal:

* Find minimal changes
* Update only the required elements

Example:

Old DOM

```html
<ul>
  <li>A</li>
  <li>B</li>
</ul>
```

New DOM

```html
<ul>
  <li>A</li>
  <li>C</li>
</ul>
```

React updates only:

```
B → C
```

Learn more:

[https://medium.com/@livajorge7/understanding-reacts-diffing-algorithm-how-virtual-dom-and-reconciliation-work-under-the-hood-5afc382acd6](https://medium.com/@livajorge7/understanding-reacts-diffing-algorithm-how-virtual-dom-and-reconciliation-work-under-the-hood-5afc382acd6)

---

# 9. Reconciliation

Reconciliation is the **process React uses to update the DOM efficiently**.

Steps:

1. Create new Virtual DOM
2. Compare with previous Virtual DOM
3. Identify differences
4. Update real DOM

---

## Keys in React

Keys help React identify elements during reconciliation.

Example:

```javascript
list.map(item => (
  <li key={item.id}>{item.name}</li>
));
```

Keys improve rendering performance.

---

# 10. React Fiber

React Fiber is the **new reconciliation engine of React**.

It allows React to:

* Pause rendering
* Resume rendering
* Prioritize updates
* Split rendering work into smaller tasks

Benefits:

* Better performance
* Smooth UI updates
* Enables concurrent rendering

Learn more:

[https://github.com/acdlite/react-fiber-architecture?tab=readme-ov-file](https://github.com/acdlite/react-fiber-architecture?tab=readme-ov-file)

---

# 11. Rules of Hooks

Hooks are defined using JavaScript functions but have **strict rules**.

Official Docs:

[https://react.dev/reference/rules/react-calls-components-and-hooks](https://react.dev/reference/rules/react-calls-components-and-hooks)
[https://react.dev/reference/rules/rules-of-hooks](https://react.dev/reference/rules/rules-of-hooks)

---

# Only call Hooks at the top level

Functions whose names start with `use` are Hooks.

Do NOT call Hooks inside:

* loops
* conditions
* nested functions
* try/catch
* event handlers
* class components

Bad example:

```javascript
if (cond) {
  const theme = useContext(ThemeContext);
}
```

```javascript
for (let i = 0; i < 10; i++) {
  const theme = useContext(ThemeContext);
}
```

```javascript
function handleClick() {
  const theme = useContext(ThemeContext);
}
```

---

# Correct Usage

Inside a React component:

```javascript
function Counter() {

  const [count, setCount] = useState(0);

}
```

Inside a custom hook:

```javascript
function useWindowWidth() {

  const [width, setWidth] = useState(window.innerWidth);

}
```

---

# Only call Hooks from React functions

Hooks should only be called from:

* React function components
* Custom Hooks

Correct:

```javascript
function FriendList() {
  const [onlineStatus, setOnlineStatus] = useOnlineStatus();
}
```

Wrong:

```javascript
function setOnlineStatus() {
  const [onlineStatus, setOnlineStatus] = useOnlineStatus();
}
```

---

# ESLint Plugin

You can use this plugin to detect Hook rule violations.

```
eslint-plugin-react-hooks
```

# Summary

React works efficiently because of:

* Virtual DOM
* Diffing Algorithm
* Reconciliation
* React Fiber

Hooks allow functional components to manage:

* State
* Lifecycle
* Reusable logic

Most commonly used Hooks:

* `useState`
* `useEffect`

---
AUTHOR
Aman Raj
