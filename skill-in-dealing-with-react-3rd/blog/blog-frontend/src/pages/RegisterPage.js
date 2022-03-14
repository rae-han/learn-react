import React from 'react';
import AuthTemplate from '../components/auth/AuthTemplate';
import RegisterForm from '../containers/auth/RegisterForm';

function RegisterPage(props) {
  return (
    <AuthTemplate>
      <RegisterForm type="register"></RegisterForm>
    </AuthTemplate>
  );
}

export default RegisterPage;