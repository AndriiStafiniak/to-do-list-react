
import { StyledSection, Title, Body, Header } from "./styled"


const Section = (props) => (
   <StyledSection>
      <Header>
         <Title>{props.title}</Title>
         {props.extraHeaderContent}
      </Header>
      <Body>
         {props.body}
      </Body>
   </StyledSection>
);


export default Section