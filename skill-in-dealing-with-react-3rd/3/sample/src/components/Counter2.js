import React, { Component } from 'react'

export default class Counter2 extends Component {
  // deep dive 에서 배운 내용
  state = {
    number: 0,
    fixedNumber: 1,
  }

  render() {
    const { number, fixedNumber } = this.state;

    return (
      <div>
        <h1>Counter 2 Component</h1>
        <h1>{number}</h1>
        <h1>{fixedNumber}</h1>
        <button
          onClick={async () => {
            this.setState({ number: this.state.number + 1 });
            this.setState({ number: this.state.number + 1 });
            // await this.setState({ number: this.state.number + 1 })
            // await this.setState({ number: this.state.number + 1 }) 
            // 2개를 해도 +1 만 된다. 
            // 비동기로 동작하기 때문에 이런 문제가 발생한다.
            // 비동기로 동작하는 이유는 setState가 일어날 때 마다 리렌더링을 해주면 성능상 이슈가 생기기 때문에, 해당 컴포넌트의 모든 setState를 취합한 후 한번만 렌더링 되도록 하므로 마지막 1개만 정상작동 한다.
            // 실제로는 둘다 작동 하지만 두 함수 모두 전 값을 참고하고 있기 때문에 문제가 발생한다.
            // async await 로 랩핑 해주면 두개다 정상 작동한다.
          }}
        >++</button>
      </div>
    )
  }
}
