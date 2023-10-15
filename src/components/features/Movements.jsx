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
    const [formatedTotal, setFormatedTotal] = useState([]);
    const [groupedData, setGroupedData] = useState(null);
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
        setFormatedTotal(Object.keys(groupDataByDate(total)))
        setGroupedData(groupDataByDate(total))
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

            {
                formatedTotal&&formatedTotal.map((date)=>{
                    return(
                        <>
                            <ItemContainer color="#465858" style={{padding:"0", color:"#FFFFBA", fontSize:"0.9rem"}}>
                                {new Date(date).getDate() + " de " + new Date(date).toLocaleString('default', { month: 'long' }) + " de " + new Date(date).getFullYear()}
                            </ItemContainer>
                            <>
                            {
                                groupedData[date].filter((item) => navState === "both" || item.type === navState).map((item)=>(
                                    <Item color="#C5F1C6" title={item.title} hour={item.creation_date.split(":")[0].split("T")[1]+":"+item.creation_date.split(":")[1]} amount={"$ "+item.amount} type={item.type}/>
                                ))
                            }
                            
                            </>
                        </>
                        

                    )
                })
            }
        </MovementContainer>
    )
}

export default Movements;