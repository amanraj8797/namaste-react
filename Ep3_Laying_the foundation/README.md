# 🚀 Namaste React - Episode 03: Laying the Foundation

This chapter focuses on understanding the **core building blocks of React**, including **JSX, Babel, React Components, and Component Composition**. It explains how React simplifies UI creation and how tools like **Babel and Parcel** work behind the scenes.

---

# 📚 Topics Covered

- JSX  
- React.createElement vs JSX  
- Benefits of JSX  
- Behind the Scenes of JSX  
- Babel & Parcel Role in JSX  
- React Components  
- Functional Components  
- Component Composition  
- Cross Site Scripting (XSS) Protection in JSX  

---

# 🧩 What is JSX?

**JSX (JavaScript XML)** is a syntax extension for JavaScript used in React to describe UI structure.

It allows developers to write **HTML-like code inside JavaScript**, making UI development easier and more readable.

### Example

```javascript
const heading = <h1>Hello React 🚀</h1>;
```

Behind the scenes JSX converts to:

```javascript
React.createElement("h1", {}, "Hello React 🚀");
```

So JSX is **syntactic sugar over `React.createElement()`**.

---

# ⚔️ React.createElement vs JSX

### React.createElement

```javascript
const heading = React.createElement(
  "h1",
  { id: "title" },
  "Hello from React"
);
```

### JSX

```javascript
const heading = <h1 id="title">Hello from React</h1>;
```

### Comparison

| React.createElement | JSX |
|---------------------|-----|
| Verbose | Cleaner |
| Harder to read | Easy to read |
| Pure JavaScript | HTML-like syntax |

---

# 💪 Benefits (Superpowers) of JSX

- Improves code readability  
- Reduces boilerplate code  
- Allows JavaScript expressions using `{}`  
- Provides better developer experience  
- Prevents Cross Site Scripting (XSS)

Example:

```javascript
const name = "Aman";

const element = <h1>Hello {name}</h1>;
```

---

# ⚙️ Behind the Scenes of JSX

Browsers **do not understand JSX directly**.

JSX is converted into JavaScript before reaching the browser.

Example:

```javascript
const element = <h1>Hello</h1>;
```

Babel converts it to:

```javascript
const element = React.createElement("h1", null, "Hello");
```

---

# 🔧 Role of Babel & Parcel

### Babel

Babel is a **JavaScript compiler** that converts JSX into browser-understandable JavaScript.

Flow:

```
JSX → Babel → React.createElement → Browser
```

### Parcel

Parcel is a **bundler** that:

- Bundles project files
- Runs Babel automatically
- Optimizes assets
- Creates production builds

---

# 🧱 React Components

React applications are built using **components**.

A component is a **reusable UI building block**.

Example:

```javascript
const Heading = () => {
  return <h1>Hello from Component</h1>;
};
```

---

# ⚡ Functional Components

Functional components are **JavaScript functions that return JSX**.

Example:

```javascript
const Title = () => {
  return <h1>Namaste React</h1>;
};
```

Rendering:

```javascript
root.render(<Title />);
```

---

# 🧩 Component Composition

Component composition means **combining components to build complex UI**.

Example:

```javascript
const Title = () => <h1>Namaste React</h1>;

const Header = () => (
  <div>
    <Title />
    <h2>Learning React Step by Step</h2>
  </div>
);
```

Here `Header` uses the `Title` component.

---

# 🔐 Cross Site Scripting (XSS)

React protects against **Cross Site Scripting (XSS)** by automatically escaping values.

Example:

```javascript
const data = "<script>alert('hacked')</script>";

const element = <h1>{data}</h1>;
```

React renders the script as **text**, preventing malicious execution.

---

# 📌 Assignment Questions

## What is JSX?

JSX is a **JavaScript syntax extension used in React** that allows writing HTML-like code inside JavaScript. It gets compiled into `React.createElement()` using Babel.

---

## Superpowers of JSX

- Improves readability  
- Supports JavaScript expressions  
- Prevents XSS attacks  
- Easy component integration  
- Better developer experience  

---

## Role of `type` attribute in `<script>` tag

The `type` attribute specifies **the type of script being used**.

Example:

```html
<script type="module" src="App.js"></script>
```

### Common values

| Type | Description |
|------|-------------|
| text/javascript | Default JavaScript |
| module | ES Modules |
| application/json | JSON data |
| text/babel | Used when compiling JSX in browser |

Most modern React apps use:

```
type="module"
```

---

## Difference Between

### `{TitleComponent}`

Refers to the **component function**, not rendered.

### `{<TitleComponent/>}`

Correct way to **render a React component**.

### `{<TitleComponent></TitleComponent>}`

Another valid syntax to render the same component.

Example:

```javascript
const TitleComponent = () => <h1>Namaste React</h1>;

const Header = () => (
  <div>
    <TitleComponent />
  </div>
);
```

---

# 🎯 Key Takeaways

- JSX makes React code **cleaner and readable**
- Babel converts **JSX → React.createElement**
- Components are **reusable UI building blocks**
- Functional components are **simple JavaScript functions**
- Component composition builds **complex UI structures**
- React protects against **XSS attacks**

---
