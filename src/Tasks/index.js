import { List, Item, Content, TaskButton } from "./styled"

const Tasks = (props) => (
   <List>
      {props.tasks.map(
         task => (
            < Item
               key={task.id}
               hidden={task.done && props.hideDone}
            >
               <TaskButton
                  toggleDone
                  onClick={() => props.toggleTaskDone(task.id)}
               >
                  {task.done ? "✔" : ""}
               </TaskButton>
               <Content done={task.done}>
                  {task.content}
               </Content >
               <TaskButton
                  remove={true}
                  onClick={() => props.removeTask(task.id)}
               >
                  🗑️
               </TaskButton>
            </Item>
         ))}
   </List >
);


export default Tasks;