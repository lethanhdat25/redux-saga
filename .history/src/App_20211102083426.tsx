import React, { useEffect } from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import './App.css';
import cityApi from 'api/cityApi';
import { Route, Switch } from 'react-router-dom';

function App() {
  useEffect(()=>{
    cityApi.getAll().then(response => console.log(response));
  },[]);
  return (
    <div className="App">
      <Switch>
        <Route exact path="/" />
        <Route exact path="/" />
        <Route exact path="/" />
          
      
      </Switch>
    </div>
  );
}

export default App;
