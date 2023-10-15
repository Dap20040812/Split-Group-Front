import React from 'react';
import { Container, HeaderContainer, SubTitleContainer } from '../components/common/Container';
import Balance from '../components/features/Balance';
import Services from '../components/features/Services';
import { useLocation } from 'react-router';
import Movements from '../components/features/Movements';
import Group from '../components/features/Group';


const MainPage = () => { 
    const location = useLocation();
    return(
        <Container>
            <HeaderContainer/>
            <SubTitleContainer height="35px">
                Saldo
            </SubTitleContainer>
            <Balance/>
            <SubTitleContainer height="66px">
                <span style={{position:"absolute",bottom:"10px"}}>Servicios</span>
            </SubTitleContainer>
            <Services selected={location.pathname.split("/")[1]}/>
            {location.pathname.split("/")[1]==="movements" ? <Movements/> : null}
            {location.pathname.split("/")[1]==="groups" ? <Group/> : null}
            
        </Container>
    )
}

export default MainPage;