import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.comp';
import CustomButton from '../custom-button/custom-button.comp';
import {auth, signInWithGoogle } from '../../firebase/firebase.utils';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : ''
    }
  }

  handleSubmit = async evt => {
    evt.preventDefault();
    const { email, password } = this.state;
    try {
      await auth.signInWithEmailAndPassword(email, password);
      this.setState({ email: '', password: ''});
    }catch (error) {
      console.log('error :', error);
    }
  }

  handleChange = evt => {
    const { value, name } = evt.target
    this.setState({
      [name]: value
    })
  }

  render() {
    return (
      <div className='sign-in'>
        <h2>I already have a na account</h2>
        <span>Sing in with your email and password</span>
        <form onSubmit={this.handleSubmit}>
          <FormInput
            handleChange={this.handleChange}
            value={this.state.email}
            type='email'
            name='email'
            label='email'
            required/>
          <FormInput
            handleChange={this.handleChange}
            value={this.state.password}
            type='password'
            name='password'
            label='password'
            required/>
            <div className='buttons'>
              <CustomButton type='submit'>Sign In</CustomButton>
              <CustomButton onClick={signInWithGoogle} isGoogleSignIn> Sign In With Google </CustomButton>
            </div>
        </form>
      </div>
     );
  }
}

export default SignIn;