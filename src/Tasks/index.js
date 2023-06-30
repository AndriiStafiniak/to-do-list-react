import "./style.css";


const Tasks = (props) => (
   <ul className="tasks">
      {props.tasks.map(
         task => (
            < li key={task.id} className={`tasks__item ${task.done && props.hideDone ? "tasks__item--hidden" : " "}`} >
               <button
                  className="tasks__button tasks__button--toggleDone "
                  onClick={() => props.toggleTaskDone(task.id)}
               >
                  {task.done ? "✔" : ""}
               </button>
               <span className={`tasks__content ${task.done ? " tasks__content--done" : ""}`} >
                  {task.content}
               </span >
               <button
                  className="tasks__button tasks__button--remove"
                  onClick={() => props.removeTask(task.id)}
               > 🗑️

               </button>
            </li>
         ))}
   </ul >
);


export default Tasks;