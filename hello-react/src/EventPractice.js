import React, { Component } from 'react';

class EventPractice extends Component {
  state = {
    username: '',
    message: '',
  };

  handleChange = (e) => {
    this.setState({ [e.target.name]: e.target.value });
  };
  handleClick = () => {
    alert(this.state.username + ': ' + this.state.message);
    this.setState({
      username: '',
      message: '',
    });
  };
  handleKeyDown = (e) => {
    if (e.key === 'Enter') {
      this.handleClick();
    }
  };

  render() {
    //Component를 상속받아서 render 생성자 작성해주는것인가?
    //일단 render(): ReactNode; 이런 함수가 있긴 하네..
    return (
      <div>
        <h1>이벤트 연습</h1>
        <input
          type="text"
          name="username"
          placeholder="username"
          onChange={this.handleChange}
        ></input>
        <br></br>
        <input
          type="text"
          name="message"
          placeholder="type anything"
          onChange={this.handleChange}
          onKeyDown={this.handleKeyDown}
        ></input>
        <br></br>
        <button onClick={this.handleClick}>message값 확인</button>
      </div>
    );
  }
}

export default EventPractice;
