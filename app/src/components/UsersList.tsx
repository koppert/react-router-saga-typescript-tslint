import User from "app/src/states/users/user";
import React from "react";
import { Link } from "react-router-dom";

interface IProps {
    users: User[];
}

const UsersList: React.FC<IProps> = props => {
    const {users} = props;
    return (
        <ul>
            {users.map(x => <li key={x.id}><Link to={`/${x.id}`}>{x.name}</Link></li>)}
        </ul>
    );
};

export default UsersList;
