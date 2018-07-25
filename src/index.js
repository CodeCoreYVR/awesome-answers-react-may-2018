import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";

// When writing components, you named with beginning with a capital
// letter. Otherwise, React will interpret your component as an
// HTML tag and will use your component function.
const Field = props => {
  return (
    <small>
      <strong>{props.name}: </strong>
      {props.value}
    </small>
  );
};

// A function that returns a React Element (the value returned
// by a call from React.createElement(...)) is a React Component.
const QuestionDetails = props => {
  return (
    <div>
      <h2>{props.title}</h2>
      <p>{props.body}</p>
      <p>By {props.author.full_name}</p>
      <p>
        <Field name="View Count" value={props.view_count} />
        {" • "}
        <Field name="Created At" value={props.created_at.toLocaleString()} />
        {" • "}
        <Field name="Updated At" value={props.updated_at.toLocaleString()} />
      </p>
    </div>
  );
};
// A self-closing component (that is a component with only
// an opening tag) must end with `/>`. (i.e. <QuestionDetails />)

const AnswerDetails = props => {
  return (
    <div>
      <p>{props.body}</p>
      <p>By {props.author.full_name}</p>
      <p>
        <Field name="Created At" value={props.created_at.toLocaleString()} />
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
      <AnswerDetails
        body="Red."
        author={{ full_name: "Sir Lancelot" }}
        created_at={new Date()}
      />
    </main>
  );
};

ReactDOM.render(<QuestionShowPage />, document.getElementById("root"));
registerServiceWorker();
