import css from './Feedback.module.css';

export const Notification = ({ message }) => {
  return <div className={css.noStatMessage}>{message}</div>;
};
