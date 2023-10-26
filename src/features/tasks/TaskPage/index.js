
import Section from "../../../common/Section";
import Header from "../../../common/Header";
import { Container } from "../../../common/Container/styled";
import { useParams } from "react-router-dom";
import { useSelector } from "react-redux";
import { getTaskById } from "../tasksSlice";


function TaskPage() {
   const { id } = useParams();
   const task = useSelector(state => getTaskById(state, id));

   return (
      <Container>
         <Header title="Sczególy zadania" />
         <Section
            title={task ? task.content : "Nie znaliezono zadania 😢"}
            body={task ? (task.done ? "Zadanie ukończone ✅" : "Zadanie nie ukończone ❌") : " "}
         />
      </Container>
   );
};

export default TaskPage;
