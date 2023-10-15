import React from 'react'
import { MovementContainer } from '../common/Container'

const Analysis = () => {
    return(
        <MovementContainer style={{display:"flex", alignItems:"center"}}>
            <h4 style={{color:"#FFFFA7"}}>Gastos e Ingresos diarios por Categoría</h4>
            <img alt="1" src='1.png' height="300px"/>
            <h4 style={{color:"#FFFFA7"}}>Volumen de Gastos Mensuales por Categoía</h4>
            <img alt="1" src='2.png' height="300px"/>
        </MovementContainer>
    )
}

export default Analysis;