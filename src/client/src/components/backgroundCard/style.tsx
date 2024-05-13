import styled from "styled-components";

export const Container = styled.div`
  border: 1px solid #ccc; // Borda cinza claro
  padding: 20px; // Espaçamento interno
  margin: 20px 0; // Margem para separar dos outros conteúdos
  border-radius: 5px; // Borda arredondada
  box-shadow: 0 2px 5px rgba(0,0,0,0.1); // Sombra leve para dar profundidade
  background-color: #fff; // Cor de fundo branca
  display: flex;
  flex-direction: column;
`;

export const ContainerCards = styled.div`
  display: flex;
  flex-direction: row;
`;


export const Title = styled.div`
  
  
`;

export const LastProjects = styled.h1`
  font-size: 18px; // Tamanho de fonte maior para a saudação
  color: #333; // Cor de fonte escura para contraste
  margin: 0 0 10px 0; // Margem para separar do texto abaixo
`;

export const Message = styled.p`
  margin: 0; // Sem margem externa para manter tudo compacto
  color: #666; // Cor de fonte mais suave para o texto de mensagem
  font-size: 12px;
`;


export const Separator = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  
`;

export const AddButton = styled.button`
  padding: 8px 8px; 
  border-radius: 4px; 
  border: none; 
  width: 160px;
  background-color: rgba(214, 224, 234, 0.35); 
  color: white; 
  cursor: pointer;
  font-size: 14px;
  color:  #00458E; 
  align-self: center;
`;