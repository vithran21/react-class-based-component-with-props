import React, { Component } from 'react'
import Comp2 from './Comp2'

export default class Comp1 extends Component {
  render(props) {
    return (
      <div>
        <h1>It's Comp1</h1>
        <h4>{this.props.empDetail.empName}</h4>
        <h4>{this.props.empDetail.empAge}</h4>
        <Comp2 emp={this.props.empDetail}></Comp2>
      </div>
    )
  }
}
