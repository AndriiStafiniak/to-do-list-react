import { PrimaryButton, StyledForm, InputStyled } from "./styled";
import { useState, useRef } from "react";



const Form = ({ addNewTask }) => {
   const [newTaskContent, setNewTaskContent] = useState("");
   const inputFocus = useRef(null)

   const onFormSubmit = (event) => {
      event.preventDefault();

      const trimmedTaskContent = newTaskContent.trim();
      if (!trimmedTaskContent) {
         return;
      };

      addNewTask(trimmedTaskContent);
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