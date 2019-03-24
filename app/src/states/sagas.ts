import { all, fork } from "redux-saga/effects";

import users from "app/src/states/users/usersSagas";

export default function* root() {
  yield all([fork(users)]);
}
