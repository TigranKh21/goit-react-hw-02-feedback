import { Component } from 'react';
import css from '../Feedback.module.css';

export class FeedbackOptions extends Component {
  handleButtonClick = id => {
    this.props.onLeaveFeedback(id);
  };
  render() {
    const { options } = this.props;
    return (
      <>
        <div className={css.buttons}>
          {options.map(option => (
            <div key={option.id} className={css.buttons}>
              <button
                className={css[option.id]}
                id={option.id}
                onClick={() => this.handleButtonClick(option.id)}
              >
                {option.title}
              </button>
            </div>
          ))}
        </div>
      </>
    );
  }
}
