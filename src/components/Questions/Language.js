import React, { Component } from 'react';

import Body from '../Body';
import languages from '../../resources/languages.json';

class Language extends Component {
  render() {
    const questionNumber = this.props.number < 10 ? `0${this.props.number}` : this.props.number;
    return (
      <div>
        <Body bold style={{ color: '#aa1e23' }}>{questionNumber}</Body>
        <Body bold className="question-title">WHICH LANGUAGE WOULD YOU PREFER YOUR TUTOR TO SPEAK?</Body>
        <div className="image"></div>
        <div className="choices" style={{ marginBottom: '110px' }}>
          <select onChange={e => this.props.onClick(e.target.value)} value={this.props.value || 'none'}>
            <option value="none" disabled hidden>Choose language</option>
            {languages.map(({ id, language }) => (
              <option key={id} value={id}>{language}</option>
            ))}
          </select>
        </div>
      </div>
    );
  }
}

export default Language;
