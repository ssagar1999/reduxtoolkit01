import logo from './logo.svg';
import './App.css';
import {increment, decrement, incrementByHundered} from './redux/counter';
import { useDispatch, useSelector } from 'react-redux';


function App() {

  const {count} = useSelector((state) => state.counter)
  console.log(count)
  const dispatch = useDispatch()

  return (
    <div className="App">
    {/* <h1>{count}</h1> */}

    <button onClick={() => dispatch(increment())}>+</button>
    <button onClick={() => dispatch(decrement())}>-</button>
    <button onClick={() => dispatch(incrementByHundered())}>increment by 100</button>
     
    </div>
  );
}

export default App;
