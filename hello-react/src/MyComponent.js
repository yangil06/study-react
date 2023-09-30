// const MyComponent = () => {
//   return <div>My new cool component</div>;
// };

// const MyComponent = (props) => {
//   return <div>Hi, my name is {props.name}</div>;
// };

//prop is replaced with destructing assignment
const MyComponent = ({ name, children, default_prop }) => (
  <div>
    Hi, My name is {name}. This is to test children prop : {children}
    and, this is test for default prop 'default_prop : ' {default_prop}
  </div>
);

MyComponent.defaultProps = {
  name: 'test',
  default_prop: 'default_prop',
};

export default MyComponent;
