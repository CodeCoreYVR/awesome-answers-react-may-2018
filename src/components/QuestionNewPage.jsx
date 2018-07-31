import React, { Component } from "react";
import Question from "../requests/question";

class QuestionNewPage extends Component {
  constructor(props) {
    super(props);

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
      const questionId = data.id;

      this.props.history.push(`/questions/${questionId}`);
    });
  }

  render() {
    return (
      <main>
        <h2>New Question</h2>
        <form onSubmit={this.createQuestion}>
          <div>
            <label htmlFor="title">Title</label> <br />
            <input name="title" id="title" />
          </div>

          <div>
            <label htmlFor="body">Body</label> <br />
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
