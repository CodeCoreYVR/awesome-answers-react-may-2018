import React from "react";
import QuestionIndexPage from "./QuestionIndexPage";
import QuestionShowPage from "./QuestionShowPage";
import CurrentDateTime from "./CurrentDateTime";

import questionIndexData from "../data/question-index";
import questionShowData from "../data/question-show";

const App = props => {
  return (
    <div>
      <CurrentDateTime />
      <QuestionIndexPage questions={questionIndexData} />
      <QuestionShowPage question={questionShowData} />
    </div>
  );
};

export default App;
