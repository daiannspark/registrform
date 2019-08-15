import React, { Component } from "react";

class Posts extends Component {
  componentDidMount() {
    this.props.getPostsList(this.props.user);
  }

  render() {
    const { posts } = this.props;
    return posts.map(item => <p>{item._id}</p>);
  }
}

export default Posts;
