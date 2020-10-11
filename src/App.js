import React from 'react';
import Router from './router.js';
import './App.css';


import { incree,store } from './store';
import { Provider } from 'react-redux';

    const increment=()=>{
     store.dispatch({type:incree})
   console.log(store.getState())  
    }
function App() {
  return (
    <Provider store={store}>
    <div className="App">
      <header className="App-header">
      <button onClick={increment}>dgdg</button>
        <Router></Router>
      </header>
    </div>
    </Provider>
  );
}

export default App;
