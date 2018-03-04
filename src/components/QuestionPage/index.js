import React, { Component } from 'react';
import { Redirect } from 'react-router-dom';
import './style.css';

import QuestionCard from '../QuestionCard';

import Questions from '../Questions';

function scrollToTop() {
  document.body.scrollTop = 0; // For Safari
  document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
}

const QUESTIONS = [
  'Gender',
  'Location',
  'Language',
  'Personality',
  'StudyStyle',
];

class TestPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      currentIndex: 0,
    };
    this.assignPreference = this.assignPreference.bind(this);
    this.nextQuestion = this.nextQuestion.bind(this);
    this.prevQuestion = this.prevQuestion.bind(this);
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
    scrollToTop();
  }

  prevQuestion() {
    let { currentIndex } = this.state;
    currentIndex--;
    if (currentIndex > -1) {
      this.setState({ currentIndex });
    };
    scrollToTop();
  }

  submit() {
    return <Redirect to="/" />
  }

  render() {
    const question = QUESTIONS[this.state.currentIndex];
    const CardContent = Questions[question];
    const isLastQuestion = this.state.currentIndex === (QUESTIONS.length - 1);
    return (
      <div className="question-page">
        <QuestionCard>
          <CardContent
            name={question}
            number={this.state.currentIndex + 1}
            onClick={(choice) => this.assignPreference(question, choice)}
            value={this.state[question]}
            goBack={this.prevQuestion}
          />
          {isLastQuestion
             ? <div className="button" disabled={!this.state[question]} onClick={this.submit}>Submit</div>
             : <div className="button" disabled={!this.state[question]} onClick={this.nextQuestion}>Next question</div>}
        </QuestionCard>
      </div>
    );
  }
}

export default TestPage;
