import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm';

function LoginPage(props) {
  return (
    <AuthTemplate>
      <AuthForm type="login"></AuthForm>
    </AuthTemplate>
  );
}

export default LoginPage;