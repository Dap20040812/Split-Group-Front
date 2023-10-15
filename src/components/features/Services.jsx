import React from 'react';
import { ServicesContainer } from '../common/Container';
import ServiceBubble from './ServiceBubble';

const Services = (props) => {
    const {selected} = props;
    return(
        <ServicesContainer>

            <ServiceBubble icon="ph:wallet-fill" text="Movimientos" color={("movements"===selected || ""===selected)?"#BCDA00":"#465858"} location="movements"/>
            <ServiceBubble icon="material-symbols:bar-chart" text="Análisis" color={("analysis"===selected)?"#BCDA00":"#465858"} location="analysis"/>
            <ServiceBubble icon="clarity:group-solid" text="Grupos" color={("groups"===selected)?"#BCDA00":"#465858"} location="groups"/>
            <ServiceBubble icon="ri:shapes-fill" text="Categorias" color={("categories"===selected)?"#BCDA00":"#465858"} location="categories"/>
        </ServicesContainer>
    )
}

export default Services;