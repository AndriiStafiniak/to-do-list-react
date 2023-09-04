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
      color: white;
      border: none;
      width: 35px;
      height: 35px;
      transition: background 0.4s;
      cursor: pointer;
      text-align: center;
        ${({ toggleDone }) => toggleDone && css`
            background: hsl(124, 97%, 53%);
              &:hover{background: hsl(124, 97%, 85%)}
        `};

        ${({ remove }) => remove && css`
            background: hsl(0, 100%, 50%);
              &:hover{background: hsl(0, 100%, 80%)}  
    `}
`;