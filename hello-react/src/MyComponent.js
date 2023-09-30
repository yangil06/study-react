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
    and, this is test for default prop 'default_prop : ' {props.default_prop}
  </div>
);

MyComponent.defaultProps = {
  name: 'test',
  default_prop: 'default_prop',
};

export default MyComponent;
