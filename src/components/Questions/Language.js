import React, { Component } from 'react';
import ReactAutocomplete from 'react-autocomplete';
import Body from '../Body';
import Container from './elements/Container';
import languages from '../../resources/languages.json';

class Language extends Component {
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
        <img src="./images/wave.png" style={{ marginTop: '1rem' }} width="100px"/>
        <Container>
          {/* <div className="choices" style={{ marginBottom: '110px' }}>
            <select onChange={e => this.props.onClick(e.target.value)} value={this.props.value || 'none'}>
              <option value="none" disabled hidden>Choose language</option>
              {languages.map(({ id, language }) => (
                <option key={id} value={id}>{language}</option>
              ))}
            </select>
          </div> */}
          <ReactAutocomplete
            items={languages}
            shouldItemRender={(item, value) => item.language.toLowerCase().indexOf(value.toLowerCase()) > -1}
            getItemValue={item => item.language}
            renderItem={(item, highlighted) =>
              <div
                className="autocomplete-item"
                style={{ background: highlighted ? '#F4F6F8' : 'white' }}
                key={item.id}
              >
                {item.language}
              </div>
            }
            value={this.state.value}
            onChange={e => this.setState({ value: e.target.value })}
            onSelect={value => this.setState({ value })}
            inputProps={{
              className: 'autocomplete language-auto',
              placeholder: 'Languages',
            }}
          />
          <div className="image" style={{ margin: '30px 0' }}>
            <img src="./images/illustrations/3_illustration.png" width="300px" />
          </div>
        </Container>
      </div>
    );
  }
}

export default Language;
