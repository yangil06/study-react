import React, { Component } from 'react';

class EventPractice extends Component {
  render() {
    //Component를 상속받아서 render 생성자 작성해주는것인가?
    //일단 render(): ReactNode; 이런 함수가 있긴 하네..
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="message"
          placeholder="type anything"
          onChange={(e) => {
            {
              console.log(e); //SyntheticBaseEvent 는 이벤트가 발생시에만 값이 있고 그 후에 초기화 되서
              //이벤트 함수 실행 후 참조할 수 없다.
            }
          }}
        ></input>
      </div>
    );
  }
}

export default EventPractice;
