import React, { Component } from 'react';
import ReactAutocomplete from 'react-autocomplete';
import Body from '../Body';
import Container from './elements/Container';
import languages from '../../resources/languages.json';

class Hobby extends Component {
  constructor() {
    super();

    this.state = {
      languages: [],
    };
  }

  render() {
    const questionNumber = this.props.number < 10 ? `0${this.props.number}` : this.props.number;
    return (
      <div>
        {this.props.number > 1 && <div className="back-chevron" onClick={this.props.goBack}>&#8592;</div>}
        <Body bold className="question-number">{questionNumber}</Body>
        <Body bold className="question-title">What your preferred language for communication?</Body>
        <Container>
          <div className="image">
            <img src="./images/illustrations/6_illustration.png" width="350px" />
          </div>
          {/* <div className="choices" style={{ marginBottom: '110px' }}>
            <select onChange={e => this.props.onClick(e.target.value)} value={this.props.value || 'none'}>
              <option value="none" disabled hidden>Choose language</option>
              {languages.map(({ id, language }) => (
                <option key={id} value={id}>{language}</option>
              ))}
            </select>
          </div> */}
          <textarea
            className="text-area hobby-box"
            placeholder="Your hobbies..."
            multiple
          />
        </Container>
      </div>
    );
  }
}

export default Hobby;
