import TasksPage from "./features/tasks/TasksPage";
import TaskPage from "./features/tasks/TaskPage";
import AuthorPage from "./features/AuthorPage";
import { HashRouter, Switch, Route, Redirect } from "react-router-dom";
import { toTask, toAuthor, toTasks } from "./routes";
import Navigatin from "./Navigation";

const App = () => (
   <HashRouter>
      <Navigatin />
      <Switch>
         <Route path={toTask()}>
            <TaskPage />
         </Route>
         <Route path={toTasks()}>
            <TasksPage />
         </Route>
         <Route path={toAuthor()}>
            <AuthorPage />
         </Route>
         <Route>
            <Redirect to={toTasks()} />
         </Route>
      </Switch>
   </HashRouter>
);

export default App;