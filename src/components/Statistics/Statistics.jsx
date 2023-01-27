import PropTypes from 'prop-types';
import Notification from 'components/Notification';

const Statistics = ({ good, neutral, bad, total, positivePercentage }) => {
  if (good + neutral + bad === 0)
    return <Notification message="There is no feedback" />;

  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>
        Positive feedback:
        {positivePercentage}
      </p>
    </>
  );
};

export default Statistics;

Statistics.propTypes = {
  good: PropTypes.number.isRequired,
  neutral: PropTypes.number.isRequired,
  bad: PropTypes.number.isRequired,
  total: PropTypes.number.isRequired,
  positivePercentage: PropTypes.string,
};
