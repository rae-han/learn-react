import React, { Component } from 'react'

export default class Counter3 extends Component {

  state = {
    number: 0,
    fixedNumber: 1,
  }

  render() {
    const { number, fixedNumber } = this.state;

    return (
      <div>
        <h1>{number}</h1>
        <h1>{fixedNumber}</h1>
        <button
          onClick={() => {
            this.setState((prevState, props) => {
              return {
                number: prevState.number + 1
              }
            })
            this.setState((prevState, props) => {
              return {
                number: prevState.number + 1
              }
            }, () => {
              console.log('setState 완료.')
            })
          }}
        >++</button>
      </div>
    )
  }
}
