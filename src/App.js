import Tasks from "./Tasks"
import Form from "./Form";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";
import { useState } from "react"




function App() {
  const [hideDone, setHideDone] = useState(false);
  const [tasks, setTasks] = useState([
    { id: 1, content: "Przejsc na react", done: true },
    { id: 2, content: "Zjeac obiad", done: false }
  ]);

  const toggleHideDone = () => {
    setHideDone(hideDone => !hideDone);
  };
  const removeTask = (id) => {
    setTasks(tasks => tasks.filter(task => task.id !== id));
  };
  const toggleTaskDone = (id) => {
    setTasks(tasks => tasks.map(task => {
      if (task.id === id) {
        return { ...task, done: !task.done }
      }
      return task;
    }));
  };

  const setAllDone = () => {
    setTasks(tasks => tasks.map(task => ({
      ...task,
      done: true,
    })));
  };

  const addNewTask = (content) => {
    setTasks(tasks => [
      ...tasks,
      {
        content,
        done: false,
        id: tasks.length ? tasks[tasks.length - 1].id + 1 : 1,
      },
    ]);
  };

  return (
    <Container className="container" >
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form addNewTask={addNewTask} />}
      />

      <Section
        title="Lista zadań"
        body={
          <Tasks tasks={tasks}
            hideDone={hideDone}
            removeTask={removeTask}
            toggleTaskDone={toggleTaskDone} />}

        extraHeaderContent=
        {<Buttons
          tasks={tasks}
          hideDone={hideDone}
          toggleHideDone={toggleHideDone}
          setAllDone={setAllDone}
        />}
      />
    </Container>
  );
};

export default App;
