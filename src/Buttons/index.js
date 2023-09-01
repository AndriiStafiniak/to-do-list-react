import { ButtonsWrapper, Button } from "./styled";


const Buttons = (props) => (
   <ButtonsWrapper>
      {props.tasks.length > 0 && (
         <>
            <Button
               onClick={props.toggleHideDone}
            >
               {props.hideDone ? "Pokaż" : "Ukryj"} ukończone
            </Button>
            <Button
               onClick={props.setAllDone}
               disabled={props.tasks.every(({ done }) => done)} >
               Ukończ wszystkie
            </Button>
         </>
      )}
   </ButtonsWrapper>
);


export default Buttons;