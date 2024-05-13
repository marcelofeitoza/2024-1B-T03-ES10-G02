import { useState } from 'react';
import { SidebarContainer, SidebarSection, LogoStyle, SidebarButton, IconWrapper } from './SidebarStyles';
import LogoDeployBuddy from "../../assets/Logo";
import House from '../../assets/House';
import UsersGroup from '../../assets/UsersGroup';
import Slider from '../../assets/Slider';

const Sidebar = () => {
    const [selectedButton, setSelectedButton] = useState(null);

    const handleButtonClick = (buttonName: any) => {
        setSelectedButton(buttonName);
    };

    return (
        <SidebarContainer>
            <LogoStyle>
                <LogoDeployBuddy width="183" height="35"/>
            </LogoStyle>
            <SidebarSection>
                <SidebarButton 
                    selected={selectedButton === 'Menu'}
                    onClick={() => handleButtonClick('Menu')}>
                    <IconWrapper>
                        <House color={selectedButton === 'Menu' ? '#000000' : '#969696'}/>
                    </IconWrapper>
                    Menu
                </SidebarButton>
            </SidebarSection>
            <SidebarSection>
                <SidebarButton
                    selected={selectedButton === 'Projeto'}
                    onClick={() => handleButtonClick('Projeto')}>
                    <IconWrapper>   
                        <Slider color={selectedButton === 'Projeto' ? '#000000' : '#969696'}/>
                    </IconWrapper>
                    Projeto
                </SidebarButton>
            </SidebarSection>
            <SidebarSection>
                <SidebarButton
                    selected={selectedButton === 'Configurações'}
                    onClick={() => handleButtonClick('Configurações')}>
                    <IconWrapper> 
                        <UsersGroup color={selectedButton === 'Configurações' ? '#000000' : '#969696'}/>
                    </IconWrapper>
                    Configurações
                </SidebarButton>
            </SidebarSection>
        </SidebarContainer>
    )
}   

export default Sidebar;