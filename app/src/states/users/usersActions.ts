import UsersActionTypes from "app/src/states/users/usersActionTypes";

export const loadUsersRequest = () => ({
    type: UsersActionTypes.LOAD_USERS_REQUEST,
});

export const loadUsersSuccess = (data: object[]) => ({
    type: UsersActionTypes.LOAD_USERS_SUCCESS,
    payload: data,
});

export const loadUsersFailure = (err: string) => ({
    type: UsersActionTypes.LOAD_USERS_FAILURE,
    payload: err,
});
