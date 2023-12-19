import { Component } from 'react';
import { Feedback } from './components/Feedback/Feedback';

export class App extends Component {
  state = {
    good: 0,
    neutral: 0,
    bad: 0,
    total: 0,
    positivePercentage: 0,
  };

  onLeaveFeedback = e => {
    const stateItem = e.currentTarget.textContent.toLowerCase();
    this.setState(prevState => ({
      [stateItem]: prevState[stateItem] + 1,
      total: prevState.total + 1,
      positivePercentage: Math.round(
        stateItem === 'good'
          ? ((prevState.good + 1) / (prevState.total + 1)) * 100
          : (prevState.good / (prevState.total + 1)) * 100
      ),
    }));
  };
  render() {
    return (
      <div>
        <Feedback state={this.state} onLeaveFeedback={this.onLeaveFeedback} />
      </div>
    );
  }
}
