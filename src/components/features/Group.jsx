import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { GroupContainer } from '../common/Container'
import { getGroups } from '../../services/GroupServie'
import getUser from "../../query/loginClaro";
import { Link } from 'react-router-dom';

function Group() {

    const [groups, setGroups] = useState([])

    useEffect(() => {
        const setUser = async () => {
            await getUser().then((response) => {
                getGroups(response[0].id).then((response)=>{
                    setGroups(response.data)
                })
            })
        }
        setUser();
    }, [])

  return (
    <GroupContainer>
        <Header>
            <Title> Mis Grupos</Title>
            <Link to={`/creategroup`}>
                <CreateButton >Crear Grupo</CreateButton>
            </Link>
        </Header>
        <Groups>
            {groups.map((group) => {
                return(
                    <GroupCard>
                        <div>{group.name}</div>
                        <div>{group.balance}</div>
                    </GroupCard>
                )
            })}
        </Groups>

    </GroupContainer>
  )
}

export default Group

const Header = styled.div`
    margin-top: 1em;
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    Link{
        text-decoration: none;
        align-items: center;
        justify-content: center;
        width: 100%;
    }
`

const Title = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    font-size: 1em;
    color: #FFFFFF;
    font-weight: bold;
`

const CreateButton = styled.div`
    display: flex;
    width: 8em;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    font-weight: bold;
    color: #FFFFFF;
    background-color: #253030;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    &:hover{
        cursor: pointer;
        background-color: #698383;
    }
`

const Groups = styled.div`
    display: flex;
    felx-direction: column;
    gap: 2em;
`

const GroupCard = styled.div`
    display: flex;
    width: 100%;
    align-items: center;
    justify-content: space-between;
    background-color: #253030;
    border: 2px solid white;
    color: #ffffff;
    border-radius: 10px;
    padding: 10px;
    margin: 10px;
    &:hover{
        cursor: pointer;
        background-color: #698383;
    }
`
