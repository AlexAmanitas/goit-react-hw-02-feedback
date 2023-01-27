import PropTypes from 'prop-types';
import { FeedbackBtn, FeedbackButtons } from './FeedbackOption.styled';

const FeedbackOptions = ({ options, onLiveFeedback }) => {
  return (
    <FeedbackButtons>
      {options.map(option => (
        <FeedbackBtn
          key={option}
          name={option}
          type="button"
          onClick={onLiveFeedback}
        >
          {option}
        </FeedbackBtn>
      ))}
    </FeedbackButtons>
  );
};

FeedbackOptions.propTypes = {
  options: PropTypes.arrayOf(PropTypes.string.isRequired).isRequired,
  onLiveFeedback: PropTypes.func.isRequired,
};

export default FeedbackOptions;
