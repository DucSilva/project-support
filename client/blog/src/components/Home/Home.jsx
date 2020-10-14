import React from 'react';
import { Redirect } from 'react-router-dom';

const Home = (props) => {
    const { token } = props;
    const tokenLocal = localStorage.getItem('token')
    if (!token && !tokenLocal) return <Redirect to='/login' />
    return (
        <h1>Home</h1>
    )
}

export default Home;
