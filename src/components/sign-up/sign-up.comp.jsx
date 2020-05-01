import React, { Component } from 'react';
import FormInput from '../form-input/form-input.comp';
import CustomButton from '../custom-button/custom-button.comp';
import { auth, createUserProfileDocument } from '../../firebase/firebase.utils';
import './sign-up.styles.scss';

class SignUp extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email: '',
      password: '',
      confirmPassword: '',
      displayName: ''
     }
  }

  handleSubmit = async event => {
    event.preventDefault();
    const { displayName, email, password, confirmPassword } = this.state;

    if ( password !== confirmPassword ) {
      alert("passwords don't match");
      return;
    }
    try {
      const { user } = await auth.createUserWithEmailAndPassword (
        email,
        password
      )
      createUserProfileDocument(user, {displayName});
      this.setState({
        email: '',
        password: '',
        confirmPassword: '',
        displayName: ''
      })

    } catch(error) {
      console.log("error creating account :", error)
    }
  };

  handleChange = event => {
    const { name, value } = event.target;
    this.setState({[name]: value});
  };

  render() {
    const { email, password, confirmPassword, displayName } = this.state;
    return (
      <div className='sign-up'>
        <h2 className='title'> I do not have an account</h2>
        <span>Sign up with your email and password</span>
        <form action='submit' className='sign-up-from' onSubmit={this.handleSubmit}>
          <FormInput
            type='text'
            name='displayName'
            value={displayName}
            onChange={this.handleChange}
            label='Display Name'
            required
          />
          <FormInput
            type='text'
            name='email'
            value={email}
            onChange={this.handleChange}
            label='Email'
            required
          />
          <FormInput
            type='password'
            name='password'
            value={password}
            onChange={this.handleChange}
            label='Password'
            required
          />
          <FormInput
            type='password'
            name='confirmPassword'
            value={confirmPassword}
            onChange={this.handleChange}
            label='Confirm Password'
            required
          />
          <CustomButton type='submit'> Sign Up</CustomButton>
        </form>
      </div>
     );

  }
}

export default SignUp;