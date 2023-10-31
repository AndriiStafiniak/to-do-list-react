import { delay, select, takeLatest, takeEvery, call, put } from "redux-saga/effects";
import {
   fetchExampleTasks,
   fetchExampleTasksError,
   fetchExampleTasksSuccess,
   selectTasks
} from "./tasksSlice";
import { getExampleTasks } from "./getExampleTasks";
import { saveTasksInLocalStorage } from "./tasksLocalStorage";

function* fetchExampleTasksHandler() {
   try {
      yield delay(1000)
      const exampleTasks = yield call(getExampleTasks);
      yield put(fetchExampleTasksSuccess(exampleTasks));
   } catch (eroor) {
      yield put(fetchExampleTasksError());
      yield call(alert, "coś poszło nie tak")
   }
};
function* saveTasksInLocalStorageHandler() {
   const tasks = yield select(selectTasks);
   yield call(saveTasksInLocalStorage, tasks);
};

export function* tasksSaga() {
   yield takeLatest(fetchExampleTasks.type, fetchExampleTasksHandler);
   yield takeEvery("*", saveTasksInLocalStorageHandler);
};