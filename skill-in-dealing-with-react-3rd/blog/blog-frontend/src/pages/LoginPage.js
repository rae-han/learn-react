import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import LoginForm from '../containers/auth/LoginForm';

function LoginPage(props) {
  return (
    <AuthTemplate>
      <LoginForm type="login"></LoginForm>
    </AuthTemplate>
  );
}

export default LoginPage;