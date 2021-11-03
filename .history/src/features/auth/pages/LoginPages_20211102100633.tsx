import * as React from 'react';

export interface ILoginPageProps {
}

export default function LoginPage (props: ILoginPageProps) {
  localStorage.setItem('access_token',"true");
  return (
    <div>
      Login Page
    </div>
  );
}
