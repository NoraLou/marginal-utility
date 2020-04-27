import React, { Component } from 'react';
import './log-in-register.styles.scss';
import SignIn from '../../components/sign-in/sign-in.comp';

const LogInRegister = () => {
  return (
    <div className='log-in-register'>
      <SignIn />
    </div>
  );
}

export default LogInRegister;