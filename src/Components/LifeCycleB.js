import React, { Component } from 'react'

 class LifeCycleb extends Component {
     constructor(props) {
       super(props)
     
       this.state = {
          name: 'hari'
       }
       console.log('lifecycle B constructor')
     }
     static getDerivedStateFromProps(props,state){
         console.log('lifecycle B getDerivedStateFromProps')
         return null
     }

     componentDidMount(){
         console.log('lifecycle B componentDidmount');
     }

  render() {
      console.log('lifecycle B render');
    return (
      <div>LifeCycleb Render</div>
    )
  }
}

export default LifeCycleb