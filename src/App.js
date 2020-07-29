import React, { Component } from 'react';
import './App.css';
import Home from './Pages/Home';
import AllSeasons from './Pages/AllSeasons';
import SingleSeason from './Pages/SingleSeason';
import Episode from './Pages/Episode';
import Error from './Pages/Error';
import { Route, Switch } from 'react-router-dom';
import Navbar from './Components/Navbar';

class App extends Component {
  render(){
    return(
      <>
        <Navbar />
        <Switch>
          <Route path='/' exact component={Home} />
          <Route path='/seasons/' exact component={AllSeasons} />
          <Route path='/seasons/:seasonNo' exact component={SingleSeason} />
          <Route path='/seasons/:seasonNo/:episode' exact component={Episode} />
          <Route component={Error} />
        </Switch>
      </>
    )
  }
}

export default App;
