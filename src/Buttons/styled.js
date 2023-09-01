import styled from "styled-components"

export const ButtonsWrapper = styled.button`
   display: flex;
   flex-wrap: wrap;
   cursor: pointer;
   background: none;
   border: none;
`;

export const Button = styled.button`
   background: white;
   color: hsl(180, 100%, 25%);
   border: none;
   margin: 0 0 0 20px;
   transition: color 0.4s;
   cursor: pointer;

   @media (max-width: 767px) {
      flex-basis: 100%;
      margin: 10px;
   }

   &:hover {
      color: hsl(180, 100%, 45%);
   }

   &:disabled {
      color: #ccc;
      cursor: auto;
   }
`;