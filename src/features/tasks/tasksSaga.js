import { select, takeLatest, takeEvery, call, put } from "redux-saga/effects";
import { fetchExampleTasks, selectTasks, setTasks } from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
   try {
      const exampleTasks = yield call(getExampleTasks);
      yield put(setTasks(exampleTasks))
   } catch (eroor) {
      yield call(alert, "coś poszło nie tak")
   }
};
function* saveTasksInLocalStorageHandler() {
   const tasks = yield select(selectTasks);
   yield call(saveTasksInLocalStorage, tasks)
}

export function* tasksSaga() {
   yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
   yield takeEvery("*", saveTasksInLocalStorageHandler)
}