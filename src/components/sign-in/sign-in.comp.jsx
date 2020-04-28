import React, { Component } from 'react';
import './sign-in.styles.scss';
import FormInput from '../form-input/form-input.comp';
import CustomButton from '../custom-button/custom-button.comp';

class SignIn extends Component {
  constructor(props) {
    super(props);
    this.state = {
      email : '',
      password : ''
    }
  }

  handleSubmit = evt => {
    evt.preventDefault();
    this.setState({ email: '', password: ''})
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
            <CustomButton type='submit'>
              Sign In
            </CustomButton>
        </form>
      </div>
     );
  }
}

export default SignIn;