// const MyComponent = () => {
//   return <div>My new cool component</div>;
// };

// const MyComponent = (props) => {
//   return <div>Hi, my name is {props.name}</div>;
// };

import PropTypes from 'prop-types';

//prop is replaced with destructing assignment
const MyComponent = ({ name, default_prop, designatedType, children }) => (
  <div>
    Hi, My name is {name}. This is to test children prop : {children}
    &nbsp; and, this is test for default prop 'default_prop : ' {default_prop}
  </div>
);
// const MyComponent = (props) => {
//   return (
//     <div>Hi, my name is {props.name}</div>
//   );
// };

MyComponent.defaultProps = {
  name: 'test',
  default_prop: 'default_prop',
};

MyComponent.propTypes = {
  name: PropTypes.string,
  designatedType: PropTypes.string,
  favoriteNumber: PropTypes.number.isRequired,
  arr: PropTypes.array,
  arrayOf: PropTypes.arrayOf(PropTypes.number),
  bool: PropTypes.bool,
  func: PropTypes.func,
  num: PropTypes.number,
  obj: PropTypes.object,
  str: PropTypes.string,
  sym: PropTypes.symbol,
  node: PropTypes.node,
  instanceof: PropTypes.instanceOf(MyComponent),
  oneof: PropTypes.oneOf(['dog', 'cat']),
  oneoftype: PropTypes.oneOfType([PropTypes.number, PropTypes.string]),
  objectof: PropTypes.number,
  shape: PropTypes.shape({ name: PropTypes.string, num: PropTypes.number }),
  anything: PropTypes.any,
};

export default MyComponent;
