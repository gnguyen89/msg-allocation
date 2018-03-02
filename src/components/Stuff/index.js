import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import RadioButton from '../RadioButton';
import Checkbox from '../Checkbox';

class Stuff extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div>
        <Checkbox isChecked onClick={() => {}} />
        <RadioButton isChecked onClick={() => {}} option={{
          optionLabel: 'Testing',
        }}/>
        <Link to="/test"><button>Go to test page</button></Link>
      </div>
    );
  }
}

export default Stuff;
