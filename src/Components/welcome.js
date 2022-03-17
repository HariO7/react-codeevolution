import { Component } from "react";
import React from "react";

class Welcome extends Component {
    render(){
        const {name, hero} = this.props
        return (
            <div>
                <h1>{name} aka {hero}</h1>
            </div>
        )
    }
}

export default Welcome
