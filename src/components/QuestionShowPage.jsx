import React from "react";
import QuestionDetails from "./QuestionDetails";
import AnswerDetails from "./AnswerDetails";

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

export default QuestionShowPage;
