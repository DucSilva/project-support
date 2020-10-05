import styled from 'styled-components';


export const LoginWrapper = styled.div`
    background-image: url('./login.jpg');
    min-height: 100vh;
    padding: 100px;
    h3{
        text-align: center;
        margin-bottom: 50px;
    }
`;

export const LoginForm = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    .login-form{
        max-width: 300px;
    }

    .login-form-button{
        width: 100%;
        margin-bottom: 10px;
    }
`;