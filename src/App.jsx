import { Component } from 'react';
import { Statistics } from 'components/Feedback/Statistics/Statistics';
import { FeedbackOptions } from 'components/Feedback/FeedbackOptions/FeedbackOptions';
import { Section } from 'components/Feedback/Section/Section';
import { Notification } from 'components/Feedback/Notification';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  onLeaveFeedback = id => {
    this.setState(prevState => ({ [id]: prevState[id] + 1 }));
  };

  countTotalFeedback = () => {
    const total = Object.values(this.state).reduce((acc, value) => {
      return acc + value;
    }, 0);
    return total;
  };

  countPositiveFeedbackPercentage = () => {
    const positivePercentage = Math.round(
      (this.state.good / this.countTotalFeedback()) * 100
    );

    return positivePercentage;
  };
  render() {
    const total = this.countTotalFeedback();
    const positivePercentage = this.countPositiveFeedbackPercentage();
    return (
      <div>
        <Section title="Feedback">
          <FeedbackOptions
            onLeaveFeedback={this.onLeaveFeedback}
            options={Object.keys(this.state)}
          />
        </Section>

        <Section title="Statistics">
          {this.countTotalFeedback() !== 0 ? (
            <Statistics
              total={total}
              positivePercentage={positivePercentage}
              state={this.state}
            />
          ) : (
            <Notification message="There is no feedback" />
          )}
        </Section>
      </div>
    );
  }
}
