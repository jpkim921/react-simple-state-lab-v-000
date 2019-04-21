import React, { Component } from 'react';

export default class Cell extends Component {
  constructor(props) {
    super(props)
    this.state = {
      color: this.props.value
    }
  }

  clickCell = () => {
    const newColorState = '#333';
    this.setState({
      color: newColorState
    })
  }

  render() {
    return (
      <div
        className="cell"
        style={{backgroundColor: this.state.color}}
        onClick={this.clickCell}>
        
      </div>
    )
  }
}
