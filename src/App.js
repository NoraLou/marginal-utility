import React from 'react';
import {Route, Switch } from 'react-router-dom';
import './App.scss';
import HomePage from './pages/homepage.comp'

const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
);

function App() {
  return (
    <div className="App">
      <Switch>
        <Route exact path='/' render={routeProps => <HomePage {...routeProps}/>}/>
        <Route exact path='/hats' render={routeProps => <HatsPage {...routeProps}/>}/>
      </Switch>
    </div>
  );
}


export default App;
