import React, { Component } from 'react';
import Statistics from 'components/Statistics';
import FeedbackOptions from 'components/FeedbackOptions';
import Section from 'components/Section';

class App extends Component {
  constructor() {
    super();
    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

  hendleClickBtn = evt => {
    const { name } = evt.currentTarget;
    this.setState(prevState => {
      return { [name]: prevState[name] + 1 };
    });
  };

  countTotalFeedback() {
    const { good, neutral, bad } = this.state;
    return bad + neutral + good;
  }

  countPositiveFeedbackPercentage() {
    if (this.countTotalFeedback() !== 0)
      return ` ${Math.round(
        (this.state.good / this.countTotalFeedback()) * 100
      )} %`;
  }

  render() {
    const { good, neutral, bad } = this.state;
    const options = ['good', 'neutral', 'bad'];
    return (
      <div>
        <Section title="Please leave feedback">
          {options.map(option => (
            <FeedbackOptions
              key={option}
              options={option}
              onLiveFeedback={this.hendleClickBtn}
            />
          ))}
        </Section>
        <Section title="Statistics">
          <Statistics
            good={good}
            neutral={neutral}
            bad={bad}
            total={this.countTotalFeedback()}
            positivePercentage={this.countPositiveFeedbackPercentage()}
          />
        </Section>
      </div>
    );
  }
}

export default App;
