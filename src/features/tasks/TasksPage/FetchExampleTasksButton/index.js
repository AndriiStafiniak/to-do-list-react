import { useDispatch, useSelector } from "react-redux";
import { fetchExampleTasks, selectLoading } from "../../tasksSlice";
import { Button } from "../Button/styled";

const FetchExampleTasksButton = () => {
   const dispatch = useDispatch();
   const loading = useSelector(selectLoading);
   return (
      <Button disabled={loading} onClick={() => dispatch(fetchExampleTasks())}>
         {loading ? "Ładowanie..." : " Pobierz przykładowe zadania"}
      </Button>
   )
};

export default FetchExampleTasksButton;