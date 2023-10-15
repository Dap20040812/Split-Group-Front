import React from 'react'
import { ServiceBubbleContainer, ServiceIconContainer } from '../common/Container'
import { ServiceIcon } from '../common/Icon';

const ServiceBubble = (props) => {
    const {icon,text, color} = props;
    return(
        <ServiceBubbleContainer>
            <ServiceIconContainer>
                <ServiceIcon icon={icon} color={color} width="50"/>
            </ServiceIconContainer>
            {text&&<span>{text}</span>}
        </ServiceBubbleContainer>
    )
}

export default ServiceBubble;