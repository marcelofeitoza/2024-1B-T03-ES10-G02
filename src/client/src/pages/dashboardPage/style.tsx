import styled from "styled-components";

export const MainContainer = styled.div`
  display: flex;
`;

export const ContentContainer = styled.div`
  flex-grow: 1; 
  display: flex;
  flex-direction: column; 
`;

export const PageContent = styled.div`
  flex-grow: 1; 
  padding: 20px;
`;

export const CardsBackground = styled.div`
  border: 1px solid #ccc; // Borda cinza claro
  padding: 20px; // Espaçamento interno
  margin: 20px 0; // Margem para separar dos outros conteúdos
  border-radius: 5px; // Borda arredondada
  box-shadow: 0 2px 5px rgba(0,0,0,0.1); // Sombra leve para dar profundidade
  background-color: #fff; // Cor de fundo branca
  display: flex;
  flex-direction: row;
`;