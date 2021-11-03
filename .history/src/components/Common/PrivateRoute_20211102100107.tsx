import * as React from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';


export function PrivateRoute (props: RouteProps) {
  // TODO:Check if user is login
  const isLoggedIn = Boolean(localStorage.getItem('access_token'))
  const history=useHistory();
    //If no,redirect to login page
  if(!isLoggedIn) {
    history.push("/login")
  }
    //Otherwise,show the route 
  return (
    <Route {...props}/>
  );
}
