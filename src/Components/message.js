import React, { Component } from 'react'

export class message extends Component {
    constructor(){
        super()
        this.state = {
            message: 'Welcome Visitor'
        }
    }
    handleMessage(){
        this.setState({
            message: 'thank you for subscribing'
        })
    }
    revert(){
        this.setState({
            message: 'press the bell icon'
        })
    }
  render() {
    return (
      <div>
          <h1>{this.state.message}</h1>
          <button onClick={()=> this.handleMessage()} onDoubleClick={()=> this.revert()}>subscribe</button>
      </div>
    )
  }
}

export default message