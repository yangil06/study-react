import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('hello!');
  const onClickLeave = () => setMessage('and goodbye!');

  const [color, setColor] = useState('black');

  //this.state.color = 'red'; //이런거 하면 안됨. 직접 세팅 적용 불가
  //그렇다면 배열이나 객체를 업데이트 하려면 어떡할까?
  const [arr, setArr] = useState([1, 2]);

  const testMultilineReturn = (props) => <div>Hi, my name is {props.name}</div>;

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>

      <button onClick={() => setColor('red')}>메세지 빨강으로 변경</button>
      <button onClick={() => setColor('green')}>메세지 초록으로 변경</button>
      <button onClick={() => setColor('blue')}>메세지 파랑으로 변경</button>

      <button onClick={() => setArr([arr[0] + 1, ...arr])}>배열값 변경</button>
      <button onClick={() => console.log(arr)}>배열값 확인</button>
    </div>
  );
};

export default Say;
