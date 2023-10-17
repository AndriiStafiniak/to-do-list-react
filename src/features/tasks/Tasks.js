import TaskList from "./TaskList";
import Buttons from "./Buttons";
import Form from "./Form";
import Section from "../../common/Section";
import Header from "../../common/Header";
import { Container } from "../../common/Container/styled";
import useTasksManager from "../../useTasksManager";

function Tasks() {

  const {
    tasks,
    addNewTask,
    setAllDone,
    toggleTaskDone,
    removeTask,
    toggleHideDone,
    hideDone,
  } = useTasksManager();

  return (
    <Container>
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        body={
          <TaskList
            tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone}
          />
        }
        extraHeaderContent={
          <Buttons
            tasks={tasks}
            hideDone={hideDone}
            toggleHideDone={toggleHideDone}
            setAllDone={setAllDone}
          />
        }
      />
    </Container>
  );
};

export default Tasks;
