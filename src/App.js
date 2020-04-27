import React from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/homepage/homepage.comp'
import ShopPage from './pages/shoppage/shoppage.comp'
import Header from './components/header/header.comp'

function App() {
  return (
    <div className="App">
      <Header/>
      <Switch>
        <Route exact path='/' render={routeProps => <HomePage {...routeProps}/>}/>
        <Route exact path='/shoppage' render={routeProps => <ShopPage {...routeProps}/>}/>
      </Switch>
    </div>
  );
}


export default App;
