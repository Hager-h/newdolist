import React, { Component } from "react";
import "./Form.css"
export default class Form extends Component {
  state = {
    name: "",
    num: "",
    id:""
  };

  change = (e) => {
    this.setState({
      [e.target.id]: e.target.value
    });
  };
  Add = (e) => {
    e.preventDefault();
if(e.target.name.value!==""){
    this.props.addItems(this.state);

    this.setState({
      name: "",
      num: ""
    })
  }else{
    return null
  }
  };

  render() {
    return (
      <form className="for" onSubmit={this.Add}>
        <input className="text"
          onChange={this.change}
          type="text"
          value={this.state.name}
          placeholder="Enter Your Name"
          id="name"
        />
        <input className="num"
          onChange={this.change}
          type="number" min="1"
          value={this.state.num}
          placeholder="Enter Your Phone"
          id="num"
        />
        <button> ADD</button>
      </form>
    );
  }
}
