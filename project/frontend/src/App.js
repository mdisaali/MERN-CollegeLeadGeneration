import React from 'react';
import logo from './logo.svg';
import './App.css';
import Header from './Components/Common/Header';
import { Redirect, Route, Switch } from 'react-router-dom';

import Home from './Components/Home';
import About from './Components/About';
import Contact from './Components/Contact';


function App() {
  return (

    <React.Fragment>
      <Header/>
      <Switch>
          <Route exact path="/" component={Home} />
          <Route exact path="/About" component={About} />
          <Route exact path="/Contact" component={Contact} />
          <Redirect to={Home} />
     </Switch>
      
    </React.Fragment>
    
    
  );
}

export default App;
