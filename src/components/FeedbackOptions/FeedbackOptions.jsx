import PropTypes from 'prop-types';
import { FeedbackBtn } from './FeedbackOption.styled';

const FeedbackOptions = props => {
  const { options, onLiveFeedback } = props;
  return (
    <FeedbackBtn name={options} type="button" onClick={onLiveFeedback}>
      {options}
    </FeedbackBtn>
  );
};

FeedbackOptions.propTypes = {
  props: PropTypes.shape({
    options: PropTypes.string.isRequired,
    onLiveFeedback: PropTypes.func.isRequired,
  }),
};

export default FeedbackOptions;
