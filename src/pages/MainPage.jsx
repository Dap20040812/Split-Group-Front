import React from 'react';
import { Container, HeaderContainer, SubTitleContainer } from '../components/common/Container';
import Balance from '../components/features/Balance';

const MainPage = () => { 
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
        </Container>
    )
}

export default MainPage;