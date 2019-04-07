import React, { Component } from 'react';
import Home from './Components/Home/Home';
import AppNav from './Components/App-nav';

class App extends Component {
  render() {
    return (
      <div className="portfolio-App">
          <AppNav />
          <Home />


      </div>
    );
  }
}

export default App;
