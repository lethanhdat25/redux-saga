import React, { useEffect } from 'react';

import cityApi from 'api/cityApi';
import { Route, Switch } from 'react-router-dom';
import LoginPage from 'features/auth/pages/LoginPages';
import { AdminLayout } from 'components/Layout';
import { NotFound } from 'components/Common';

function App() {
  useEffect(()=>{
    cityApi.getAll().then(response => console.log(response));
  },[]);
  return (
    <div>
      <Switch>
        <Route  path="/" component={NotFound}/>
        <Route  path="/ login" component={LoginPage} />
        <Route  path="/admin" component={AdminLayout}/>      
      </Switch>
    </div>
  );
}

export default App;
