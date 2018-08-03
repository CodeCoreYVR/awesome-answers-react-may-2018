import React, { Component } from "react";
import Question from "../requests/question";
import FormErrors from "./FormErrors";

class QuestionNewPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      validationErrors: []
    };

    this.createQuestion = this.createQuestion.bind(this);
  }

  createQuestion(event) {
    event.preventDefault();
    const { currentTarget } = event;

    const formData = new FormData(currentTarget);

    Question.create({
      title: formData.get("title"),
      body: formData.get("body")
    }).then(data => {
      // debugger;

      if (data.status === 422) {
        this.setState({
          validationErrors: data.errors
        });
      } else {
        const questionId = data.id;
        this.props.history.push(`/questions/${questionId}`);
      }
    });
  }

  render() {
    const { validationErrors } = this.state;

    return (
      <main>
        <h2>New Question</h2>
        {/* <p>{validationErrors.map(e => `${e.field} ${e.message}`).join(", ")}</p> */}
        <form onSubmit={this.createQuestion}>
          <div>
            <label htmlFor="title">Title</label> <br />
            <FormErrors forField="title" errors={validationErrors} />
            <input name="title" id="title" />
          </div>

          <div>
            <label htmlFor="body">Body</label> <br />
            <FormErrors forField="body" errors={validationErrors} />
            <textarea name="body" id="body" cols="60" rows="4" />
          </div>

          <div>
            <input type="submit" value="Submit" />
          </div>
        </form>
      </main>
    );
  }
}

export default QuestionNewPage;
