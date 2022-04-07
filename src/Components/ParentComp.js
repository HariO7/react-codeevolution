import React, { Component } from 'react'
import Memo from './Memo'
import PureComp from './PureComp'
import RegComp from './RegComp'

export class ParentComp extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         name: 'hari'
      }
    }

    componentDidMount(){
        setInterval(()=>{
            this.setState({
                name: 'Hari'
            })
        },2000)
    }
  render() {
      console.log('***************************parent comp ****************************');
    return (
      <div>ParentComp
          {/* <RegComp name={this.state.name} />
          <PureComp name={this.state.name} /> */}
          <Memo name={this.state.name} />
      </div>
    )
  }
}

export default ParentComp