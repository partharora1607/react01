/**
 * 
 */


const heading1 = React.createElement("h1", { key: 1 }, "I'm h1 tag");
const heading2 = React.createElement("h2", { key: 2 }, "I'm h2 tag");
const children = React.createElement("div", { id: "child" }, [heading1, heading2]);
const parent = React.createElement("div", { id: "parent" }, children);

const root = ReactDOM.createRoot(document.getElementById("root"));

console.log("Parent ", parent);
console.log("....................");
console.log("children", children);
console.log("....................");
console.log("heading - 1", heading1);
console.log("....................");
console.log("heading - 2", heading2);
console.log("....................");

root.render(parent);
