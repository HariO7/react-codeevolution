import React, { Component } from "react";
import LifeCycleb from "./LifeCycleB";

class LifeCycleA extends Component {
  constructor(props) {
    super(props);

    this.state = {
      name: "hari",
    };
    console.log("lifecycle A constructor");
  }
  static getDerivedStateFromProps(props, state) {
    console.log("lifecycle A getDerivedStateFromProps");
    return null;
  }

  componentDidMount() {
    console.log("lifecycle A componentDidmount");
  }

  shouldComponentUpdate(){
      console.log("lifecycle A shouldComponentUpdate");
      return true
  }

  getSnapshotBeforeUpdate(){
      console.log('lifecyle A getSnapshotBeforeUpdate');
      return null
  }

  componentDidUpdate(){
      console.log('lifecycle A componentDidUpdate');

  }

  handleSubmit = () =>{
    this.setState({
        name:'haneen'
    })
  }


  render() {
    console.log("lifecycle A render");
    return (
      <div>
        LifeCycleA Render
        <LifeCycleb />
        <button onClick={this.handleSubmit}>submit</button>
      </div>
    );
  }
}

export default LifeCycleA;
