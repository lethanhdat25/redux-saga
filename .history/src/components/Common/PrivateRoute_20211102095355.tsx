import * as React from 'react';
import { useHistory } from 'react-router-dom';

export interface IPrivateRouteProps {
}

export function PrivateRoute (props: IPrivateRouteProps) {
  // TODO:Check if user is login
  //If yes,show the route
  //Otherwise,redirect to login page
  const isLoggedIn = Boolean(localStorage.getItem('access_token'))
  const history=useHistory();
  if(!isLoggedIn) {
    history.push("/login")
  }
  return (
    <div>
        Private Route
    </div>
  );
}
