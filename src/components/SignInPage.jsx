import React, { Component } from "react";
import Session from "../requests/session";

class SignInPage extends Component {
  constructor(props) {
    super(props);

    this.state = {
      errorMessage: undefined
    };

    this.createSession = this.createSession.bind(this);
  }

  createSession(event) {
    event.preventDefault();
    const { currentTarget } = event;

    const formData = new FormData(currentTarget);

    Session.create({
      email: formData.get("email"),
      password: formData.get("password")
    }).then(data => {
      console.log(data);

      if (data.status === 404) {
        this.setState({
          errorMessage: "Invalid username or password"
        });
      } else {
        // SignInPage gets access to the "history" prop,
        // because it is being rendered by a Route component.
        // (i.e. <Route path="/" component={SignInPage} />)
        this.props.history.push("/");
      }
    });
  }

  render() {
    const { errorMessage } = this.state;
    return (
      <main>
        <h2>Sign In</h2>
        <form onSubmit={this.createSession}>
          {errorMessage ? <p>{errorMessage}</p> : null}
          <div>
            <label htmlFor="email">Email</label> <br />
            <input type="text" name="email" id="email" />
          </div>

          <div>
            <label htmlFor="password">Password</label> <br />
            <input type="password" name="password" id="password" />
          </div>

          <input type="submit" value="Sign In" />
        </form>
      </main>
    );
  }
}

export default SignInPage;
