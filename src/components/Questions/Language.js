import React, { Component } from 'react';

import Body from '../Body';
import languages from '../../resources/languages.json';

class Language extends Component {
  render() {
    return (
      <div>
        <Body>Which language would you prefer to receive tutoring in?</Body>
        <div className="choice">
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
