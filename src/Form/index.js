import "./style.css";
import { useState } from "react";


const Form = ({ addNewTask }) => {
   const [newTaskContent, setNewTaskContent] = useState("");

   const onFormSubmit = (event) => {
      event.preventDefault();

      const dontAddEmptyTask = newTaskContent.trim();
      if (!dontAddEmptyTask) {
         return;
      };

      addNewTask(dontAddEmptyTask);
      setNewTaskContent("");
   };

   return (
      <form className="form" onSubmit={onFormSubmit}>

         <input
            value={newTaskContent}
            className="form__input"
            placeholder="Co jest do zrobienia? "
            onChange={({ target }) => setNewTaskContent(target.value)}
         />
         <button className="form__button">Dodaj zadanie</button>
      </form>
   )
};


export default Form; 