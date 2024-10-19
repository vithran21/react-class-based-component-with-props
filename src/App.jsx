import React, { Component } from 'react'
import Comp1 from './components/Comp1'

export default class 
 extends Component {
  constructor(){
    super();
    this.employee = {
      empName : "Vithran",
      empAge: 29
    };
  }
  render() {
    return (
      <div>
        <h1>This is App</h1>
        <h3>{this.employee.empName}</h3>
        <h3>{this.employee.empAge}</h3>
        <Comp1 empDetail={this.employee}></Comp1>
      </div>
    )
  }
}
