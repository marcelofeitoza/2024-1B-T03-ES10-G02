import React, { useState } from "react";
import {Container, NavBar} from "./style";
import CardDashboard from "..//cardDashboard";

function NavBarComponent() {

  return (
    <Container>
     <NavBar>
        <div>Menu</div>
        <div>Miguel Soares</div>
    </NavBar>
    </Container>
  );
}

export default NavBarComponent;
