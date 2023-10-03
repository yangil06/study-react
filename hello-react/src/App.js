import logo from './logo.svg';
import './App.css';
import { Component } from 'react';
//import { MyComponent } from 'MyComponent.js';
//import { MyComponent } from 'MyComponent';
//import { MyComponent } from './MyComponent';
import MyComponent from './MyComponent';

import Counter from './Counter';

import Say from './Say';

import EventPractice from './EventPractice';
import ValidationSample from './ValidationSample';

//class App extends Component {
//  render() {
class App extends Component {
  number = 0;
  undefined_ = undefined;

  style = {
    backgroundColor: 'balck',
    color: 'aqua',
    fontSize: '48px',
    fontWeight: 'bold',
    padding: 16,
  };

  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer"
          >
            Learn React
          </a>
          <ValidationSample />
          <EventPractice />
          {this.number}
          {this.undefined_}
          {false}
          {true}
          <div style={this.style}>{1}</div>
          <div className="react">className 테스트2</div>
          {/*resolved for functions are not valid as a React child*/}
          <div>
            {MyComponent({
              name: 'hangil2',
              designatedType: 'designated',
              children: 'children-in-object-init',
              favoriteNumber: 7,
            })}
          </div>
          <MyComponent name="hangil" designatedType={'1'} favoriteNumber={7}>
            children-between-tags
          </MyComponent>
          {/*Component는 태그로 엮어야만 나오네?? 함수라서 실행을 시켜줘야 하기 때문인건가..? 객체는 그냥
        나오는 듯 한데..
        그런가부당 MyComponent() 하니까 출력이 되네..
        */}
          <input></input>
          <input />
          {/* 안나오는 주석도 자바스크립트 코드처럼 {} 내부에 작성해야 한다*/}
          /* 이건 나오나? 나오네 */ //이것도 나오고..
          <Counter />
          <Say />
        </header>
      </div>
    );
  }
}
//}

export default App;
