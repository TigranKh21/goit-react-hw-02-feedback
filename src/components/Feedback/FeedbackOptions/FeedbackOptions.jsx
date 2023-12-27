import css from '../Feedback.module.css';

export const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      <div className={css.buttons}>
        {options.map(option => (
          <div key={option} className={css.buttons}>
            <button
              className={css[option]}
              id={option}
              onClick={() => onLeaveFeedback(option)}
            >
              {option}
            </button>
          </div>
        ))}
      </div>
    </>
  );
};
