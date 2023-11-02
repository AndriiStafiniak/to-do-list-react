import { NavLink } from "react-router-dom";
import styled, { css } from "styled-components"

export const List = styled.ul`
      list-style-type: none;
      padding: 0;
      margin: 0;
`;

export const Item = styled.li`
      display: grid;
      grid-template-columns: auto 1fr auto;
      gap: 10px;
      align-items: center;
      border-bottom: 1px solid #ddd;
      margin: 0px 0px 10px 0;
      padding: 5px;
      word-break: break-word;

        ${({ hidden }) => hidden && css`
            display: none;
            cursor:pointer;
        ` };  
`;

export const Content = styled.span`
        ${({ done }) => done && css`
          text-decoration: line-through;
          cursor: pointer;
        `}
`;

export const TaskButton = styled.button`
      color: ${({ theme }) => theme.colors.white};
      border: none;
      width: 30px;
      height: 30px;
      transition: background 0.4s;
      cursor: pointer;
      text-align: center;
      padding: 0;
        
`;
export const ToggleDoneButton = styled(TaskButton)`

      background: ${({ theme }) => theme.colors.green};
          &:hover{background:${({ theme }) => theme.colors.hoverGreen}}
        
`;

export const RemoveButton = styled(TaskButton)`
      background: ${({ theme }) => theme.colors.red};
           &:hover{background: ${({ theme }) => theme.colors.hoverRed}}  
`;

export const StyledLink = styled(NavLink)`
      text-decoration: none;
      color:${({ theme }) => theme.colors.teal};
            &:hover{
                  cursor: pointer;
                  color: ${({ theme }) => theme.colors.hoverTeal};
            }
`;