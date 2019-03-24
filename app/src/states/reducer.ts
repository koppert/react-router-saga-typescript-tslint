
import users from "app/src/states/users/usersReducer";
import { combineReducers } from "redux";

const reducers = combineReducers({
    users,
});

export default reducers;

export type AppState = ReturnType<typeof reducers>;
