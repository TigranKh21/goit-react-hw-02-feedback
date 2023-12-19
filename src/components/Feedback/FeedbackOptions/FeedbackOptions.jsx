import { Component } from 'react';
import css from '../Feedback.module.css';

export class FeedbackBtns extends Component {
  render() {
    return (
      <>
        <h2>Please leave feedback</h2>
        <div className={css.buttons}>
          <button className={css.good} onClick={this.props.onLeaveFeedback}>
            Good
          </button>
          <button className={css.neutral} onClick={this.props.onLeaveFeedback}>
            Neutral
          </button>
          <button className={css.bad} onClick={this.props.onLeaveFeedback}>
            Bad
          </button>
        </div>
      </>
    );
  }
}
