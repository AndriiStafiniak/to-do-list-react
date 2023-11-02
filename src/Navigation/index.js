import { toAuthor, toTasks } from "../routes";
import { List, Item, StyledNavLink } from "./styled";

const Navigatin = () => {
   return (
      <nav>
         <List>
            <Item>
               <StyledNavLink to={toTasks}>
                  Zadania
               </StyledNavLink>
            </Item>
            <Item>
               <StyledNavLink to={toAuthor}>
                  O autorze
               </StyledNavLink>
            </Item>
         </List>
      </nav>
   )
};

export default Navigatin;