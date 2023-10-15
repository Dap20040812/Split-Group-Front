import React from 'react';
import { NavbarContainer, NavbarItem } from '../common/Container';

const Navbar = () => {
  return (
    <NavbarContainer>
      <NavbarItem>Ingresos</NavbarItem>
      <NavbarItem>Gastos</NavbarItem>
      <NavbarItem>Ambos</NavbarItem>
      <NavbarItem style={{position:"absolute",right:"0", color:"#465858", backgroundColor:"#FFFFBA", width:"23px", height:"23px", display:"flex", alignItems:"center", justifyContent:"center", borderRadius:"999px"}}>+</NavbarItem>
    </NavbarContainer>
  );
};

export default Navbar;
