import React from 'react'
import styled from 'styled-components'
import { CreateGroupContainer } from '../common/Container'

function CreateGroup() {
  return (
    <CreateGroupContainer>
        <Header>
            <Title> Crear Grupo</Title>
        </Header>

    </CreateGroupContainer>
  )
}

const Header = styled.div`
    margin-top: 1em;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: flex-start;
`
const Title = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    font-size: 1em;
    color: #FFFFFF;
    font-weight: bold;
`


export default CreateGroup