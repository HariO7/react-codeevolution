import React, { Component } from 'react'
import axios from 'axios'
export class PostLists extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
        posts: [],
        errorMsg: ''
      }
    }

    componentDidMount(){
        axios.get('http://jsonplaceholder.typicode.com/posts')
            .then(res => {
                console.log(res)
                this.setState({posts : res.data})
            })
            .catch(err => {
                console.log(err)
                this.setState({errorMsg: 'error retrieving data'})
            })
    }
  render() {
      const {posts,errorMsg} = this.state
    return (
      <div>PostLists
          {
              posts.length ?
              posts.map(post => <div key={post.id}>{post.title}</div>) :
              null
          }
          {
              errorMsg ?
              <div>{errorMsg}</div>:
              null
          }
      </div>
    )
  }
}

export default PostLists