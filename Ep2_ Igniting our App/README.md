# 🚀 Namaste React – Episode 2

This project contains learning notes and setup for **React development using npm and Parcel bundler**.

It explains how modern frontend projects are structured and how tools like **npm, Parcel, and bundlers** help manage dependencies and optimize applications.

---

# 📚 Topics Covered

- npm (Node Package Manager)
- CDN (Content Delivery Network)
- npm vs CDN
- Semantic Versioning
- Caret (^) vs Tilde (~)
- Bundlers
- Parcel Bundler
- Development vs Production Build
- package.json
- package-lock.json
- node_modules
- React Root Rendering

---

# 📂 Project Structure

```
namaste-react/
│
├── index.html
├── index.js
├── package.json
├── package-lock.json
├── .gitignore
└── node_modules/
```

---

# ⚙️ Installation

Clone the repository:

```bash
git clone https://github.com/your-username/namaste-react.git
```

Move into the project directory:

```bash
cd namaste-react
```

Install dependencies:

```bash
npm install
```

---

# ▶️ Run the Project

Start development server:

```bash
npm start
```

OR

```bash
npx parcel index.html
```

Parcel will:

- Start a development server
- Bundle JavaScript and assets
- Enable hot reloading

---

# 🏗 Build for Production

Create an optimized production build:

```bash
npm run build
```

Parcel will:

- Minify code
- Remove unused code
- Optimize assets

---

# 📦 npm (Node Package Manager)

npm is used to install and manage project dependencies.

Example:

```bash
npm install react
```

This installs the **React library** into the project.

---

# 🌐 CDN (Content Delivery Network)

CDNs serve files through distributed servers.

Example:

```html
<script src="https://cdn.jsdelivr.net/npm/react@18/umd/react.production.min.js"></script>
```

Used mostly for **quick demos or small projects**.

---

# ⚖️ npm vs CDN

| Feature | npm | CDN |
|------|------|------|
| Purpose | Package management | File delivery |
| Used by | Developers | Browsers |
| Installation | npm install | script tag |
| Usage | Build time | Runtime |

---

# 🔢 Semantic Versioning

Packages follow this format:

```
MAJOR.MINOR.PATCH
```

Example:

```
18.2.1
```

Meaning:

- **MAJOR** → Breaking changes
- **MINOR** → New features
- **PATCH** → Bug fixes

---

# 🔧 Caret (^) vs Tilde (~)

Example dependency:

```
"react": "^18.2.0"
```

### Caret (^)

Allows:

```
>=18.2.0 <19.0.0
```

Updates **minor + patch versions**

---

### Tilde (~)

Example:

```
"react": "~18.2.0"
```

Allows:

```
>=18.2.0 <18.3.0
```

Updates **patch versions only**

---

# 📦 Bundlers

A **bundler** combines multiple files into optimized bundles.

Before bundling:

```
src/
 ├─ index.js
 ├─ utils.js
 └─ styles.css
```

After bundling:

```
dist/
 └─ bundle.js
```

Popular bundlers:

- Webpack
- Parcel
- Vite
- Rollup

---

# 🚀 Parcel Bundler

Parcel is a **zero-configuration bundler**.

Install Parcel:

```bash
npm install -D parcel
```

Run project:

```bash
npx parcel index.html
```

---

# 📂 package.json

`package.json` contains:

- Project information
- Scripts
- Dependencies
- Version details

Example:

```json
{
  "name": "namaste-react",
  "version": "1.0.0",
  "scripts": {
    "start": "parcel index.html",
    "build": "parcel build index.html"
  }
}
```

---

# 🔒 package-lock.json

Automatically generated file that:

- Locks exact dependency versions
- Ensures consistent installations

---

# 📁 node_modules

This folder contains the **actual installed packages** used in the project.

⚠️ This folder should **NOT be committed to GitHub**.

---

# 🧠 Important Git Rule

Commit:

```
package.json
package-lock.json
```

Ignore:

```
node_modules
```

Add in `.gitignore`:

```
node_modules
```

---

# ⚛️ React Root Rendering

React renders the app inside a **root container**.

Example:

```javascript
import ReactDOM from "react-dom/client";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
```

---

# 🎯 Key Learnings

✔ npm dependency management  
✔ CDN usage  
✔ Semantic versioning  
✔ Parcel bundler  
✔ Project structure  
✔ React root rendering  

---

# 📌 Author

**Aman Raj**

Final Year CSE Student | Aspiring Software Engineer

---

# ⭐ Support

If you found this project helpful, please **give it a star ⭐ on GitHub**.