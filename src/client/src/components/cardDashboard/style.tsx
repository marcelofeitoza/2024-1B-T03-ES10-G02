import styled from "styled-components";

export const Container = styled.div`
width: 150px;
padding: 20px; 
background: #fff; 
border-radius: 8px; 
box-shadow: 0 4px 8px rgba(0,0,0,0.1); 
text-align: center; 
margin: 10px; 
border: 0.5px solid #ccc; // Borda cinza claro
`;

export const CardTitle = styled.h2`
  font-size: 14px; 
  color: #333; 
  margin-bottom: 10px; 
`;

export const DetailText = styled.p`
  font-size: 10px; 
  color: #666; 
  margin-bottom: 10px; 
`;

export const CardButton = styled.button`
  padding: 5px 10px; 
  border-radius: 4px; 
  border: none; 
  background-color: #D6E0EA; 
  color: #00458E; 
  cursor: pointer;
  font-size: 10px;

  &:hover {
    background-color: #D6E0EA; 
  }
`;

