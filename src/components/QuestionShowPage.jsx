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
  render() {
    const { question } = this.props;

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
  }
}

export default QuestionShowPage;
