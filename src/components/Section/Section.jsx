import PropTypes from 'prop-types';
import { WidgetSection, Title } from './Section.styled';

const Section = ({ title, children }) => {
  return (
    <WidgetSection>
      <Title>{title}</Title>
      {children}
    </WidgetSection>
  );
};

export default Section;

Section.propTypes = {
  title: PropTypes.string.isRequired,
  children: PropTypes.object.isRequired,
};
