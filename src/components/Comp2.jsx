import React, { Component } from 'react'

export default class Comp2 extends Component {
  render() {
    return (
      <div>
        <h2>
        This is from Comp2
        </h2>
        <h5>{this.props.emp.empName}</h5>
        <h5>{this.props.emp.empAge}</h5>
      </div>
    )
  }
}
