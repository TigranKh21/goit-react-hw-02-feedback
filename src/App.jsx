import { Component } from 'react';
import { Statistics } from 'components/Feedback/Statistics/Statistics';
import { FeedbackOptions } from 'components/Feedback/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Feedback/Section/Section';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  options = [
    { id: 'good', title: 'Good' },
    { id: 'neutral', title: 'Neutral' },
    { id: 'bad', title: 'Bad' },
  ];

  onLeaveFeedback = id => {
    this.setState(
      prevState => ({ [id]: prevState[id] + 1 }),
      () => {
        this.countTotalFeedback();
        this.countPositiveFeedbackPercentage();
      }
    );
  };

  countTotalFeedback = () => {
    const total = this.state.good + this.state.neutral + this.state.bad;
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );
    return positivePercentage;
  };
  render() {
    return (
      <div>
        <Section title="Feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={this.options}
          />
        </Section>
        {this.countTotalFeedback() !== 0 && (
          <Section title="Statistics">
            <Statistics
              total={this.countTotalFeedback}
              positivePercentage={this.countPositiveFeedbackPercentage}
              state={this.state}
            />
          </Section>
        )}
      </div>
    );
  }
}
