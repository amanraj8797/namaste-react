import React from "react";
import ReactDOM from "react-dom/client";

// React element (js object) with code react =====
// const heading = React.createElement("h1", { id: "heading" }, "React rendered");

// react element with jsx => it is also js object ==
// have to use () when we write jsx in multiple lines ==
// to give attribute name in jsx, we use camel case format ==

// reactelement

const ComponentInElement = () => (
  <>
  <h1>Component in element</h1>
  </>
)

// adding component in react element
const jsxHeading = (
  <>
    <ComponentInElement />
    <h1>Before heading</h1>
    <h1 id="heading" className="head">React rendered with jsx</h1>
    <h2>After heading</h2>
  </>
);

console.log(jsxHeading); // js object

// React component using Arrow function 
// using react element in react component
const HeadingComponenet1 = () => {
  return (
  <>
  {jsxHeading}
  <h1> Component 1 Heading component 1 </h1>
  <h2> Returning JSX with return keyword from component 1</h2>
  </>
)};

const HeadingComponent2 = () => (
  <>
  <HeadingComponenet1 />
  <h1> After component 1</h1>
  <h1> Component 2 Heading component 2 </h1>
  <h2>Adding multiple JSX in component and bind them into react fregment</h2>
  </>
);

// using js in react component
function Component () {
  function add() {
    return 100 + 1;
  }

  return (  
  <>
  <h1>Added value </h1>
  {add()}
  </>
)
}

// React component using normal js function
function Component3() {
  return (
    <>
    <HeadingComponent2 />
    <h1>After component 2 </h1>
    <h2> End made this component using normal js function </h2>
    <Component></Component>
    {Component()}
    </>
  )
}

const root = ReactDOM.createRoot(document.getElementById("root"));

// rendering react element ====
// root.render(jsxHeading);

// rendering react component
root.render(<Component3 />);