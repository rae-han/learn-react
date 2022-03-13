import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import AuthForm from '../components/auth/AuthForm';

function RegisterPage(props) {
  return (
    <AuthTemplate>
      <AuthForm type="register"></AuthForm>
    </AuthTemplate>
  );
}

export default RegisterPage;