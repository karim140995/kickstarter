import React, { Component } from 'react';
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
      <div className="App">
        <Header />
        <Home />
        <Footer />
      </div>
    );
  }
}

export default App;
