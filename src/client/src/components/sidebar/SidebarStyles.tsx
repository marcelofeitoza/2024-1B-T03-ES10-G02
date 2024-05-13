import styled from "styled-components";

export const SidebarContainer = styled.div`
  width: 213px;
  height: 100vh;
  background-color: #F9F9F9;
  color: white; 
  display: flex;
  flex-direction: column;
  padding: 70px 20px 20px 20px;
  align-items: center;
`;

export const SidebarSection = styled.div`
  margin-bottom: 8px;
`;

export const LogoStyle = styled.div`
  margin-bottom: 20px;
`;

export const IconWrapper = styled.span`
  margin: 2px 8px 0 5px;
`;

interface SidebarButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  selected?: boolean;
}

export const SidebarButton = styled.button<SidebarButtonProps>`
  margin: 5px auto;
  padding: 10px;
  background-color: ${({ selected }) => selected ? '#E6E6E6' : '#F9F9F9'};
  color: ${({ selected }) => selected ? '#000000' : '#969696'};
  border: none;
  border-radius: 10px;
  cursor: pointer;
  width: 208px; 
  height: 40px; 
  text-align: left;
  display: flex;
  align-items: center;
  justify-content: flex-start;
`;

SidebarButton.defaultProps = {
  selected: false,
};