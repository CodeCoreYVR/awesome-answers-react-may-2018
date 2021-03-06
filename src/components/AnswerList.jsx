import React from "react";
import AnswerDetails from "./AnswerDetails";

const AnswerList = props => {
  const { answers = [], onAnswerDeleteClick = () => {} } = props;

  return (
    <ul>
      {answers.map(answer => (
        <li key={answer.id}>
          {/* <AnswerDetails
            body={answer.body}
            author={answer.author}
            created_at={answer.created_at}
          /> */}
          <AnswerDetails onDeleteClick={onAnswerDeleteClick} {...answer} />
        </li>
      ))}
    </ul>
  );
};

export default AnswerList;
