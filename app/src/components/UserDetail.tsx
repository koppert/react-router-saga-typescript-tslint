import User from "app/src/states/users/user";
import idx from "idx";
import React from "react";

interface IProps {
    user: User;
}

const UserDetail: React.FC<IProps> = ({ user }) => {

    if (user === undefined)
        return <div>Usuário inexistente</div>;

    return (
        <div>
            <dl>
                <dt>Nome</dt>
                <dd>{user.name}</dd>
            </dl>
            <dl>
                <dt>E-mail</dt>
                <dd>{user.email}</dd>
            </dl>
            <dl>
                <dt>Site</dt>
                <dd>{user.website}</dd>
            </dl>
            <dl>
                <dt>Endereço</dt>
                <dd>{idx(user, x => x.address.city)}</dd>
            </dl>
        </div>
    );
};

export default UserDetail;
