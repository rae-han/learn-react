import React, { Component } from 'react'

export default class Counter1 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      number: 0,
      fixedNumber: 1,
    }
  }

  render() {
    const { number, fixedNumber } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <h1>{fixedNumber}</h1>
        <button
          onClick={() => {
            this.setState({ number: number + 1 }) // 내부 적으로 원래 객체 다른 내용을 저장?
          }}
        >++</button>
      </div>
    )
  }
}
