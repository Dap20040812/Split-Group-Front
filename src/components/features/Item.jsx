import React from 'react'
import { IconContainer, ItemContainer, TextContainer } from '../common/Container'
import { FilledIcon } from '../common/Icon';

const Item = (props) => {
    const {color,title,hour,amount,type} = props;
    return(
        <ItemContainer color={color}>
            <IconContainer>
                <FilledIcon icon="mdi:cart" width="25"/>
            </IconContainer>
            <TextContainer>
                <span>{title}</span>
                <span style={{fontSize:"0.6rem"}}>{hour}</span>
            </TextContainer>
            {type==="ingress"?<span style={{color:"#9CB600", position:"absolute", right:"20px"}}>{amount}</span>:
            <span style={{color:"#9D0007", position:"absolute", right:"20px"}}>{amount}</span>}
            
        </ItemContainer>
    )
}

export default Item;