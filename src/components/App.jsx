import React from "react";
import QuestionIndexPage from "./QuestionIndexPage";
import QuestionShowPage from "./QuestionShowPage";
import CurrentDateTime from "./CurrentDateTime";

import questionShowData from "../data/question-show";

const App = props => {
  return (
    <div>
      <CurrentDateTime />
      <QuestionIndexPage />
      <QuestionShowPage question={questionShowData} />
    </div>
  );
};

export default App;
