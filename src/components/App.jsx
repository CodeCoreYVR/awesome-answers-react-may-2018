import React from "react";
import QuestionIndexPage from "./QuestionIndexPage";
import QuestionShowPage from "./QuestionShowPage";

import questionIndexData from "../data/question-index";

const App = props => {
  return (
    <div>
      <QuestionIndexPage questions={questionIndexData} />
      <QuestionShowPage />
    </div>
  );
};

export default App;
