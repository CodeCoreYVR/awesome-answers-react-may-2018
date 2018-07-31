import React from "react";
// We can rename (or alias) named imports
// by using the `as` keyword as shown below:
import { BrowserRouter as Router, Route } from "react-router-dom";

import NavBar from "./NavBar";
import QuestionIndexPage from "./QuestionIndexPage";
import QuestionShowPage from "./QuestionShowPage";
import WelcomePage from "./WelcomePage";

const App = props => {
  return (
    <Router>
      <div>
        <NavBar />
        <Route path="/" exact component={WelcomePage} />
        <Route path="/questions" exact component={QuestionIndexPage} />
        <Route path="/questions/:id" component={QuestionShowPage} />
      </div>
    </Router>
  );
};

export default App;
