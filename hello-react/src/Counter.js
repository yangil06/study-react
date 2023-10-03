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
          // onClick={(prevState, state) => {
          //   console.log(prevState.number); //undefined 로 출력됨
          //   this.setState(
          //     { number: prevState.number + 1 } //아예 위에서부터 안되는군..
          //   );
          // }}
          // prevState 이 undefined 로 초기화 되서 레퍼런스로만 오는거 같다.
          onClick={() => {
            this.setState((prevState, prop) => {
              const { number, fixedNumber } = prevState;
              console.log(
                `prevState.number = ${number}, fixedNum = ${fixedNumber}`
              );
              console.log('prop = ' + prop);
              return { number: prevState.number + 1 };
            });
          }}
        >
          +1
        </button>
      </div>
    );
  }
}

export default Counter;
