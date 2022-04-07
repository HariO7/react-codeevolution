import React, { Component } from 'react'
import LifeCycleb from './LifeCycleB'

 class LifeCycleA extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name: 'hari'
       }
       console.log('lifecycle A constructor')
     }
     static getDerivedStateFromProps(props,state){
         console.log('lifecycle A getDerivedStateFromProps')
         return null
     }

     componentDidMount(){
         console.log('lifecycle A componentDidmount');
     }

  render() {
      console.log('lifecycle A render');
    return (
      <div>LifeCycleA Render
          <LifeCycleb />
      </div>
    )
  }
}

export default LifeCycleA