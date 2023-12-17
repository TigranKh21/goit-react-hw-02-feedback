import { Component } from 'react';
import css from './Feedback.module.css';

export class Feedback extends Component {
  state = {
    good: '0',
    neutral: '0',
    bad: '0',
  };

  render() {
    return (
      <div className={css.feedback}>
        <h2>Please leave feedback</h2>
        <div className={css.buttons}>
          <button className={css.good}>Good</button>
          <button className={css.neutral}>Neutral</button>
          <button className={css.bad}>Bad</button>
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
      </div>
    );
  }
}
