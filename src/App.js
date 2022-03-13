
import './App.css';
import {connect} from 'react-redux'
import{increment,decrement,reset} from './action'
 
function App(props) {

const {counter}= props
  const handleIncrement=()=>{
    const{dispatch} = props;
    dispatch(increment());
  }
  const handleDecrement=()=>{
const{dispatch} = props;
dispatch(decrement());
  }
  const handleReset=()=>{
    const{dispatch}= props
    dispatch(reset());
  }
  
  return (
    <div className="App">
      <h1>My Counter App</h1>
<button onClick={handleIncrement}>INCREMENT</button>
<button onClick={handleDecrement} >DECREMENT</button>
<button onClick={handleReset}>RESET</button>
<h3>{counter}</h3>
    </div>
  );
}
const mapStateToProps=(state)=>{
  return{
    counter:state.counter,
  }
}

export default connect (mapStateToProps)(App);

