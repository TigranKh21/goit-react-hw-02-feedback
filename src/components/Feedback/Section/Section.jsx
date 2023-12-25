import css from '../Feedback.module.css';

export const Section = ({ title, children }) => {
  return (
    <div className={css.section}>
      <h2>{title}</h2>
      {children}
    </div>
  );
};
