import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';

import Body from '../Body';

import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      verify: false,
      redirect: false,
    };
    this.verify = this.verify.bind(this);
  }

  changeRoute() {
    return <Redirect to="/questions" />;
  }

  verify() {
    this.setState({ verify: true });
    window.setTimeout(() => this.setState({ redirect: true }), 2000);
  }

  render() {
    if (this.state.redirect) {
      return this.changeRoute();
    }
    return (
      <div className="login-page">
        <div style={{ flex: 1, margin: '6rem 2rem' }}>
          <Body bold style={{ color: '#aa1e23' }}>Crimson Education</Body>
          <Body bold style={{ fontSize: '24px' }}>Let us find the best tutor for you!</Body>
          <img src="./images/grey-wave.png" style={{ marginTop: '1rem' }} width="100px"/>
          <br/>
          <img src="./images/0_illustration.png" className="welcome-graphic" style={{ marginTop: '3.2rem' }}/>
          <br/>
          <input type="text" className="input"/><br/>
          <input type="password" className="input"/>
          {this.state.verify
             ? <div className="contrast-text-2 verify-button">Verifying...</div>
             : <div className="contrast-text-2 login-button" onClick={this.verify}>START</div>}
          <p style={{ color: 'white', fontSize: '10px', fontWeight: 400, letterSpacing: '1px' }}>Forgot your password?</p>
        </div>
        <div className="diag-welcome" />
      </div>
    );
  }
}

export default App;
