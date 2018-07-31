import React, { Component } from "react";

class CurrentDateTime extends Component {
  constructor(props) {
    super(props);

    this.state = {
      currentDate: new Date()
    };
  }

  componentDidMount() {
    this.intervalId = setInterval(() => {
      this.setState({ currentDate: new Date() });
    }, 1000);
  }

  componentWillUnmount() {
    clearInterval(this.intervalId);
  }

  render() {
    const { currentDate } = this.state;

    return <span>{currentDate.toLocaleString()}</span>;
  }
}

export default CurrentDateTime;
