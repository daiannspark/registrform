import React, { Component } from "react";
import Comment from "../Comment/Comment";

class Post extends Component {
  componentDidMount() {
    this.props.getPostList(this.props.user, this.props.match.params.postId);
  }

  render() {
    return <div>{this.props.post._id} <br /> <Comment /></div>;
  }
}

export default Post;
