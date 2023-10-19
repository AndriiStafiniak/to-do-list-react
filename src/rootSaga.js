import { all } from "redux-saga/effects"
import { wathFethExampleTasks } from "./features/tasks/tasksSaga"

export function* rootSaga() {
   yield all(
      [
         wathFethExampleTasks(),
      ]
   )
}