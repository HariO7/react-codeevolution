import React, { Component } from "react";
import Child from "./Child";

class Parent extends Component {
  constructor(props) {
    super(props);

    this.state = {
      Parent: "Ziyaf",
    }
    this.greetParent = this.greetParent.bind(this)
}   


    greetParent(childName){
        alert(`hello ${this.state.Parent} of ${childName}`)
    }

  render() {
    return <div>
        <Child handleGreet = {this.greetParent} />
    </div>;
  }
}

export default Parent;
