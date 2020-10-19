import React, { useEffect } from 'react';
import { Redirect } from 'react-router-dom';
import Header from '../Header/Header';
import { getAllPosts } from '../../api/post'
import Post from '../../container/Post';


const Home = (props) => {
    const { token } = props;
    useEffect(() => {
        getAllPosts(token)
    }, [])
    const tokenLocal = localStorage.getItem('token')
    if (!token && !tokenLocal) return <Redirect to='/login' />
    return (
        <>
            <Header {...props} />
            <Post />
        </>
    )
}

export default Home;
