import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { changeField, initializeForm, login } from '../../modules/auth';
import AuthForm from '../../components/auth/AuthForm';
import { check } from '../../modules/user';

function LoginForm(props) {
  const [error, setError] = useState(null);
  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user
  }));
  const navigate = useNavigate();

  const onChange = e => {
    const { value, name } = e.target;
    console.log(value, name)
    dispatch(changeField({
      form: 'login',
      key: name,
      value
    }));
  };

  const onSubmit = e => {
    e.preventDefault();
    const { username, password } = form;

    dispatch(login({ username, password }));
  };

  useEffect(() => {
    dispatch(initializeForm('login'));
  }, [dispatch]);

  useEffect(() => {
    if (authError) {
      setError('로그인 실패');
      return;
    }
    if (auth) {
      console.log('login success');
      dispatch(check());
    }
  }, [auth, authError, dispatch]);

  useEffect(() => {
    if(user) {
      navigate('/');
    }
  }, [navigate, user])

  useEffect(() => {
    if (user) {
      navigate('/');

      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
      }
    }
  }, [navigate, user])

  return (
    <AuthForm
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    ></AuthForm>
  );
}

export default LoginForm;