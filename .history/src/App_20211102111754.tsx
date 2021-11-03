import cityApi from 'api/cityApi';
import { NotFound, PrivateRoute } from 'components/Common';
import { AdminLayout } from 'components/Layout';
import LoginPage from 'features/auth/pages/LoginPages';
import React, { useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';

function App() {
  useEffect(()=>{
    cityApi.getAll().then(response => console.log(response));
  },[]);
  return (
    <div>
      <Switch>
        <Route path="/login" component={LoginPage} />
        <PrivateRoute path="/admin" component={AdminLayout}/>
        <Route component={NotFound}/>      
      </Switch>
    </div>
  );
}

export default App;
