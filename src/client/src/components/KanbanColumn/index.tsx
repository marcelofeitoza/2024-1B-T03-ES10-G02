import React from 'react';
import { Container, KanbanColumnHeader, KanbanColumnContent, KanbanColumnHeaderIcons, HeaderIconsItem } from './style';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import AddIcon from '@mui/icons-material/Add';
import CloudIcon from '@mui/icons-material/Cloud';
import KanbanCard from '../KanbanCard/';
import { Droppable } from "react-beautiful-dnd";

interface Ambiente {
    nome: string;
    cards: Card[];
}

interface Card {
    nome: string;
    type: string;
    message?: string;
    changeSets?: Card[];
    author: Author;
}

interface Author {
    nome: string;
    photo: string
}

const KanbanColumn: React.FC<Ambiente> = ({nome, cards}) => {
  return (
    <Container>
        {nome === 'Repositório Local' ? (
            <>
                <Droppable droppableId={nome}>
                    {(provided, snapshot) => (
                        <>
                            <KanbanColumnHeader
                             style={getStylesForAmbient(nome)}
                             ref={provided.innerRef}
                            {...provided.droppableProps}
                            // isDraggingOver={snapshot.isDraggingOver}
                             >
                                <KanbanColumnHeaderIcons>
                                    <HeaderIconsItem style={{marginRight:'6px'}}>
                                        <CloudIcon />
                                    </HeaderIconsItem>
                                    <h1 style={getStylesForAmbient(nome)}>{nome}</h1>
                                </KanbanColumnHeaderIcons>
                                <HeaderIconsItem>
                                    <AddIcon />
                                </HeaderIconsItem>
                            </KanbanColumnHeader>
                            <KanbanColumnContent>
                                {cards.map((card, index) => (
                                    <KanbanCard nome={card.nome} type={card.type} changeSets={card.changeSets} author={card.author} index={index + 1}></KanbanCard>
                                ))}
                                {provided.placeholder}
                            </KanbanColumnContent>
                        </>  
                    )}
                </Droppable>
            </>
          ) : (
            <>
                <Droppable droppableId={nome}>
                    {(provided, snapshot) => (
                        <>
                            <KanbanColumnHeader 
                            style={getStylesForAmbient(nome)}
                            ref={provided.innerRef}
                            {...provided.droppableProps}
                            // isDraggingOver={snapshot.isDraggingOver}
                            >
                                <KanbanColumnHeaderIcons>
                                    <HeaderIconsItem style={{marginRight:'6px'}}>
                                        <CloudIcon />
                                    </HeaderIconsItem>
                                    <h1 style={getStylesForAmbient(nome)}>{nome}</h1>
                                </KanbanColumnHeaderIcons>
                                <HeaderIconsItem>
                                    <AddIcon />
                                </HeaderIconsItem>
                            </KanbanColumnHeader>
                            <KanbanColumnContent>
                                {cards.map((card, index) => (
                                    <KanbanCard nome={card.nome} type={card.type} changeSets={card.changeSets} author={card.author} index={index + 1}></KanbanCard>
                                ))}
                                {provided.placeholder}
                            </KanbanColumnContent>
                        </>  
                    )}
                </Droppable>
            </>
          )}
    </Container>
  );
}

const getStylesForAmbient = (ambient: string) => {
    let color = '';
    let backgroundColor = '';
  
    switch (ambient) {
        case 'Repositório Local':
            color = 'var(--local_text)';
            backgroundColor = 'var(--local)';
            break;
        case 'Desenvolvimento':
            color = 'var(--develop_text)';
            backgroundColor = 'var(--develop)';
            break;
        case 'Homologação':
            color = 'var(--uat_text)';
            backgroundColor = 'var(--uat)';
            break;
        case 'User Acceptance Test':
            color = 'var(--production_text)';
            backgroundColor = 'var(--production)';
            break;
        case 'Aguardando aprovação':
            color = 'var(--waiting_approval_text)';
            backgroundColor = 'var(--waiting_approval)';
            break;
        case 'Produção':
            color = 'var(--production_text)';
            backgroundColor = 'var(--production)';
            break;
    }
  
    return { color, backgroundColor };
};

export default KanbanColumn;