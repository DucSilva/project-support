import React from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../Header/Header'


const Home = (props) => {
    const { token } = props;
    const tokenLocal = localStorage.getItem('token')
    if (!token && !tokenLocal) return <Redirect to='/login' />
    return (
        <Header {...props} />
    )
}

export default Home;
