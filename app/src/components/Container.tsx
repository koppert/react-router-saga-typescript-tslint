import UserDetail from "app/src/components/UserDetail";
import UsersList from "app/src/components/UsersList";
import { AppState } from "app/src/states/reducer";
import { loadUsersRequest } from "app/src/states/users/usersActions";
import { UsersState } from "app/src/states/users/usersReducer";
import React, { useEffect } from "react";
import { connect } from "react-redux";
import { RouteComponentProps } from "react-router-dom";
import { bindActionCreators } from "redux";

interface IMatchProps {
    userId?: string;
}

interface IReduxProps extends RouteComponentProps<IMatchProps> {
    users: UsersState;
    loadUsersRequest: () => void;
}

const Container: React.FC<IReduxProps> = props => {

    const { users: { isFetching, isLoaded, collection }, match: { params: { userId } } } = props;

    useEffect(() => {
        if (!isLoaded && !isFetching)
            props.loadUsersRequest();
    });

    return (
        <div>
            {isFetching && <span>carregando... </span>}
            {isLoaded && !userId && <UsersList users={collection} />}
            {isLoaded && userId && <UserDetail user={collection[+userId - 1]} />}
        </div>
    );

};

export default connect(
    (state: AppState) => ({
        users: state.users,
    }), dispatch => bindActionCreators({
        loadUsersRequest,
    }, dispatch),
)(Container);
