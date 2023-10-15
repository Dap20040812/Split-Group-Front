import React, { useState, useEffect } from 'react'
import { MovementContainer } from '../common/Container'
import { getCategories } from '../../services/CategoryService';
import Item from './Item';
import { styled } from 'styled-components';


const Categories = () => {

    const [categories, setCategories] = useState([]);

    useEffect(() => {
        getCategories().then((response) => {
            setCategories(response.data)
        })
    },[])
    return(
        <MovementContainer>
            <Header>
                <Title>Categorías</Title>
                <CreateButton >Crear Categoria</CreateButton>
            </Header>

            {categories&&categories.map((category)=>(
                <Item color="#C5F1C6" title={category.name}/>
            ))}
        </MovementContainer>
    )
}

export default Categories;

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
