import React, { Component } from 'react';
import { Link } from 'react-router-dom';

class TestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <p>Test page</p>
        <Link to="/"><button>Go back</button></Link>
      </div>
    );
  }
}

export default TestPage;
