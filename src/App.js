import React, { Component } from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import logo from './logo.svg';
import './App.css';
import Project from './components/project';
import Header from './components/header';
import Donation from './components/donation';
import Footer from './components/footer';
import Home from './components/home';
class App extends Component {
  render() {
    return (
      <div>
        <Header />
        <Router>
        <div>
          <Route component={Home} exact path="/" />
          <Route component={Project} path="/project" />
          <Route component={Donation} path="/donation" />
        </div>
      </Router>
      <Footer />
      </div>
      
    );
  }
}

export default App;
