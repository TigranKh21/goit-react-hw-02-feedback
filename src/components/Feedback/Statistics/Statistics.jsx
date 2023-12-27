import css from '../Feedback.module.css';

export const Statistics = ({ state, total, positivePercentage }) => {
  return (
    <>
      <div>
        <ul className={css.statList}>
          <li className={`${css.statItem} ${css.good}`}>Good: {state.good}</li>
          <li className={`${css.statItem} ${css.neutral}`}>
            Neutral: {state.neutral}
          </li>
          <li className={`${css.statItem} ${css.bad}`}>Bad: {state.bad}</li>
        </ul>
        <h2>Total: {total}</h2>
        <h2>Positive feedback: {positivePercentage}%</h2>
      </div>
    </>
  );
};
