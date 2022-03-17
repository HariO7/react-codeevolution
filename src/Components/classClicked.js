import React, { Component } from 'react'

export default class classClicked extends Component {
     handleClick(){
        console.log('yaaay i am clicked');
    }
  render() {
    return (
      <div>
          <button onClick={this.handleClick}>click me too</button>
      </div>
    )
  }
}
