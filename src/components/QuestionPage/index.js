import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import QuestionCard from '../QuestionCard';

import Questions from '../Questions';

const QUESTIONS = [
  'Gender',
  'Location',
  'Language',
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
    if (currentIndex < QUESTIONS.length) {
      this.setState({ currentIndex });
    };
  }

  submit() {
    return <Redirect to="/" />
  }

  render() {
    const question = QUESTIONS[this.state.currentIndex];
    const CardContent = Questions[question];
    const isLastQuestion = this.state.currentIndex === (QUESTIONS.length - 1);
    return (
      <div>
        <QuestionCard>
          <CardContent
            name={question}
            number={this.state.currentIndex + 1}
            onClick={(choice) => this.assignPreference(question, choice)}
            value={this.state[question]}
          />
          {isLastQuestion
             ? <div className="" disabled={!this.state[question]} onClick={this.submit}>Submit</div>
             : <div className="next-question" disabled={!this.state[question]} onClick={this.nextQuestion}>Next question</div>}
        </QuestionCard>
      </div>
    );
  }
}

export default TestPage;
