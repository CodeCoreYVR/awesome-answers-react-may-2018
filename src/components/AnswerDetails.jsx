import React from "react";
import Field from "./Field";

const AnswerDetails = props => {
  return (
    <div>
      <p>{props.body}</p>
      <p>By {props.author.first_name}</p>
      <p>
        <Field
          name="Created At"
          value={new Date(props.created_at).toLocaleString()}
        />
      </p>
    </div>
  );
};

export default AnswerDetails;
