/*
<div id="parent1"
    <div id = "child1">
        <h1>Hello React1</h1>
        <h2>Hello React2</h2>
    </div>
</div>
*/


const heading = React.createElement("div", {id:"parent1"},
    React.createElement("div", {id:"child1"}, [
        React.createElement("h1", {}, "Hello React1"),
        React.createElement("h2", {}, "Hello React2"),
    ])
);

const root = ReactDOM.createRoot(document.getElementById("root"));

root.render(heading);