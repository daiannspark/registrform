import React, { Component } from "react";

class Home extends Component {
  componentDidMount() {
    console.log(this.props);
    this.props.getPostsList(this.props.user);
  }

  render() {
    return <div>Home</div>;
  }
}

export default Home;