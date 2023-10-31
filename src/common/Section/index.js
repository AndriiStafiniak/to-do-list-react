import { StyledSection, Title, Body, Header } from "./styled"

const Section = ({ title, extraHeaderContent, body }) => (
   <StyledSection>
      <Header>
         <Title>{title}</Title>
         {extraHeaderContent}
      </Header>
      <Body>
         {body}
      </Body>
   </StyledSection>
);

export default Section;