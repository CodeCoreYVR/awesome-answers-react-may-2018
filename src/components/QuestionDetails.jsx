import React from "react";
import Field from "./Field";

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

export default QuestionDetails;
