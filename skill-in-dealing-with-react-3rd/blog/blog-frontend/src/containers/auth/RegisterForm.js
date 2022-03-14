import React, { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';

function RegisterForm(props) {
  const dispatch = useDispatch();
  const { form } = useSelector(({ auth }) => ({
    form: auth.register
  }));

  const onChange = e => {
    const { value, name } = e.target;
    console.log(value, name)
    dispatch(changeField({
      form: 'register',
      key: name,
      value
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
  };

  useEffect(() => {
    dispatch(initializeForm('register'));
  }, [dispatch]);

  return (
    <AuthForm
      type="register"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
    ></AuthForm>
  );
}

export default RegisterForm;