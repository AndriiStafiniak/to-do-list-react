import { ButtonsWrapper, Button } from "./styled";

const Buttons = ({ tasks, toggleHideDone, hideDone, setAllDone }) => (
   <ButtonsWrapper>
      {tasks.length > 0 && (
         <>
            <Button
               onClick={toggleHideDone}
            >
               {hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
               onClick={setAllDone}
               disabled={tasks.every(({ done }) => done)} >
               Ukończ wszystkie
            </Button>
         </>
      )}
   </ButtonsWrapper>
);

export default Buttons;