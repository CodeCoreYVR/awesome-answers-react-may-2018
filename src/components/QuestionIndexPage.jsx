import React, { Component } from "react";
import Question from "../requests/question";
import { Link } from "react-router-dom";

class QuestionIndexPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      questions: []
    };

    // For methods that we pass as callbacks to event listeners
    // or anything else, that method will no longer be owned by
    // instance of our component which will make `this` undefined
    // at the time it is called.

    // To permanently set `this` to an object of choice, call the
    // `.bind(<an-object>)` on a function. This will create a new
    // version of the function where this set to <an-object>
    // and can never be changed again.
    this.deleteQuestion = this.deleteQuestion.bind(this);
  }

  componentDidMount() {
    Question.all()
      .then(questions => {
        this.setState({ loading: false, questions: questions });
      })
      .catch(() => {
        this.setState({ loading: false });
      });
  }

  deleteQuestion(event) {
    const { currentTarget } = event;
    // When you get a value from HTML attributes, it will
    // usually be a string. Make sure to parse into the type
    // that you need before using it.
    const questionId = parseInt(currentTarget.dataset.id, 10);

    // Never directly assign to the state.
    // this.state = { question: [] } // !!BAD 😡
    // To do any changes to the state, you must use the
    // this.setState(...) method.

    console.log("Type of question id", typeof questionId);

    const { questions } = this.state;

    this.setState({
      questions: questions.filter(question => question.id !== questionId)
    });

    // console.log("The id is", questionId);
  }

  render() {
    // When destructuring a property from an object, you
    // can assign a default value if that property is
    // "undefined".
    // Here we set a default empty array to `questions` if
    // the prop is undefined.
    const { loading, questions } = this.state;

    if (loading) {
      return (
        <main>
          <h1>Questions</h1>
          <h2>Loading...</h2>
        </main>
      );
    }

    return (
      <main>
        <h1>Questions</h1>
        <ul style={{ padding: 0, listStyle: "none" }}>
          {questions.map((question, index) => (
            <li style={{ marginBottom: "1rem" }} key={question.id}>
              <span>{new Date(question.created_at).toLocaleDateString()}</span>
              {" • "}
              <Link to={`/questions/${question.id}`}>{question.title}</Link>
              <br />
              {/*
              document
                .querySelector("button")
                .addEventListener("click", () => console.log("Button clicked!"))
              */}
              {/* <button onClick={e => console.log(e.target, "was clicked!")}> */}
              <button data-id={question.id} onClick={this.deleteQuestion}>
                Delete
              </button>
            </li>
          ))}
        </ul>
      </main>
    );
  }
}

export default QuestionIndexPage;
