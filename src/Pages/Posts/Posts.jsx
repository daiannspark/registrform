import React, { Component } from "react";
import { Link } from "react-router-dom";

class Posts extends Component {
  componentDidMount() {
    this.props.getPostsList(this.props.user);
  }

  render() {
    const { posts } = this.props;
    return (
      <ul>
        {posts.map(item => (
          <li key={item._id}>
            <Link to={`/posts/${item._id}`}>
              <div className='title'>{item.title}</div>
              <img src={item.media.path} width='300px' height='300px'  alt='' />
            </Link>
          </li>
        ))}
      </ul>
    );
  }
}

export default Posts;
