import React, {useEffect, useState} from 'react'
import { ItemContainer, MovementContainer } from '../common/Container';
import Navbar from './Navbar';
import { getUserEgress, getUserIngress } from '../../services/TransactionServices';
import Item from './Item';

const Movements = () => {
    const [navState, setNavState] = useState("ingress");
    const [ingress, setIngress] = useState([]);
    const [egress, setEgress] = useState([]);
    const [total, setTotal] = useState([]);
    useEffect(() => {
        getUserIngress(3).then((response)=>{
            setIngress(response.data)
        })   
        getUserEgress(3).then((response)=>{
            setEgress(response.data)
        }) 
    },[])
    useEffect(()=>{
        setTotal(ingress.concat(egress))
    },[ingress, egress])
    useEffect(()=>{
        console.log("total",total)
        console.log(groupDataByDate(total))

    },[total])

    const groupDataByDate = (data) => {
        const groupedData = {};
        data.forEach((item) => {
          const date = item.creation_date.split('T')[0]; // Extrae la fecha sin la hora
          if (!groupedData[date]) {
            groupedData[date] = [];
          }
          groupedData[date].push(item);
        });
        return groupedData;
    };

    return(
        <MovementContainer>
            <Navbar setNav={setNavState} nav={navState}/>
            <ItemContainer color="#465858">

            </ItemContainer>
            {
                total&&total.map((item, index)=>{
                    return(
                        <Item key={index} color="#C5F1C6"/>
                    )
                })
            }
            <Item color="#C5F1C6"/>
        </MovementContainer>
    )
}

export default Movements;