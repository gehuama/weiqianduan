import React from 'react';
import { routeNode } from 'react-router5';
import { UserView, UserList, NotFound } from './components';

function Users(props) {
    const { previousRoute, route } = props;

    switch (route.name) {
        case 'users.list':
            return <UserList/>;
        case 'users.view':
            return <UserView/>;
        default:
            return <NotFound/>;
    };
}

export default routeNode('users')(Users);