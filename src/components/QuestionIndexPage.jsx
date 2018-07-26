import React, { Component } from "react";

class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      questions: props.questions || []
    };
  }

  render() {
    // When destructuring a property from an object, you
    // can assign a default value if that property is
    // "undefined".
    // Here we set a default empty array to `questions` if
    // the prop is undefined.
    const { questions } = this.state;

    return (
      <main>
        <h1>Questions</h1>
        <ul style={{ padding: 0, listStyle: "none" }}>
          {questions.map((question, index) => (
            <li key={question.id}>
              <span>{new Date(question.created_at).toLocaleDateString()}</span>
              {" • "}
              <a href="#">{question.title}</a>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default QuestionIndexPage;
