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
