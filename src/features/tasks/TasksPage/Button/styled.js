import styled from "styled-components";

export const Button = styled.button`
   background: white;
   color: ${({ theme }) => theme.colors.teal};
   border: none;
   margin: 0 0 0 20px;
   transition: color 0.4s;
   cursor: pointer;

   @media (max-width: ${({ theme }) => theme.breakpoints.mobileMax}px) {
      flex-basis: 100%;
      margin: 10px;
   }

   &:hover {
      color: ${({ theme }) => theme.colors.hoverTeal};
   }

   &:disabled {
      color: ${({ theme }) => theme.colors.grey};
      cursor: auto;
   }
`;