import React, { Component } from 'react'

export default class ErrorBoundary extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         isError: false
      }
    }

    static getDerivedStateFromError(error){
        return {
            isError: true
        }
    }

    componentDidCatch(err,info){
        console.log(err);
        console.log(info);
    }
  render() {
   if(this.state.isError){
       return <h1>something went wrong</h1>
   }
    return this.props.children
  }
}
