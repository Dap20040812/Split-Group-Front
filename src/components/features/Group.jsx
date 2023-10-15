import React, {useEffect, useState} from 'react'
import styled from 'styled-components'
import { GroupContainer } from '../common/Container'
import { addUserGroups, getGroups, getUserGroups } from '../../services/GroupServie'
import getUser from "../../query/loginClaro";
import {Link } from 'react-router-dom';
import { async } from 'q';
import { createDebt, getGroupDeb } from '../../services/DebtService';

function Group() {

    const [groups, setGroups] = useState([])
    const [isOpen, setIsOpen] = useState(false)
    const [selectedGroup, setSelectedGroup] = useState()
    const [members,setMembers] = useState()
    const [addUserOpen,setAddUserOpen] = useState(false)
    const [memberId,setMemberId] = useState()
    const [addDebtOpen,setAddDebtOpen] = useState(false)
    const [amount, setAmount] = useState()
    const [debt, setDebt] = useState()
    const enterGroup = async(group) => {
        setSelectedGroup(group)
        await getUserGroups(group.id).then((response)=>{
                setMembers(response.data)

                getGroupDeb(group.id).then((response)=>{
                    setDebt(response.data)
                    setIsOpen(true)

                })
            })
    }

    const putMemberId= (e) =>{
        setMemberId(e.target.value)
    }

    const submitAddUserHandler = async()=>{
        await addUserGroups(memberId,selectedGroup.id).then(()=>{
            setAddDebtOpen(false)
        })
    }
    const submitAddDebtHandler = async()=>{
        await createDebt(amount,memberId,selectedGroup.id).then(()=>{
            setAddUserOpen(false)
        })
    }

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
        {!isOpen ? (<>
            <Header>
            <Title> Mis Grupos</Title>
            <Link to={`/creategroup`}>
                <CreateButton >Crear Grupo</CreateButton>
            </Link>
            </Header>
            <Groups>
                {groups.map((group) => {
                    return(
                        <GroupCard onClick={() => enterGroup(group)}>
                            <div>{group.name}</div>
                            <div>{group.balance}</div>
                        </GroupCard>
                    )
                })}
            </Groups>
        </>):<>
            {selectedGroup &&
            <>
            {addUserOpen ? (
            <>
                <Header>
                    <Title2>Añadir Usuario</Title2>
                </Header>
                <Form onSubmit={submitAddUserHandler}>
                    <Input placeholder='user ID' value={memberId} onChange={e => putMemberId(e)}/>
                    <SummitButton>Añadir</SummitButton>
                </Form>
            </>):<>
                {addDebtOpen ? (
                <>
                <Header>
                    <Title2>Añadir Deuda</Title2>
                </Header>
                <Form onSubmit={submitAddDebtHandler}>
                    <Input value={amount} placeholder='Monto' onChange={(e) => setAmount(e.target.value)}/>
                    <Select onChange={e => putMemberId(e)}>
                        {members && (
                        members.map((member) => (
                            <option value={member}>{member.name}</option>
                        ))
                        )}
                    </Select>
                    <SummitButton type='submit'>Añadir</SummitButton>
                </Form>
                </>):
                <>
                    <Header>
                    <Title>Grupo : {selectedGroup.name}</Title>
                    </Header>
                    <Title2>Miembros</Title2>
                    <Members>
                        {members.map((member) => {
                            return(
                                <Member>
                                    <div>{member.name}</div>
                                </Member>
                            )
                        })}
                    </Members>
                    <AddMember onClick={() => setAddUserOpen(true)}>+ Añadir</AddMember>
                    <Title2>Deudas</Title2>
                    <Members>
                        {debt.map((debt) => {
                            return(
                                <Member>
                                    <div>{debt.amount}</div>
                                </Member>
                            )
                        })}
                    </Members>
                    <AddMember onClick={() => setAddDebtOpen(true)}>+ Añadir</AddMember>
                    </>}
                </>
                }
            </>}
            
            
        </>}
        

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
const Title2 = styled.div`
    display: flex;
    width: 100%;
    margin-top: 1em;
    margin-bottom: 1em;
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
    flex-direction: column;
    gap: 0.5em;
    align-items: center;
`

const GroupCard = styled.div`
    display: flex;
    width: 17em;
    align-items: center;
    justify-content: center;
    font-size: 1em;
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
const Members = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0.4em;
`
const Member = styled.div`
    display: flex;
    align-items: center;
    width: 100%;
    justify-content: center;
    font-size: 1em;
    color: white;
    border: 2px solid white;
    border-radius: 10px;
`

const AddMember = styled.div`
    display: flex;
    margin-top: 1em;
    border-radius: 10px;
    align-items: center;
    border: 2px solid white;
    width: max-content;
    padding: 0.2em;
    align-items: center;
    justify-content: center;
    font-size: 1em;
    color: white;
    &:hover{
        color:#698383;
    }
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
const Select = styled.select`
    margin-top: 1em;
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