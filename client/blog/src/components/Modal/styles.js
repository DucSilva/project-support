import styled from 'styled-components';


export const ButtonFooterWrapper = styled.div`
    display: flex;
    justify-content: ${(props => props.isPost ? 'start' : 'flex-end')};
    > button:first-child{
        margin-right: 10px;
    }
    
`;
