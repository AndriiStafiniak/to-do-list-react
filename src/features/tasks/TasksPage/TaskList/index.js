import { selectHideDone, selectTasksByQuery, toggleTaskDone, removeTask } from "../../tasksSlice";
import { List, Item, Content, RemoveButton, ToggleDoneButton } from "./styled"
import { useSelector, useDispatch } from "react-redux";
import { Link, useLocation } from "react-router-dom"


const TaskList = () => {
   const location = useLocation();
   const query = (new URLSearchParams(location.search)).get("szukaj");

   const tasks = useSelector(state => selectTasksByQuery(state, query));
   const hideDone = useSelector(selectHideDone);

   const dispatch = useDispatch();

   return (
      <List>
         {tasks.map(
            task => (
               < Item
                  key={task.id}
                  hidden={task.done && hideDone}
               >
                  <ToggleDoneButton
                     onClick={() => dispatch(toggleTaskDone(task.id))}
                  >
                     {task.done ? "✔" : ""}
                  </ToggleDoneButton>
                  <Content done={task.done}>
                     <Link to={`/zadania/${task.id}`}>{task.content}</Link>
                  </Content >
                  <RemoveButton
                     onClick={() => dispatch(removeTask(task.id))}
                  >
                     🗑️
                  </RemoveButton>
               </Item>
            ))}
      </List >
   );
}

export default TaskList;