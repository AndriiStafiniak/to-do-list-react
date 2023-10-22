import { all } from "redux-saga/effects"
import { tasksSaga } from "./features/tasks/tasksSaga"

export function* rootSaga() {
   yield all(
      [
         tasksSaga(),
      ]
   )
}