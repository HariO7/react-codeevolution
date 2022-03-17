import React, { Component } from 'react'

export class UserDisplay extends Component {
  constructor(props) {
    super(props)
  
    this.state = {
       isLoggedIn: true
    }
  }
    render() {

// return this.state.isLoggedIn && <div>Welcome Hari</div>

        return(
            <div>
                {this.state.isLoggedIn ? (<div><h1>Welcome master Bruce</h1></div>):
                (<div><h1>Welcome Alfred</h1></div>)}
            </div>
        )

    //   if(this.state.isLoggedIn){
    //       return(<div><h1>Welcome master Bruce</h1></div>)
    //   }else{
    //       return(<div><h1>Welcome alfred</h1></div>)
    //   }
    // return (
    //   <div>
    //       <div><h1>Welcome master Bruce</h1></div>
    //       <div><h1>Welcome alfred</h1></div>
    //   </div>
    // )
  }
}

export default UserDisplay