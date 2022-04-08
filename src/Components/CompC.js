import React, { Component } from 'react'
import { UserConsumer } from './Context'

export class CompC extends Component {
  render() {
    return (
        <UserConsumer>
            {user =>{
                return <div>I am {user}</div>
            }}
        </UserConsumer>
    )
  }
}

export default CompC