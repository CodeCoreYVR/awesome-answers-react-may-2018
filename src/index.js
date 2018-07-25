import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

// A function that returns a React Element (the value returned
// by a call from React.createElement(...)) is a React Component.
const QuestionDetails = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <p>By {props.author.full_name}</p>
      <p>
        <small>
          <strong>View Count: </strong>
          {props.view_count}
        </small>
        {" • "}
        <small>
          <strong>Created At: </strong>
          {props.created_at.toLocaleString()}
        </small>
        {" • "}
        <small>
          <strong>Updated At: </strong>
          {props.updated_at.toLocaleString()}
        </small>
      </p>
    </div>
  );
};
// A self-closing component (that is a component with only
// an opening tag) must end with `/>`. (i.e. <QuestionDetails />)

const AnswerDetails = () => {
  return (
    <div>
      <p>This is my answer's text.</p>
      <p>By Ulises Wisozk</p>
      <p>
        <strong>Created At:</strong> 1 month ago
      </p>
    </div>
  );
};

const QuestionShowPage = () => {
  return (
    <main>
      <QuestionDetails
        title="What is your favourite colour?"
        body="Red, green, blue, light golden rod, lime, magenta, etc."
        author={{ full_name: "Bridge Troll" }}
        view_count={22}
        created_at={new Date()}
        updated_at={new Date()}
      />
      <AnswerDetails />
    </main>
  );
};

ReactDOM.render(<QuestionShowPage />, document.getElementById("root"));
registerServiceWorker();
