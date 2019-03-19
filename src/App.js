import React, { Component } from 'react';
import Home from './Components/Home/Home';

class App extends Component {
  render() {
    return (
      <div className="portfolio-App">
          <Home />

          <ul className="home-soc-list">
            <li className="home-soc-list__item">
                <a href="/" className="home-soc-list__link icon-facebook" rel="nofollow" target="_blank"></a>
            </li>
            <li className="home-soc-list__item">
                <a href="/" className="home-soc-list__link icon-instagram" rel="nofollow" target="_blank"></a>
            </li>
            <li className="home-soc-list__item">
                <a href="/" className="home-soc-list__link icon-github" rel="nofollow" target="_blank"></a>
            </li>
            <li className="home-soc-list__item">
                <a href="/" className="home-soc-list__link icon-linkedin2" rel="nofollow" target="_blank"></a>
            </li>
          </ul>
      </div>
    );
  }
}

export default App;
