import React, { Component } from 'react';
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

        <form>
          <input
            type='email'
            name='email'
            value={this.state.email}
            onChange={this.handleChange}
            required/>
          <label htmlFor='email'>Email</label>
          <input
            type='password'
            name='password'
            value={this.state.password}
            onChange={this.handleChange}
            required/>
          <label htmlFor='password'>Password</label>
          <button type='submit'>Sign In</button>
        </form>

      </div>
     );
  }
}

export default SignIn;