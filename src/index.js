import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import registerServiceWorker from "./registerServiceWorker";
import QuestionShowPage from "./components/QuestionShowPage";

ReactDOM.render(<QuestionShowPage />, document.getElementById("root"));
registerServiceWorker();
