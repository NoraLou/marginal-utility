import React, { Component }from 'react';
import { Route, Switch, Redirect } from 'react-router-dom';
import { connect } from 'react-redux';
import { createStructuredSelector } from 'reselect';

import './App.scss';
import HomePage from './pages/homepage/homepage.comp';
import ShopPage from './pages/shoppage/shoppage.comp';
import Checkout from './pages/checkout/checkout.comp';
import Header from './components/header/header.comp';
import LogInRegister from './pages/log-in-register/log-in-register.comp';
import { auth, createUserProfileDocument } from './firebase/firebase.utils';
import { setCurrentUser } from './redux/user/user.actions';
import { selectCurrentUser } from './redux/user/user.selectors';

class App extends Component {

  static unsubscribeFromAuth = null;

  componentDidMount() {
    const { setCurrentUser } = this.props;

    this.unsubscribeFromAuth = auth.onAuthStateChanged( async userAuth => {
      if (userAuth) {
        const userRef = await createUserProfileDocument(userAuth);
        userRef.onSnapshot(snapShot => {
          setCurrentUser({
            id: snapShot.id,
            ...snapShot.data()
          });
        });
      }
      // set current user to a null response if no user logged in - default return from FB
      setCurrentUser(userAuth);
    });
  }

  componentWillUnmount() {
    this.unsubscribeFromAuth()
  }

  render() {
    return (
      <div className="App">
        <Header />
        <Switch>
          <Route exact path='/' render={routeProps => <HomePage {...routeProps}/>}/>
          <Route path='/shop' render={routeProps => <ShopPage {...routeProps}/>}/>
          <Route exact path='/checkout' render={routeProps => <Checkout {...routeProps}/>}/>
          <Route
            exact
            path='/log-in'
            render={ routeProps =>
              this.props.currentUser ? (
                <Redirect to='/'/>
              ) : (
                <LogInRegister {...routeProps}/>
              )
            }/>
        </Switch>
      </div>
    );
  }
}

const mapStateToProps = createStructuredSelector({
  currentUser: selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect (
  mapStateToProps,
  mapDispatchToProps
  )
(App);
