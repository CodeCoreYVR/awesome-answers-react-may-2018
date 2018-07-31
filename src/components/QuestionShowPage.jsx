// `Component` is a named export. Unlike `React` which is a default
// export, a named export must written with exact names.

// The two exports below are named exports where the name of the
// variable or class is significant.
// export const Component = { ... }
// export class Component { ... }
import React, { Component } from "react";
import QuestionDetails from "./QuestionDetails";
import AnswerList from "./AnswerList";
import Question from "../requests/question";

class QuestionShowPage extends Component {
  constructor(props) {
    // When writing your own `constructor` you must
    // take in `props` as an argument and you must
    // call the constructor of the `Component` class with
    // `super(props)` passing it the `props`.
    super(props);

    this.state = {
      loading: true,
      question: undefined
    };

    this.deleteQuestion = this.deleteQuestion.bind(this);
    this.deleteAnswer = this.deleteAnswer.bind(this);
  }

  componentDidMount() {
    Question.one(606)
      .then(question => {
        console.log(question);

        this.setState({ loading: false, question: question });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }

  deleteQuestion() {
    this.setState({
      question: undefined
    });
  }

  deleteAnswer(id) {
    // Inside AnswerDetails, we're passing the `id` from
    // the props which would preserve the type.
    // Therefore, we don't need to `parseInt`.
    const { question } = this.state;
    const { answers = [] } = question;

    this.setState({
      question: {
        ...question,
        answers: answers.filter(answer => answer.id !== id)
      }
    });
  }

  render() {
    const { loading, question } = this.state;

    if (loading) {
      return (
        <main>
          <h2>Loading...</h2>
        </main>
      );
    }

    if (!question) {
      return (
        <main>
          <h2>Question doesn't exist</h2>
        </main>
      );
    }

    return (
      <main>
        <QuestionDetails {...question} />
        <button onClick={this.deleteQuestion}>Delete</button>
        <h2>Answers</h2>
        <AnswerList
          onAnswerDeleteClick={this.deleteAnswer}
          answers={question.answers}
        />
      </main>
    );
  }
}

export default QuestionShowPage;
