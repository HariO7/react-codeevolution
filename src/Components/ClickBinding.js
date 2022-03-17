import React, { Component } from 'react'

export class ClickBinding extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         message: 'hello'
      }
    //   this.handleClick = this.handleClick.bind(this)
    }
    // handleClick(){
    //     this.setState({
    //         message: 'goodbye'
    //     })
    // }
    handleClick = ()=>{
        this.setState({
            message:'goodbye'
        })
    }
  render() {
    return (
      <div>
          {this.state.message}
          {/* <button onClick={this.handleClick.bind(this)}>Click</button> */}
          {/* <button onClick={()=> this.handleClick()}>Click</button> */}
          <button onClick={this.handleClick}>Click</button>
      </div>
    )
  }
}

export default ClickBinding