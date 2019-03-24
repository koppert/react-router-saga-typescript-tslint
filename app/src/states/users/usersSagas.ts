import { all, call, put, takeLatest } from "@redux-saga/core/effects";
import { loadUsersFailure, loadUsersSuccess } from "app/src/states/users/usersActions";
import UsersActionTypes from "app/src/states/users/usersActionTypes";
import axios from "axios";

const baseUrl = "https://jsonplaceholder.typicode.com";

function* requestUsers() {
    try {
        const response = yield call(() => axios.get(`${baseUrl}/users`));
        yield put(loadUsersSuccess(response.data));
    } catch (e) {
        yield put(loadUsersFailure(e.message));
    }
}

function* watchUsersRequest() {
    yield takeLatest(UsersActionTypes.LOAD_USERS_REQUEST, requestUsers);
}

export default function* root() {
    yield all([watchUsersRequest()]);
}
