import { ButtonsWrapper } from "./styled";
import { Button } from "../Button/styled";
import { useSelector, useDispatch } from "react-redux";
import {
   toggleHideDone,
   setAllDone,
   selectAreTaskEmpty,
   selectIsEveryTaskDone,
   selectHideDone,
} from "../../tasksSlice";

const Buttons = () => {
   const areTaskEmpty = useSelector(selectAreTaskEmpty);
   const isEveryTaskDone = useSelector(selectIsEveryTaskDone);
   const hideDone = useSelector(selectHideDone);

   const dispatch = useDispatch();

   return (
      <ButtonsWrapper>
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
};
export default Buttons;