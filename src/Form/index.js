import "./style.css";
import { useState } from "react";


const Form = ({ addNewTask }) => {
   const [newTaskContent, setNewTaskContent] = useState("");

   const onFormSubmit = (event) => {
      event.preventDefault();

      const emptyInput = newTaskContent.trim();
      if (!emptyInput) {
         return;

      };

      addNewTask(emptyInput);
      setNewTaskContent("");
   };

   return (
      <form className="form" onSubmit={onFormSubmit}>

         <input
            value={newTaskContent}
            className="form__input"
            placeholder="Co jest do zrobienia? "
            onChange={(event) => setNewTaskContent(event.target.value)}
         />
         <button className="form__button">Dodaj zadanie</button>
      </form>
   )
};


export default Form; 