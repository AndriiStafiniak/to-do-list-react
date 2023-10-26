import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/AuthorPage";
import { HashRouter, Link, Switch, Route, Redirect } from "react-router-dom";

const App = () => (
   <HashRouter>
      <nav>
         <ul>
            <li>
               <Link to="/zadania">
                  zadania
               </Link>
            </li>
            <li>
               <Link to="/Autor">
                  O autorze
               </Link>
            </li>

         </ul>
         <Switch>
            <Route path="/zadania/:id">
               <TaskPage />
            </Route>
            <Route path="/zadania">
               <TasksPage />
            </Route>
            <Route path="/autor">
               <AuthorPage />
            </Route>
            <Route path="/">
               <Redirect to="/zadania" />
            </Route>
         </Switch>
      </nav>
   </HashRouter>
)

export default App;