import User from "app/src/states/users/user";
import UsersActionTypes from "app/src/states/users/usersActionTypes";

interface IAction {
    type: UsersActionTypes;
    payload: string | User[];
}

const initialState = {
    collection: [] as User[],
    error: "",
    isFetching: false,
    isLoaded: false,
};

export type UsersState = typeof initialState;

export default function reducer(state = initialState, action: IAction): UsersState {
    switch (action.type) {
        case (UsersActionTypes.LOAD_USERS_REQUEST):
            return { ...state, isFetching: true };
        case (UsersActionTypes.LOAD_USERS_SUCCESS):
            return {
                ...state,
                isLoaded: true,
                isFetching: false,
                collection: action.payload as User[],
                error: "",
            };
        case (UsersActionTypes.LOAD_USERS_FAILURE):
            return { ...state, isFetching: false, error: action.payload as string };
        default:
            return { ...state };
    }
}
