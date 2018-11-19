import React, { Component } from 'react';
import './App.scss';
import Header from './components/Header'
import Hero from './components/Hero';
import Container from './components/container';

class App extends Component {
  render() {
    return (
      <div className="App">
        <Header />
        <Hero />
        <Container>
          
        </Container> 
      </div>
    );
  }
}

export default App;
