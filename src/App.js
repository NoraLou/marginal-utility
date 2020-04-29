import React, { Component }from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/homepage/homepage.comp'
import ShopPage from './pages/shoppage/shoppage.comp'
import Header from './components/header/header.comp'
import LogInRegister from './pages/log-in-register/log-in-register.comp'
import { auth } from './firebase/firebase.utils';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
  }

  static unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( user => {
      this.setState({currentUser: user});
      console.log(user);
    })
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }


  render() {
    return (
      <div className="App">
        <Header currentUser={this.state.currentUser}/>
        <Switch>
          <Route exact path='/' render={routeProps => <HomePage {...routeProps}/>}/>
          <Route path='/shoppage' render={routeProps => <ShopPage {...routeProps}/>}/>
          <Route path='/log-in' render={routeProps => <LogInRegister {...routeProps}/>}/>
        </Switch>
      </div>
    );
  }
}


export default App;
