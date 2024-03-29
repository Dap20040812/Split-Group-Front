import React from 'react';
import { NavbarContainer, NavbarItem } from '../common/Container';

const Navbar = (props) => {
  const { setNav, nav } = props;
  return (
    <NavbarContainer>
      <NavbarItem onClick={()=>setNav("ingress")} selected={nav==="ingress"}>Ingresos</NavbarItem>
      <NavbarItem onClick={()=>setNav("egress")} selected={nav==="egress"}>Gastos</NavbarItem>
      <NavbarItem onClick={()=>setNav("both")} selected={nav==="both"}>Ambos</NavbarItem>
      <NavbarItem style={{position:"absolute",right:"0", color:"#465858", backgroundColor:"#FFFFBA", width:"23px", height:"23px", display:"flex", alignItems:"center", justifyContent:"center", borderRadius:"999px"}}>+</NavbarItem>
    </NavbarContainer>
  );
};

export default Navbar;
