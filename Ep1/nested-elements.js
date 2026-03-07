/*
    <div id="parent">

      <div id="child1">
        <h1> Hello from h1 1 </h1>
        <h1> Hello from h1 2 </h1>
      </div>

      <div id="cilld2">
        <h1> Hello from h1 1 </h1>
        <h1> Hello from h1 2 </h1>
      </div>

    </div>
*/
const c1h11 = React.createElement('h1', {}, "Hello from child1 h1 1.1");
const parent = React.createElement('div', {id: 'parent'}, 
  [
  React.createElement('div', {id: "child1"}, 
    [
      c1h11,
      React.createElement('h1', {}, "Hello from child1 h1 1.2")
    ]),

    React.createElement('div', {id: "child2"}, 
    [
      React.createElement('h1', {}, "Hello from child2 h1 2.1"),
      React.createElement('h1', {}, "Hello from child2 h1 2.2")
    ])
  ]
);

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(parent);