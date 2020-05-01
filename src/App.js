import React, { Component }from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/homepage/homepage.comp'
import ShopPage from './pages/shoppage/shoppage.comp'
import Header from './components/header/header.comp'
import LogInRegister from './pages/log-in-register/log-in-register.comp'
import { auth, createUserProfileDocument } from './firebase/firebase.utils';

class App extends Component {
  constructor(props) {
    super(props)
    this.state = {
      currentUser: null
    }
  }

  static unsubscribeFromAuth = null;

  componentDidMount() {
    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);

        userRef.onSnapshot(snapShot => {
          this.setState({
            currentUser: {
              id: snapShot.id,
              ...snapShot.data()
            }
          });
          console.log('this.state :', this.state);
        });
      }
      // set current user to a null response if no user logged in - default return from FB
      this.setState({currentUser: userAuth})
    });
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
