import { takeEvery, call, put } from "redux-saga/effects";
import { fetchExampleTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";

function* fetchExampleTasksHandler() {
   try {
      const exampleTasks = yield call(getExampleTasks);
      yield put(setTasks(exampleTasks))
   } catch (eroor) {
      yield call(alert, "coś poszło nie tak")
   }
};

export function* wathFethExampleTasks() {
   yield takeEvery(fetchExampleTasks.type, fetchExampleTasksHandler)
}