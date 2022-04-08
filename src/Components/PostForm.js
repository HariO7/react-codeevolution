import axios from "axios";
import React, { Component } from "react";

export class PostForm extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Name: "",
      password: "",
      bio: "",
    };
  }
  handleChange = (e) => {
    this.setState({
      [e.target.name]: e.target.value,
    });
  };

  onSubmit = (e) => {
    e.preventDefault();
    console.log(this.state);
    axios.post('http://jsonplaceholder.typicode.com/posts',this.state)
        .then(res =>{
            console.log(res.data)
        })
        .catch(err => console.log(err))
  };
  render() {
    const { Name, password, bio } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <label>Name:</label>
          <input
            type="text"
            name="Name"
            value={Name}
            onChange={this.handleChange}
          />
          <label>Password:</label>
          <input
            type="password"
            name="password"
            value={password}
            onChange={this.handleChange}
          />
          <label>Bio:</label>
          <input
            type="text"
            name="bio"
            value={bio }
            onChange={this.handleChange}
          />
          <input type='submit' />
        </form>
      </div>
    );
  }
}

export default PostForm;
