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

export const ServicesContainer = styled.div`
display: flex;
width: 100%;
height: 85px;
flex-direction: row;
gap: 20px;
`;

export const ServiceBubbleContainer = styled.div`
width: 100%;
height: 100%;
display: flex;
align-items: center;
justify-content: flex-start;
flex-direction: column;
color: white;
font-size: 0.75rem;
`;


export const ServiceIconContainer = styled.div`
background-color: #FFFFBA;
border-radius: 999px;
height: 70px;
width: 70px;
display: flex;
justify-content: center;
align-items: center;
`
export const NavbarContainer = styled.div`
  display: flex;
  justify-content: flex-start;
  align-items: flex-end;
  height: 49px;
  width: 100%;
  gap: 34px;
  color: #FFFFBA;
`;

export const NavbarItem = styled.div`
  margin-right: 10px;
  cursor: pointer;
`;