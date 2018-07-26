// `Component` is a named export. Unlike `React` which is a default
// export, a named export must written with exact names.

// The two exports below are named exports where the name of the
// variable or class is significant.
// export const Component = { ... }
// export class Component { ... }
import React, { Component } from "react";
import QuestionDetails from "./QuestionDetails";
import AnswerDetails from "./AnswerDetails";
import AnswerList from "./AnswerList";

class QuestionShowPage extends Component {
  constructor(props) {
    // When writing your own `constructor` you must
    // take in `props` as an argument and you must
    // call the constructor of the `Component` class with
    // `super(props)` passing it the `props`.
    super(props);

    this.state = {
      question: props.question
    };
  }

  render() {
    const { question } = this.state;

    return (
      <main>
        <QuestionDetails {...question} />
        <h2>Answers</h2>
        <AnswerList answers={question.answers} />
      </main>
    );
  }
}

export default QuestionShowPage;
