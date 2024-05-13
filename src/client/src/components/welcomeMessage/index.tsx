import React, { useState } from "react";
import {  Container, Greeting, Message } from "./style";


function WelcomeMessage() {

const [name, setName] = useState("Miguel")

  return (
    <Container>
    <Greeting>Olá, {name}</Greeting>
    <Message>Bem-vindo de volta à nossa plataforma! Estamos felizes em vê-lo novamente, e prontos para ajudá-lo a gerenciar seus processos de deploy com eficiência.</Message>
  </Container>
  );
}

export default WelcomeMessage;

