import css from '../Feedback.module.css';

export const Statistics = ({ state }) => {
  return (
    <>
      {state.total !== 0 && (
        <div>
          <h2>Statistics</h2>
          <ul className={css.statList}>
            <li className={`${css.statItem} ${css.good}`}>
              Good: {state.good}
            </li>
            <li className={`${css.statItem} ${css.neutral}`}>
              Neutral: {state.neutral}
            </li>
            <li className={`${css.statItem} ${css.bad}`}>Bad: {state.bad}</li>
          </ul>
          <h2>Total: {state.total}</h2>
          <h2>Positive feedback: {state.positivePercentage}%</h2>
        </div>
      )}
    </>
  );
};
