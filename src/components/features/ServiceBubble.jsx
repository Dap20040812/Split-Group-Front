import React from 'react'
import { ServiceBubbleContainer, ServiceIconContainer } from '../common/Container'
import { ServiceIcon } from '../common/Icon';
import { Link } from 'react-router-dom';

const ServiceBubble = (props) => {
    const {icon,text, color, location} = props;
    return(
        <ServiceBubbleContainer>
            <Link to={location}>
                <ServiceIconContainer>
                    <ServiceIcon icon={icon} color={color} width="50"/>
                </ServiceIconContainer>
            </Link>
            {text&&<span>{text}</span>}
        </ServiceBubbleContainer>
    )
}

export default ServiceBubble;