import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('hello!');
  const onClickLeave = () => setMessage('and goodbye!');

  const [color, setColor] = useState('black');

  //this.state.color = 'red'; //이런거 하면 안됨. 직접 세팅 적용 불가
  //그렇다면 배열이나 객체를 업데이트 하려면 어떡할까?
  const [arr, setArr] = useState([1, 2]);

  //여기는 state을 부를 수 있는 컨텍스트가 아니라서 오류남
  const arr2 = [...this.state.arr];
  setArr(arr2);

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1 style={{ color }}>{message}</h1>

      <button onClick={() => setColor('red')}>메세지 빨강으로 변경</button>
      <button onClick={() => setColor('green')}>메세지 초록으로 변경</button>
      <button onClick={() => setColor('blue')}>메세지 파랑으로 변경</button>
    </div>
  );
};

export default Say;
