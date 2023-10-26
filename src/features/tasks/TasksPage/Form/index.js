import { nanoid } from "@reduxjs/toolkit";
import { PrimaryButton, StyledForm } from "./styled";
import { InputStyled } from "../../Input/styled";
import { useState, useRef } from "react";
import { useDispatch } from "react-redux";
import { addTask } from "../../tasksSlice";

const Form = () => {
   const [newTaskContent, setNewTaskContent] = useState("");
   const inputFocus = useRef(null);

   const dispatch = useDispatch();

   const onFormSubmit = (event) => {
      event.preventDefault();

      const trimmedTaskContent = newTaskContent.trim();
      if (!trimmedTaskContent) {
         return;
      };

      dispatch(addTask({
         content: trimmedTaskContent,
         done: false,
         id: nanoid(),
      }));


      setNewTaskContent("");
      inputFocus.current.focus();
   };

   return (
      <StyledForm onSubmit={onFormSubmit}>
         <InputStyled
            autoFocus
            ref={inputFocus}
            value={newTaskContent}
            className="form__input"
            placeholder="Co jest do zrobienia? "
            onChange={({ target }) => setNewTaskContent(target.value)}
         />
         <PrimaryButton>Dodaj zadanie</PrimaryButton>
      </StyledForm>
   )
};

export default Form; 