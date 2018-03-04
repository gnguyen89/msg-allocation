import React, { Component } from 'react';
import { BrowserRouter, Route } from 'react-router-dom';
import './style.css';

import LoginPage from '../LoginPage';
import QuestionPage from '../QuestionPage';
import CompletePage from '../CompletePage';

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
            <Route path="/questions" component={QuestionPage} />
            <Route path="/complete" component={CompletePage} />
          </div>
        </BrowserRouter>
      </div>
    );
  }
}

export default App;
