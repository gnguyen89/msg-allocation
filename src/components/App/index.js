import React, { Component } from 'react';
import RadioButton from '../RadioButton';
import Checkbox from '../Checkbox';
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="App">
        <Checkbox isChecked onClick={() => {}} />
        <RadioButton isChecked onClick={() => {}} option={{
          optionLabel: 'Testing',
        }}/>
      </div>
    );
  }
}

export default App;
