import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './actions';
import './App.css';


function App() {
  const counter = useSelector(state => state.counter);
  const isLogged = useSelector(state => state.isLogged); 
  const dispatch = useDispatch();
   
  return (
    <div className="app">
      <div className="app">
        <i className='pleaseIJustNeedAnOKJob'>Behold an incredible, job offer worthy example of Redux:</i>
        <h1 className={counter>0 ? 'positive' : 'negative'}>{counter}</h1>
      </div>
      <div className="item">
        <button className="minus" onClick={() => dispatch(decrement(5))}>-5</button>
        <button className="minus" onClick={() => dispatch(decrement(1))}>-</button>
        <button className="plus" onClick={() => dispatch(increment(1))}>+</button>
        <button className="plus" onClick={() => dispatch(increment(5))}>+5</button>
      </div>
        {isLogged ? <div className='app'><h3> Valuable Information users should see</h3></div> : ''} 
    </div>
  );
}

export default App;
