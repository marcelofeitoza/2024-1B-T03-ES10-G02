import styled from "styled-components";

export const Container = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  height: 100vh;
  background-color: #f5f5f5;
`;

export const LoginForm = styled.div`
  padding: 40px;
  background: white;
  border-radius: 8px;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);
  display: flex;
  flex-direction: column;
  align-items: center;
`;
export const LogoStyle = styled.div`
  margin-bottom: 20px;
`;

export const Input = styled.input`
  font-size: 16px;
  padding: 10px;
  margin: 10px 0;
  width: 300px;
  display: block;
  border: 1px solid #ccc;
  border-radius: 4px;
`;

export const ErrorMessage = styled.div`
  color: red;
  margin-bottom: 10px;
`;

export const LoginButton = styled.button`
  background: linear-gradient(to right, #2a5dfb, #2484f5);
  color: white;
  font-size: 16px;
  border: none;
  border-radius: 4px;
  padding: 10px 20px;
  cursor: pointer;
  width: 100%;
  margin-top: 10px;
`;

export const LoginText = styled.p`
  margin-bottom: -5px;
  font-size: 12px;
  font-weight: 200;
  font-color: #5c5f62;
`;

export const TitleLogin = styled.h3`
  font-size: 14px;
  margin-bottom: 20px;
  margin-top: -10px;
`;
