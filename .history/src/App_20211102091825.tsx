import React, { useEffect } from 'react';
import './App.css';
import cityApi from 'api/cityApi';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import LoginPage from 'features/auth/pages/LoginPages';
import { AdminLayout } from 'components/Layout';
import { NotFound } from 'components/Common';

function App() {
  useEffect(()=>{
    cityApi.getAll().then(response => console.log(response));
  },[]);
  return (
   
    <div className="App">
       <BrowserRouter>
      <Switch>
        <Route exact path="/" component={NotFound}/>
        <Route  path="/ login" component={LoginPage} />
        <Route  path="/admin" component={AdminLayout}/>      
      </Switch>
      </BrowserRouter>
    </div>
  
  );
}

export default App;
