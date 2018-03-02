import React, { Component } from 'react';
import { Link } from 'react-router-dom';
import QuestionCard from '../QuestionCard';

import Questions from '../Questions';

const QUESTIONS = [
  'Location',
  'Gender',
  'Personality',
];

class TestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.assignPreference = this.assignPreference.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
  }

  assignPreference(question, choice) {
    this.setState({ [question]: choice });
  }

  nextQuestion() {
    let { currentIndex } = this.state;
    currentIndex++;
    if (currentIndex >= QUESTIONS.length) currentIndex = 0;
    this.setState({ currentIndex });
  }

  render() {
    const question = QUESTIONS[this.state.currentIndex];
    const CardContent = Questions[question];
    return (
      <div>
        <p style={{ color: 'white' }}>Questions</p>
        <QuestionCard>
          <CardContent
            name={question}
            onClick={(choice) => this.assignPreference(question, choice)}
            value={this.state[question]}
          />
        </QuestionCard>
        <button onClick={this.nextQuestion}>Next question</button>
      </div>
    );
  }
}

export default TestPage;
