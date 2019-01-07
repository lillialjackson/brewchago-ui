import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import {
  Avatar,
  Box,
  Button,
  Card,
  Column,
  Heading,
  Link,
  Text,
  TextField
} from "gestalt";
import MainNav from './components/main-nav/main-nav.js';
import Home from './components/home/home.js';

class App extends Component {
  constructor () {
    super();
    this.state = {
    }
  }
  render() {
    return (
      <div className="home">
        <header className="home-header">
          <h1>BrewchaGo</h1>
          <p>
          Brew from anywhere.
          </p>
        </header>
        <div className= "brew-components">
          <MainNav />
          <Home />
        </div>
      </div>
    );
  }
}

export default App;
