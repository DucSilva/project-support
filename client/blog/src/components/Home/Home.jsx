import React from 'react';
import { Redirect } from 'react-router-dom';

const Home = (props) => {
    const { token, user } = props;

    if (!token) {
        return <Redirect to="/login" />;
    }

    return <div> {user.username}</div>;
}

export default Home;
