import React, { Component } from 'react';
import './log-in-register.styles.scss';
import SignIn from '../../components/sign-in/sign-in.comp';
import SignUp from '../../components/sign-up/sign-up.comp';

const LogInRegister = () => {
  return (
    <div className='log-in-register'>
      <SignIn />
      <SignUp />
    </div>
  );
}

export default LogInRegister;