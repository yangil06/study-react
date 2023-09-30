// const MyComponent = () => {
//   return <div>My new cool component</div>;
// };

// const MyComponent = (props) => {
//   return <div>Hi, my name is {props.name}</div>;
// };

const MyComponent = (props) => (
  <div>
    Hi, My name is {props.name}. This is to test children prop :{' '}
    {props.children}
  </div>
);

export default MyComponent;
