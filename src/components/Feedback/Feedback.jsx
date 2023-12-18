import { Component } from 'react';
import css from './Feedback.module.css';

export class Feedback extends Component {
  state = {
    good: '0',
    neutral: '0',
    bad: '0',
    total: '0',
    positive: '0',
  };

  handleClick = e => {
    const stateItem = e.currentTarget.textContent.toLowerCase();
    this.setState(prevState => {
      let posFeedback;
      posFeedback = Math.round(
        stateItem === 'good'
          ? ((Number(prevState.good) + 1) / (Number(prevState.total) + 1)) * 100
          : (Number(prevState.good) / (Number(prevState.total) + 1)) * 100
      );
      return {
        [stateItem]: Number(prevState[stateItem]) + 1,
        total: Number(prevState.total + 1),
        positive: posFeedback,
      };
    });
  };

  render() {
    return (
      <div className={css.feedback}>
        <h2>Please leave feedback</h2>
        <div className={css.buttons}>
          <button className={css.good} onClick={this.handleClick}>
            Good
          </button>
          <button className={css.neutral} onClick={this.handleClick}>
            Neutral
          </button>
          <button className={css.bad} onClick={this.handleClick}>
            Bad
          </button>
        </div>
        <h2>Statistics</h2>
        <ul className={css.statList}>
          <li className={`${css.statItem} ${css.good}`}>
            Good: {this.state.good}
          </li>
          <li className={`${css.statItem} ${css.neutral}`}>
            Neutral: {this.state.neutral}
          </li>
          <li className={`${css.statItem} ${css.bad}`}>
            Bad: {this.state.bad}
          </li>
        </ul>
        <h2>Total: {this.state.total}</h2>
        <h2>Positive feedback: {this.state.positive}%</h2>
      </div>
    );
  }
}
