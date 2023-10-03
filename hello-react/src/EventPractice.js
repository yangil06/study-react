import { useState } from 'react';

const EventPractice = () => {
  const [{ username, message }, setState] = useState({
    username: '',
    message: '',
  });

  const handleChange = (e) => {
    setState({
      username: username,
      message: message,
      [e.target.name]: e.target.value,
    });
  };
  const handleClick = () => {
    alert(username + ': ' + message);
    setState({
      username: '',
      message: '',
    });
  };
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      handleClick();
    }
  };

  return (
    <div>
      <h1>이벤트 연습</h1>
      <input
        type="text"
        name="username"
        placeholder="username"
        onChange={handleChange}
        value={username}
      ></input>
      <br></br>
      <input
        type="text"
        name="message"
        placeholder="type anything"
        onChange={handleChange}
        onKeyDown={handleKeyDown}
        value={message}
      ></input>
      <br></br>
      <button onClick={handleClick}>message값 확인</button>
    </div>
  );
};

export default EventPractice;
