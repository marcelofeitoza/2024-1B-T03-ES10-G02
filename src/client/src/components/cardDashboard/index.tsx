import React, { useState } from "react";
import { Container, CardTitle, DetailText, CardButton } from "./style";

function CardDashboard() {

  const [title, setTitle] = useState("PagSeguros")
  const [qntMembros, setQntMembros] = useState("8")

  return (
    <Container>
      <CardTitle>{title}</CardTitle>
      <DetailText>{qntMembros} Membros</DetailText>
      <CardButton>Accessar Projeto</CardButton>
    </Container>
  );
}

export default CardDashboard;
