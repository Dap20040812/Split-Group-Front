import styled from 'styled-components';

export const Container = styled.div`
display: flex;
flex-direction: column;
width: 100vw;
height: 100vh;
padding: 26px 10px 20px 10px;
box-sizing: border-box;
`;
export const BalanceContainer = styled.div`
background-color: #CEE166;
color: #465858;
display: flex;
width: 100%;
height: 100px;
border-radius: 25px;
align-items: center;
justify-content: center;
`;

export const HeaderContainer = styled.div`
height:84.5px;
width: 100%;
display: flex;
`;

export const SubTitleContainer = styled.div`
width: 100%;
height: ${props => props.height};
display: flex;
font-size: 1.2rem;
font-weight: 700;
align-items: flex-start;
color: #FFFFBA;
position: relative;
`;