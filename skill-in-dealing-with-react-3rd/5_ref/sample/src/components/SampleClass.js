import React, { Component } from 'react'

export default class SampleClass extends Component {
  input1;
  input2 = React.createRef();

  setRef = (c) => {
    this.input1 = c;
  }

  logInput = () => {
    console.log(this.input1);
    console.log(this.input2.current);
  }

  render() {
    return (
      <div>
        <input type="text" ref={this.setRef} />
        <input type="text" ref={this.input2} />
        <button onClick={this.logInput}>확인</button>
      </div>
    )
  }
}
