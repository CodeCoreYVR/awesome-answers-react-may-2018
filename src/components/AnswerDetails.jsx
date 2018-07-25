import React from "react";
import Field from "./Field";

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

export default AnswerDetails;
