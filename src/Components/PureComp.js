import React, { PureComponent } from 'react'

export default class PureComp extends PureComponent {
  render() {
      console.log('render from pure component');
    return (
      <div>PureComp {this.props.name}</div>
    )
  }
}
