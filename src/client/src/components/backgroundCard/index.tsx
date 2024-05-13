import React, { useState } from "react";
import { AddButton, Container, ContainerCards, Separator, Title, LastProjects, Message} from "./style";
import CardDashboard from "..//cardDashboard";

function BackgroundCards() {

  return (
    <Container>
    <Separator>
      <Title>
        <LastProjects>Últimos Projetos</LastProjects>
        <Message>Projetos em que sou colaborador</Message>
      </Title>
    <AddButton>+ Adicionar Projeto</AddButton>
    </Separator>
    <ContainerCards>
        <CardDashboard></CardDashboard>
        <CardDashboard></CardDashboard>
    </ContainerCards>
    </Container>
  );
}

export default BackgroundCards;
