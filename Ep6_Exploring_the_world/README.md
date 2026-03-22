# 🍽️ React Restaurant App – Notes & Concepts - EPISODE 6
# EXPLORE THE WORLD

## 📌 Overview

This project is a **React-based restaurant listing app** that demonstrates core frontend concepts like:

* React Hooks (`useState`, `useEffect`)
* API fetching
* Search & filtering
* Conditional rendering
* Optional chaining
* CORS basics
* Shimmer UI (loading state)

---

# ⚛️ 1. React Hooks

## 🔹 What are Hooks?

Hooks are functions that allow you to use **state and lifecycle features** in functional components.

---

## 🔸 `useState`

### 👉 Purpose:

Manages component state.

### 👉 Syntax:

```js
const [state, setState] = useState(initialValue);
```

### 👉 Example:

```js
const [input, setInput] = useState("");
const [resturentList, setResturentList] = useState([]);
```

### 🧠 Key Points:

* State updates are **asynchronous**
* Triggers **re-render**
* Never mutate state directly

---

## 🔸 `useEffect`

### 👉 Purpose:

Handles **side effects** (API calls, subscriptions, etc.)

### 👉 Syntax:

```js
useEffect(() => {
  // side effect
}, [dependencies]);
```

### 👉 Example:

```js
useEffect(() => {
  fetchData();
}, []);
```

### 🧠 Behavior:

| Dependency | When it runs         |
| ---------- | -------------------- |
| `[]`       | Only once (on mount) |
| No array   | Every render         |
| `[value]`  | When value changes   |

---

## 🔸 Custom Hooks (Advanced)

### 👉 Purpose:

Reuse logic across components.

### 👉 Example:

```js
const useFetch = (url) => {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch(url)
      .then(res => res.json())
      .then(setData);
  }, [url]);

  return data;
};
```

---

# 🌐 2. API Fetching

## 🔸 Fetching Data

```js
const data = await fetch(SWIGGI_API);
const json = await data.json();
```

### 🧠 Key Concepts:

* `fetch()` → returns **ReadableStream**
* `.json()` → converts to JS object
* Always use `async/await` or `.then()`

---

## 🔸 Optional Chaining (`?.`)

### 👉 Purpose:

Prevents errors when accessing nested data.

### 👉 Example:

```js
const val = json?.data?.cards;
```

### ❌ Without it:

```js
json.data.cards // may crash
```

### ✅ With it:

```js
json?.data?.cards // safe
```

---

# 🌍 3. CORS (Cross-Origin Resource Sharing)

## 👉 What is CORS?

A browser security mechanism that blocks requests between different origins.

### 🧠 Example:

Frontend:

```
http://localhost:3000
```

API:

```
https://api.swiggy.com
```

➡️ Browser may block request due to CORS

---

## 🔧 Solutions:

* Use **proxy**
* Backend API handling
* CORS-enabled server
* Browser extensions (only for dev)

---

# ✨ 4. Shimmer UI (Loading State)

## 👉 What is Shimmer UI?

A placeholder UI shown while data is loading.

### 👉 Example:

```js
(resturentList.length === 0) ? <Shimmer /> : <UI />
```

### 🧠 Why use it?

* Improves UX
* Avoids blank screen
* Shows loading visually

---

# 🔍 5. Search & Filtering

## 🔸 Filter by Rating

```js
const filteredList = allResturentList.filter((resturent) =>
  resturent.info.avgRating > 4.2
);
```

---

## 🔸 Search by Name

```js
const filterList = allResturentList.filter((resturent) =>
  resturent.info.name.toLowerCase().includes(input.toLowerCase())
);
```

### 🧠 Key Concepts:

* `.filter()` → returns new array
* `.includes()` → substring matching
* Use `toLowerCase()` for case-insensitive search

---

# 🎯 6. Controlled Components

## 👉 Input Handling

```js
<input
  value={input}
  onChange={(e) => setInput(e.target.value)}
/>
```

### 🧠 Why?

React controls the input state → predictable behavior

---

# 🔁 7. Component Lifecycle (Functional)

| Phase   | Hook                         |
| ------- | ---------------------------- |
| Mount   | `useEffect(() => {}, [])`    |
| Update  | `useEffect(() => {}, [dep])` |
| Unmount | cleanup function             |

---

# ⚠️ 8. Important Patterns in Your Code

## 🔹 Dual State Management

```js
resturentList → displayed data  
allResturentList → original data
```

### 🧠 Why?

Prevents losing original data after filtering/search

---

## 🔹 Conditional Rendering

```js
resturentList.length === 0 ? <Shimmer /> : <MainUI />
```

---

## 🔹 List Rendering with Keys

```js
<Restaurants key={resturent.info.id} />
```

### ❌ Avoid:

```js
key={index}
```

### ✅ Use:

Unique IDs

---

## 🔹 Prevent Default Form Behavior

```js
const handleSubmit = (e) => e.preventDefault();
```

---

## 🔹 Async State Behavior

```js
setInput(val);
console.log(input); // old value
```

### 🧠 Reason:

State updates are **batched & async**

---

# 🧠 9. Best Practices

✔ Keep original & filtered data separate
✔ Use meaningful variable names
✔ Avoid unnecessary re-renders
✔ Use optional chaining for safety
✔ Always use unique keys in lists
✔ Handle errors in API calls

---

## 🔸 Error Handling

```js
try {
  const data = await fetch(url);
} catch (err) {
  console.error(err);
}
```

---
# 🔸 1. Loading State (Better Approach)

## 👉 Problem in Your Code

You are doing:

```js
resturentList.length === 0 ? <Shimmer /> : <UI />
```

⚠️ Issue:

* What if API returns **empty list**?
* It will still show **Shimmer forever ❌**

---

## ✅ Better Approach: Use `loading` state

### 👉 Code:

```js
const [loading, setLoading] = useState(true);

useEffect(() => {
  fetchData();
}, []);

const fetchData = async () => {
  try {
    const data = await fetch(SWIGGI_API);
    const json = await data.json();

    const list = json?.data?.cards || [];

    setResturentList(list);
    setAllResturentList(list);
  } catch (err) {
    console.error(err);
  } finally {
    setLoading(false); // ✅ important
  }
};
```

---

### 👉 Rendering:

```js
return loading ? <Shimmer /> : <MainUI />;
```

---

## 🧠 Why this is better?

* Separates **data state** from **UI state**
* Works even if:

  * API fails
  * API returns empty array
* More **professional & scalable**

---

# 🔸 2. Debounced Search (Performance Optimization)

## 👉 Problem:

Every time user types:

```js
onChange → search()
```

⚠️ This can:

* Run too many filters
* Cause lag in large data
* Waste performance

---

## ✅ Solution: Debouncing

👉 Delay execution until user stops typing

---

## 🔸 Manual Debounce using `useEffect`

### 👉 Code:

```js
const [input, setInput] = useState("");
const [debouncedInput, setDebouncedInput] = useState("");

useEffect(() => {
  const timer = setTimeout(() => {
    setDebouncedInput(input);
  }, 500); // delay (500ms)

  return () => clearTimeout(timer); // cleanup
}, [input]);
```

---

### 👉 Apply search:

```js
useEffect(() => {
  const filtered = allResturentList.filter((res) =>
    res.info.name.toLowerCase().includes(debouncedInput.toLowerCase())
  );

  setResturentList(filtered);
}, [debouncedInput]);
```

---

## 🧠 Why this is important?

* Prevents unnecessary re-renders
* Improves performance
* Used in:

  * Search bars
  * API calls
  * Autocomplete

---

# 🔸 3. Custom Hook for Fetching (Clean Code)

## 👉 Problem:

Your `fetchData` logic is inside component → not reusable

---

## ✅ Solution: Custom Hook

👉 Extract logic into reusable function

---

## 🔸 Example: `useFetch.js`

```js
import { useEffect, useState } from "react";

const useFetch = (url) => {
  const [data, setData] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const res = await fetch(url);
        const json = await res.json();
        setData(json);
      } catch (err) {
        setError(err);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, [url]);

  return { data, loading, error };
};

export default useFetch;
```

---

## 🔸 Use in Component:

```js
const { data, loading, error } = useFetch(SWIGGI_API);
```

---

## 🧠 Benefits:

* ✅ Cleaner components
* ✅ Reusable logic
* ✅ Separation of concerns
* ✅ Easy testing

---

# 🏁 Final Understanding

| Concept       | Purpose                    |
| ------------- | -------------------------- |
| Loading State | Controls UI while fetching |
| Debouncing    | Improves performance       |
| Custom Hook   | Reusable logic             |

---

# 🏁 Final Summary

This project covers:

✅ React Hooks (`useState`, `useEffect`)
✅ API handling
✅ Search & filtering logic
✅ Conditional rendering
✅ Optional chaining
✅ CORS basics
✅ Shimmer UI

---

# 🚀 Pro Tip (Important for Interviews)

If interviewer asks:
👉 “What did you learn from this project?”

Say:

* State management using hooks
* Handling API data safely
* Implementing search & filters
* Optimizing UX with loading states
* Writing clean and maintainable React code

---