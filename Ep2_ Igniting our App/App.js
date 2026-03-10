import React from "react";
import ReactDOM from "react-dom/client";

// also create and store in variable and simply use where required
const c1h11 = React.createElement('h1', {key: "1"}, "Hello from child1 h1 1.1");

const parent = React.createElement('div', {id: 'parent'}, 
  [
  React.createElement('div', {id: "child1"}, 
    [
      c1h11,
      React.createElement('h1', {key: "2"}, "Hello from child1 h1 1.2")
    ]),

    React.createElement('div', {id: "child2"}, 
    [
      React.createElement('h1', {key: "3"}, "Hello from child2 h1 2.1"),
      React.createElement('h1', {key: "4"}, "Hello from child2 h1 2.2")
    ])
  ]
);

console.log("App running");

const root = ReactDOM.createRoot(document.getElementById('root'));

console.log("2nd last End");

root.render(parent);

console.log("End");