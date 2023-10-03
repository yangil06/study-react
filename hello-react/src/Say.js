import React, { useState } from 'react';

const Say = () => {
  const [message, setMessage] = useState('');
  const onClickEnter = () => setMessage('hello!');
  const onClickLeave = () => setMessage('and goodbye!');

  const [color, setColor] = useState('black');

  return (
    <div>
      <button onClick={onClickEnter}>입장</button>
      <button onClick={onClickLeave}>퇴장</button>
      <h1>{message}</h1>

      <button onClick={() => setColor('red')}>메세지 빨강으로 변경</button>
      <button onClick={() => setColor('green')}>메세지 초록으로 변경</button>
      <button onClick={() => setColor('blue')}>메세지 파랑으로 변경</button>
    </div>
  );
};

export default Say;
