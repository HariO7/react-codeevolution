import React, { Component } from 'react'
import Child from './Child'

export class Parent extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         parent: 'jamie'
      }
    //   this.handleGreet = this.handleGreet.bind(this)
    }
    handleGreet = ()=> {
        alert(`hello ${this.state.parent}`)
    }

  render() {
    return (
      <div>
          <Child handleGreet = {this.handleGreet} />
      </div>
    )
  }
}

export default Parent