import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

// A function that returns a React Element (the value returned
// by a call from React.createElement(...)) is a React Component.
const QuestionDetails = () => {
  return (
    <div>
      <h2>What is your favourite colour?</h2>
      <p>Red, green, blue, magenta, yellow, cyan, etc.</p>
      <p>By Bridge Troll</p>
      <p>
        <small>Seen 10 time(s)</small>
        {" • "}
        <small>Created 10 days ago</small>
        {" • "}
        <small>Last edited 2 hours ago</small>
      </p>
    </div>
  );
};
// A self-closing component (that is a component with only
// an opening tag) must end with `/>`. (i.e. <QuestionDetails />)

ReactDOM.render(<QuestionDetails />, document.getElementById("root"));
registerServiceWorker();
