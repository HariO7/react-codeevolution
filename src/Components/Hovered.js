import React, { Component } from 'react'
import updatedComponent from './withCounter'
 class Hovered extends Component {
  render() {
      const {count,incrementCount } =  this.props
    return (
      <div>
          <h1 onMouseOver={incrementCount}>{this.props.name}Hovered over {count} times</h1>
      </div>
    )
  }
}

export default updatedComponent (Hovered)