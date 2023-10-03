import React, { Component } from 'react';

class Counter extends Component {
  /*
  constructor(props) {
    super(props);
    //state 초기값 설정하기
    this.state = {
      number: 0,
      fixedNumber: 0,
    };
  }*/

  state = {
    number: 0,
    fixedNumber: 0,
  };

  render() {
    const { number, fixedNumber } = this.state;
    return (
      <div>
        <h1>{number}</h1>
        <h2>바뀌지 않는 값 : {fixedNumber}</h2>
        <button
          onClick={(prevState, state) => {
            console.log(prevState.number); //undefined 로 출력됨
            this.setState(
              { number: prevState.number + 1 } //아예 위에서부터 안되는군..
            );
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
