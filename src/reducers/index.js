import { combineReducers } from 'redux';
import flagReducer from './flagReducer';
import taskReducer from './taskReducer';

export default combineReducers({
  tasks: taskReducer,
  flag: flagReducer
});

// componentWillReceiveProps(nextProps) {
//   console.log("componentWillReceiveProps()");
// }
// componentWillMount(){
//   console.log("componentWillMount()");
// }
// componentDidMount(){
//   console.log("componentDidMount()");
// }
// componentWillUnmount(){
//   console.log("componentWillUnmount()");
// }
// shouldComponentUpdate(){
//   console.log("shouldComponentUpdate()");
//   return true;
// }
// componentWillUpdate(){
//   console.log("componentWillUpdate()");
// }
// componentDidUpdate(){
//   console.log("componentDidUpdate()");
// }
