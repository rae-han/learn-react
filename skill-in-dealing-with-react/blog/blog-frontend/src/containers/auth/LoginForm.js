import React, { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { withRouter } from 'react-router-dom'
import { changeField, initializeForm, login } from '../../modules/auth';
import { check } from '../../modules/user'
import AuthForm from '../../components/auth/AuthForm';

const LoginForm = ({ history }) => {
  const [error, setError] = useState(null)

  const dispatch = useDispatch();
  const { form, auth, authError, user } = useSelector(({ auth, user }) => ({
    form: auth.login,
    auth: auth.auth,
    authError: auth.authError,
    user: user.user
  }));

  // 인풋 변경 이벤트 핸들러
  const onChange = e => {
    const { value, name } = e.target;
    dispatch(changeField({
      form: 'login',
      key: name,
      value
    }))
  }
  // 폼 등록 이벤트 핸들러
  const onSubmit = e => {
    e.preventDefault();
    const { username, password } = form;
    dispatch(login({ username, password }))
  }

  useEffect(() => {
    dispatch(initializeForm('login'))
  }, [dispatch])

  useEffect(() => {
    if(authError) {
      console.log('Error!!')
      console.log(authError)
      setError('로그인 실패!')
    }
    if(auth) {
      console.log('LOGIN SUCCESS!')
      dispatch(check())
    }
  }, [dispatch, auth, authError])

  useEffect(() => {
    if(user) {
      history.push('/')

      try {
        localStorage.setItem('user', JSON.stringify(user));
      } catch (e) {
        console.log('localStorage is not working');
        throw e;
      }
    }
  }, [history, user])

  return (
    <AuthForm 
      type="login"
      form={form}
      onChange={onChange}
      onSubmit={onSubmit}
      error={error}
    />
  );
};

export default withRouter(LoginForm);