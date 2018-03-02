import React, { Component } from 'react';
import classNames from 'classnames';

import Body from '../Body';
import Checkbox from '../Checkbox';

class Personality extends Component {
  constructor(props) {
    super(props);
    this.state = {
      values: this.props.value || [],
    };
    this.addChoice = this.addChoice.bind(this);
  }

  addChoice(selected) {
    let values = this.state.values;
    if (values.includes(selected)) {
      values = values.filter(choice => choice !== selected);
    } else if (values.length < 2) {
      values.push(selected);
    }
    this.setState({ values }, () => this.props.onClick(values));
  }

  render() {
    const { values } = this.state;
    return (
      <div>
        <Body>Which is more important to you in a tutor? (Pick two)</Body>
        <div className="choice">
          <Checkbox
            disabled={values.length === 2 && !values.includes('agreeableness-high')}
            isChecked={values.includes('agreeableness-high')}
            onClick={() => this.addChoice('agreeableness-high')}
          />
          <Body className={classNames({
            disabled: values.length === 2 && !values.includes('agreeableness-high'),
          })}>Amiability and compromise</Body>
        </div>
        <div className="choice">
          <Checkbox
            disabled={values.length === 2 && !values.includes('emotionality-high')}
            isChecked={values.includes('emotionality-high')}
            onClick={() => this.addChoice('emotionality-high')}
          />
          <Body className={classNames({
            disabled: values.length === 2 && !values.includes('emotionality-high'),
          })}>Compassion and warmth</Body>
        </div>
        <div className="choice">
          <Checkbox
            disabled={values.length === 2 && !values.includes('conscientiousness-high')}
            isChecked={values.includes('conscientiousness-high')}
            onClick={() => this.addChoice('conscientiousness-high')}
          />
          <Body className={classNames({
            disabled: values.length === 2 && !values.includes('conscientiousness-high'),
          })}>Diligence and organisation</Body>
        </div>
        <div className="choice">
          <Checkbox
            disabled={values.length === 2 && !values.includes('honesty-high')}
            isChecked={values.includes('honesty-high')}
            onClick={() => this.addChoice('honesty-high')}
          />
          <Body className={classNames({
            disabled: values.length === 2 && !values.includes('honesty-high'),
          })}>Honesty and morality</Body>
        </div>
        <div className="choice">
          <Checkbox
            disabled={values.length === 2 && !values.includes('extraversion-high')}
            isChecked={values.includes('extraversion-high')}
            onClick={() => this.addChoice('extraversion-high')}
          />
          <Body className={classNames({
            disabled: values.length === 2 && !values.includes('extraversion-high'),
          })}>Sociability and enthusiasm</Body>
        </div>
        <div className="choice">
          <Checkbox
            disabled={values.length === 2 && !values.includes('openness-high')}
            isChecked={values.includes('openness-high')}
            onClick={() => this.addChoice('openness-high')}
          />
          <Body className={classNames({
            disabled: values.length === 2 && !values.includes('openness-high'),
          })}>Creativity and open-mindedness</Body>
        </div>
      </div>
    );
  }
}

export default Personality;
