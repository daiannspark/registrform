import React, { Component } from "react";

class Comment extends Component {
  state = {
    username: "",
    message: "",
    mediaId: ""
  };

  onChange = event => {
    const { name, value } = event.target;
    this.setState({ [name]: value });
  };

  onSubmit = event => {
    event.preventDefault();
    for (const key in this.state) {
      if (this.state[key].length < 1) {
        console.log("All fields required");
        return false;
      }
    }
    this.props.createComment(this.state);
  };

  render() {
    return (<form
        onSubmit={this.onSubmit}
        className='comment-form col-6 ml-auto mr-auto'
    >
      <div className='form-group'>
        <label htmlFor=''>Username</label>
        <input
            type='text'
            name='username'
            className='form-control'
            onChange={this.onChange}
        />
      </div>
      <div>
        <label htmlFor=''>Message</label>
        <input
            type='text'
            name='message'
            className='form-control'
            onChange={this.onChange}
        />
      </div>
      <div className='form-group'>
        <label htmlFor=''>MediaId</label>
        <input
            type='text'
            name='mediaId'
            className='form-control'
            onChange={this.onChange}
        />
      </div>
      <button type='submit' className='btn btn-success float-right mt-3'>
        Register
      </button>
    </form>);
  }
}

export default Comment;
