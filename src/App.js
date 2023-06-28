import Tasks from "./Tasks"
import Form from "./Form";
import Buttons from "./Buttons";
import Section from "./Section";
import Header from "./Header";
import Container from "./Container";


const tasks = [
  { id: 1, content: "Przejsc na react", done: true },
  { id: 2, content: "Zjeac obiad", done: true }
];

const hideDoneTasks = false;

function App() {
  return (
    <Container className="container">
      <Header title="Lista zadań" />
      <Section
        title="Dodaj nowe zadanie"
        body={<Form />}
      />

      <Section
        title="Lista zadań"
        body={<Tasks tasks={tasks} hideDoneTasks={hideDoneTasks} />}
        extraHeaderContent={<Buttons tasks={tasks} hideDoneTasks={hideDoneTasks} />}
      />


    </Container>
  );
}

export default App;
