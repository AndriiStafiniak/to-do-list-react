import { ButtonsWrapper, Button } from "./styled";
import { useSelector, useDispatch } from "react-redux";
import {
   toggleHideDone,
   setAllDone,
   selectAreTaskEmpty,
   selectIsEveryTaskDone,
   selectHideDone,
   fetchExampleTasks
} from "../tasksSlice";

const Buttons = () => {
   const areTaskEmpty = useSelector(selectAreTaskEmpty);
   const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
   const hideDone = useSelector(selectHideDone);

   const dispatch = useDispatch();

   return (
      <ButtonsWrapper>
         <Button onClick={() => dispatch(fetchExampleTasks())}>
            Pobierz przykladowe zadania
         </Button>
         {!areTaskEmpty && (
            <>
               <Button
                  onClick={() => dispatch(toggleHideDone())}
               >
                  {hideDone ? "Pokaż" : "Ukryj"} ukończone
               </Button>
               <Button
                  onClick={() => dispatch(setAllDone())}
                  disabled={isEveryTaskDone} >
                  Ukończ wszystkie
               </Button>
            </>
         )}
      </ButtonsWrapper>
   );

}
export default Buttons;