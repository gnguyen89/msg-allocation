import React, { Component } from 'react';
import { Redirect } from 'react-router';

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
    return <Redirect to="/test" />;
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
      <div>
        <div className="login-black-bar">
          <span className="contrast-text">CRIMSON EDUCATION</span>
        </div>
        <div className="login-white-bar">
          <img src="./images/Crimson_Logo.png" height="55px" width="140px" />
        </div>

        <h3 className="contrast-text-2">Log in</h3>
        <p className="contrast-text" style={{ marginLeft: '-380px' }}>Email adress</p>
        <input type="text" className="input"/>
        <p className="contrast-text" style={{ marginLeft: '-400px' }}>Password</p>
        <input type="password" className="input"/>
        {this.state.verify
           ? <div className="contrast-text-2 verify-button">Verifying...</div>
           : <div className="contrast-text-2 login-button" onClick={this.verify}>Log in</div>}
      </div>
    );
  }
}

export default App;
