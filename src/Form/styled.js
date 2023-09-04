import styled from "styled-components"

export const PrimaryButton = styled.button`
      background-color: hsl(180, 100%, 25%);
      color: white;
      padding: 10px;
      border: none;
      transition: 0.4s;
      cursor: pointer;
            &:hover {
               background-color: hsl(180, 100%, 35%);
               scale: 1.05;
            }
`;

export const StyledForm = styled.form`
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 20px;
      @media (max-width: 767px) {
      grid-template-columns: 1fr;
      }
`;

export const InputStyled = styled.input`
      padding: 10px;
      border: 1px solid #ddd;
`;