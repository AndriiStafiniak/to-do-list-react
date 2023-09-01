import { ContainerStyled } from "./styled"


const Container = ({ children, className }) => (
   <ContainerStyled className={className}>
      {children}
   </ContainerStyled>
);


export default Container