import styled from 'styled-components';


export const RegisterWrapper = styled.div`
    padding: 100px;
    background-image: url('./register.jpg');
    min-height: 100vh;
    h3{
        text-align: center;
        margin-bottom: 50px;
    }
`;

export const FormRegister = styled.div`
    display:flex;
    justify-content: center;
    align-items: center;
    .register-form{
        max-width: 300px;
    }

    .register-form-button{
        width: 100%;
        margin-bottom: 10px;
    }
`;