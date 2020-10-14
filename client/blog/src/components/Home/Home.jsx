import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../Header/Header';

const Home = (props) => {
    const { user, token } = props;
    const tokenLocal = localStorage.getItem('token')
    if (!token && !tokenLocal) return <Redirect to='/login' />
    return (
        <Header />
    )
}

export default Home;
