import styled from "styled-components"

export const PrimaryButton = styled.button`
      background-color: hsl(180, 100%, 25%);
      color: ${({ theme }) => theme.colors.white};
      padding: 10px;
      border: none;
      transition: 0.4s;
      cursor: pointer;
            &:hover {
               background-color: ${({ theme }) => theme.colors.hoverTeal};
               scale: 1.03;
            }
`;

export const StyledForm = styled.form`
      display: grid;
      grid-template-columns: 1fr auto;
      gap: 20px;
      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
      grid-template-columns: 1fr;
      }
`;

export const InputStyled = styled.input`
      padding: 10px;
      border: 1px solid #ddd;
`;