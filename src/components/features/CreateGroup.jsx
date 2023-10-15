import React, { useState } from 'react'
import styled from 'styled-components'
import { CreateGroupContainer } from '../common/Container'
import { useNavigate } from 'react-router-dom'
import getUser from '../../query/loginClaro'
import { createGroups } from '../../services/GroupServie'

function CreateGroup() {

    const [name,setName] = useState("")
    const history = useNavigate()


    const setNameHandler = (e) => {
        setName(e.target.value)
    }
    const summitHandler = async(e) => {
        e.preventDefault()
        await getUser().then((response) => {
            createGroups(response[0].id, name)
        })
        setName("")
        history("/groups")  
    }

  return (
    <CreateGroupContainer>
        <Header>
            <Title>Crear Grupo</Title>
        </Header>
        <Form onSubmit={summitHandler}>
            <Input placeholder="Nombre del grupo" value={name} onChange={e => setNameHandler(e)}/>
            <SummitButton type="submit">Crear</SummitButton>
        </Form>

    </CreateGroupContainer>
  )
}

const Header = styled.div`
    margin-top: 2em;
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

const Form = styled.form`
    margin-top: 1em;
    padding: 1em;
    display: flex;
    flex-direction: column;
    align-items: center;
    border-radius: 10px;
    border: 1px solid #FFFFFF;
`
const Input = styled.input`
    width: 15em;
    height: 2em;
    border: 2px solid #FFFFFF;
    border-radius: 10px;
    background-color: #253030;
    border: none;
    color: #FFFFFF;
    font-size: 1em;
    font-weight: bold;
    padding-left: 1em;
    ::placeholder{
        color: #b3b1b1;
    }
`

const SummitButton = styled.button`
    display: flex;
    width: 8em;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    font-weight: bold;
    color: #FFFFFF;
    background-color: #698383;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    &:hover{
        cursor: pointer;
        background-color: #253030;
    }
`

export default CreateGroup