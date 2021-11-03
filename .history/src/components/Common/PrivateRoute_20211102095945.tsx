import * as React from 'react';
import { Route, RouteProps, useHistory } from 'react-router-dom';


export function PrivateRoute (props: RouteProps) {
  // TODO:Check if user is login
  //If yes,show the route
  //Otherwise,redirect to login page
  const isLoggedIn = Boolean(localStorage.getItem('access_token'))
  const history=useHistory();
  if(!isLoggedIn) {
    history.push("/login")
  }
  return (
    <Route {...props}/>
  );
}
