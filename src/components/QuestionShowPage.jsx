import React from "react";
import QuestionDetails from "./QuestionDetails";
import AnswerDetails from "./AnswerDetails";
import AnswerList from "./AnswerList";

const QuestionShowPage = props => {
  const { question } = props;

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
      <h2>Answers</h2>
      <AnswerList answers={question.answers} />
    </main>
  );
};

export default QuestionShowPage;
