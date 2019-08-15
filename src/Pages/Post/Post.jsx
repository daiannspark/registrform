import React, { Component } from "react";

class Post extends Component {
  componentDidMount() {
    this.props.getPostList(this.props.user, this.props.match.params.postId);
  }

  render() {
    return <div>{this.props.post._id}</div>;
  }
}

export default Post;
