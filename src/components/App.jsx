import React, { Component } from "react";
// We can rename (or alias) named imports
// by using the `as` keyword as shown below:
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";

import NavBar from "./NavBar";
import QuestionIndexPage from "./QuestionIndexPage";
import QuestionShowPage from "./QuestionShowPage";
import QuestionNewPage from "./QuestionNewPage";
import WelcomePage from "./WelcomePage";
import SignInPage from "./SignInPage";
import User from "../requests/user";
import Session from "../requests/session";

class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      loading: true,
      currentUser: undefined
    };

    this.getUser = this.getUser.bind(this);
    this.destroySession = this.destroySession.bind(this);
  }

  destroySession() {
    Session.destroy().then(() => {
      this.setState({ currentUser: undefined });
    });
  }

  getUser() {
    return User.current().then(data => {
      if (data.id) {
        this.setState({
          currentUser: data
        });
      }
    });
  }

  componentDidMount() {
    this.getUser().then(() => {
      this.setState({ loading: false });
    });
  }

  render() {
    const { currentUser, loading } = this.state;

    if (loading) {
      return (
        <div>
          <h2>Loading...</h2>
        </div>
      );
    }

    return (
      <Router>
        <div>
          <NavBar onSignOut={this.destroySession} currentUser={currentUser} />
          <Switch>
            <Route path="/" exact component={WelcomePage} />
            <Route path="/questions" exact component={QuestionIndexPage} />
            <Route path="/questions/new" exact component={QuestionNewPage} />
            <Route path="/questions/:id" component={QuestionShowPage} />
            <Route
              path="/sign_in"
              render={props => (
                <SignInPage {...props} onSignIn={this.getUser} />
              )}
            />
          </Switch>
        </div>
      </Router>
    );
  }
}

export default App;
