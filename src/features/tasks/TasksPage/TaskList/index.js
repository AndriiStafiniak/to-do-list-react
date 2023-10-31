import { toTask } from "../../../../routes";
import { selectHideDone, selectTasksByQuery, toggleTaskDone, removeTask } from "../../tasksSlice";
import { useQueryParameter } from "../queryParameters";
import { StyledLink, List, Item, Content, RemoveButton, ToggleDoneButton } from "./styled"
import { useSelector, useDispatch } from "react-redux";



const TaskList = () => {

   const query = useQueryParameter("szukaj")

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
                     <StyledLink to={toTask({ id: task.id })}>{task.content}</StyledLink>
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