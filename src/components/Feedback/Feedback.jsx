import css from './Feedback.module.css';
import { FeedbackBtns } from './FeedbackOptions/FeedbackOptions';
import { Statistics } from './Statistics/Statistics';

export const Feedback = ({ state, onLeaveFeedback }) => {
  return (
    <div className={css.feedback}>
      <FeedbackBtns onLeaveFeedback={onLeaveFeedback} />
      <Statistics state={state} />
    </div>
  );
};
