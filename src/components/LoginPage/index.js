import React, { Component } from 'react';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
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
        <p className="contrast-text" style={{ marginLeft: '-380px' }}>Password</p>
        <input type="text" className="input"/>
        <div className="contrast-text-2 login-button">Log in</div>
      </div>
    );
  }
}

export default App;
