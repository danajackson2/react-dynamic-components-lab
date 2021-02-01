import React, { Component } from 'react';

export default class ColorBox extends Component {

  state = {
    todos: [
    ]
  }

  render() {
    const op = this.props.opacity
    return (
      <div className ='color-box' style={{opacity:op}}>
        {op >= 0.2 ? <ColorBox opacity={op  - 0.1} /> : null}
      </div>
    )
  }
}