import React from 'react'
import { ItemContainer } from '../common/Container'

const Item = (props) => {
    const {color} = props;
    return(
        <ItemContainer color={color}>

        </ItemContainer>
    )
}

export default Item;