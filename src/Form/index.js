import "./style.css";
import { useState } from "react";


const Form = ({ addNewTask }) => {
   const [content, setNewTaskContent] = useState("");

   const onFormSubmit = (event) => {
      event.preventDefault();
      addNewTask(content.trim());
      setNewTaskContent("");

   };
   return (
      <form className="form" onSubmit={onFormSubmit}>

         <input
            value={content}
            className="form__input"
            placeholder="Co jest do zrobienia? "
            onChange={(event) => setNewTaskContent(event.target.value)}
         />
         <button className="form__button">Dodaj zadanie</button>
      </form>
   )
};


export default Form; 