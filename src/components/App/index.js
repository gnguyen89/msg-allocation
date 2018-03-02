import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './style.css';

import LoginPage from '../LoginPage';
import TestPage from '../TestPage';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <BrowserRouter>
          <div>
            <Route exact path="/" component={LoginPage} />
            <Route path="/test" component={TestPage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
