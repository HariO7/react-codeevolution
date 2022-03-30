import React, { Component } from 'react'

export class Form extends Component {
    constructor(props) {
      super(props)
    
      this.state = {
         Name: '',
         Bio: '',
         Skill: 'react'
      }
    }

     handleName = e =>{
        this.setState({
            Name: e.target.value 
        })
    }

    handleBio = e =>{
        this.setState({
            Bio: e.target.value
        })
    }

    handleSelect = e => {
        this.setState({
            Skill: e.target.value
        })
    }

    handleSubmit = e =>{
        e.preventDefault()
        alert(`${this.state.Name} ${this.state.Bio} ${this.state.Skill}`)
    }



  render() {
    return (
        <form>
        <div>
            <label>Name:</label>
            <input type='text' onChange={this.handleName} />
        </div>
        <div>
            <label>Bio:</label>
            <textarea onChange={this.handleBio}></textarea>
        </div>
        <div>
            <label>Skills:</label>
            <select value={this.state.Skill} onChange={this.handleSelect}>
                <option value='react'>React</option> 
                <option value='vue'>Vue</option>
                <option value='angular'>Angular</option>
            </select>
        </div>
        <button onClick={this.handleSubmit}>submit</button>
      </form>
    )
  }
}

export default Form