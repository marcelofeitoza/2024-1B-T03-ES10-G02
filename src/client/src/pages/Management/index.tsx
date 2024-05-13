import React, {useState} from 'react';
import { Container, ContainerContent, Header, Navigation, KanbanContainer, KanbanBase, HistoryBase, TextHeader } from './style';
import Sidebar from '../../components/sidebar/Sidebar';
import KanbanColumn from '../../components/KanbanColumn';
import { DragDropContext } from "react-beautiful-dnd";
import NavBarComponent from '../../components/Navbar';

interface Project {
  name: string;
  ambientes: Ambiente[];
}

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


const Management: React.FC = () => {
  const [viewMode, setViewMode] = useState<string>('management');

  const handleViewSelect = (view: string) => {
    setViewMode(view);
  };

  const project = { 
    name: 'PagSeguro', 
    ambientes: [{
      nome: 'Repositório Local', 
      cards: [{
        nome: 'Change Set #123',
        type: 'change', 
        message: 'Add value x in column y', 
        author: {
          nome: 'Ana Clara Müller', 
          photo:'https://media.licdn.com/dms/image/C4E03AQFESfiDsz5Reg/profile-displayphoto-shrink_800_800/0/1646850305903?e=1720656000&v=beta&t=YJa7FhKEAvjtWXcvkCDt9MvhwN6r_EEM3CfFIGq-Vt0'
        }
      },
      {
        nome: 'Change Set #126',
        type: 'change', 
        message: 'Add value x in column y', 
        author: {
          nome: 'Ana Clara Müller', 
          photo:'https://media.licdn.com/dms/image/C4E03AQFESfiDsz5Reg/profile-displayphoto-shrink_800_800/0/1646850305903?e=1720656000&v=beta&t=YJa7FhKEAvjtWXcvkCDt9MvhwN6r_EEM3CfFIGq-Vt0'
        }
      }]
    },
    {
      nome: 'Desenvolvimento', 
      cards: [{
        nome: 'Release #200', 
        type: 'release', 
        changeSets: ['Change Set #123', 'Change Set #124'],
        author: {
          nome: 'Ana Clara Müller', 
          photo:'https://media.licdn.com/dms/image/C4E03AQFESfiDsz5Reg/profile-displayphoto-shrink_800_800/0/1646850305903?e=1720656000&v=beta&t=YJa7FhKEAvjtWXcvkCDt9MvhwN6r_EEM3CfFIGq-Vt0'
        }
      }]
    },
    {
      nome: 'Homologação', 
      cards: [{
        nome: 'Release #121',
        type: 'release',
        changeSets: ['Change Set #123', 'Change Set #124'],
        author: {
          nome: 'Ana Clara Müller', 
          photo:'https://media.licdn.com/dms/image/C4E03AQFESfiDsz5Reg/profile-displayphoto-shrink_800_800/0/1646850305903?e=1720656000&v=beta&t=YJa7FhKEAvjtWXcvkCDt9MvhwN6r_EEM3CfFIGq-Vt0'
        }
      }]
    },
    {
      nome: 'Aguardando aprovação', 
      cards: [{
        nome: 'Release #122',
        type: 'release',
        changeSets: ['Change Set #123', 'Change Set #124'],
        author: {
          nome: 'Ana Clara Müller', 
          photo:'https://media.licdn.com/dms/image/C4E03AQFESfiDsz5Reg/profile-displayphoto-shrink_800_800/0/1646850305903?e=1720656000&v=beta&t=YJa7FhKEAvjtWXcvkCDt9MvhwN6r_EEM3CfFIGq-Vt0'
        }
      }]
    },
    {
      nome: 'Produção', 
      cards: [{
        nome: 'Release #123',
        type: 'release',
        changeSets: ['Change Set #123', 'Change Set #124'],
        author: {
          nome: 'Ana Clara Müller', 
          photo:'https://media.licdn.com/dms/image/C4E03AQFESfiDsz5Reg/profile-displayphoto-shrink_800_800/0/1646850305903?e=1720656000&v=beta&t=YJa7FhKEAvjtWXcvkCDt9MvhwN6r_EEM3CfFIGq-Vt0'
        }
      }]
    }]
  };

  // console.log(project.name);

  // const primeiroAmbiente = project.ambientes[0];
  // console.log(primeiroAmbiente.nome);

  // const primeiroCard = primeiroAmbiente.cards[0];
  // console.log(primeiroCard.nome);
  // // console.log(primeiroCard.message);

  // const autor = primeiroCard.author[0];
  // console.log(autor.nome);
  // console.log(autor.photo);

  const handleDragEnd = (result: any) => {
    const { destination, source, draggableId } = result;

    console.log('destination:', destination)
    console.log('source:', source)
    console.log('draggableId:', draggableId)

    if (!destination || source.droppableId === destination.droppableId) return;

    const sourceAmbiente = project.ambientes.find(ambiente => ambiente.nome === source.droppableId);
    const destinationAmbiente = project.ambientes.find(ambiente => ambiente.nome === destination.droppableId);

    console.log('sourceAmbiente:', sourceAmbiente)
    console.log('destinationAmbiente:', destinationAmbiente)

    if (!sourceAmbiente || !destinationAmbiente) return;

    const cardIndex = sourceAmbiente.cards.findIndex(card => card.nome === draggableId);

    console.log('cardIndex:', cardIndex)

    if (cardIndex === -1) return;

    const [card] = sourceAmbiente.cards.splice(cardIndex, 1);

    console.log('card:', card)

    destinationAmbiente.cards.push(card as any);


    console.log('card mudando de ambiente')
  };

  return (
    <Container>
      <Sidebar />
      <div style={{display:'flex', flexDirection:"column"}}>
      <NavBarComponent></NavBarComponent>
      <ContainerContent>
        <Header>
            <h1>PagSeguro</h1>
            <Navigation>
                <TextHeader selected={viewMode === 'management'} onClick={() => handleViewSelect('management')}>Gerenciamento</TextHeader>
                <span>|</span>
                <TextHeader selected={viewMode === 'history'} onClick={() => handleViewSelect('history')}>Histórico</TextHeader>
            </Navigation>
        </Header>
        <DragDropContext onDragEnd={handleDragEnd}>
          <KanbanContainer>
            {viewMode === 'management' ? (
              <KanbanBase>
                {project.ambientes.map((ambiente, index) => (
                  ambiente.nome === 'Repositório Local' ? (
                    <KanbanColumn key={index} nome={ambiente.nome} cards={ambiente.cards as unknown as Card[]} />
                  ) : (
                    <KanbanColumn key={index} nome={ambiente.nome} cards={ambiente.cards as unknown as Card[]} />
                  )
                ))}
              </KanbanBase>
            ) : (
              <HistoryBase>Histórico</HistoryBase>
            )}
          </KanbanContainer>

        </DragDropContext>
      </ContainerContent>
      </div>
    </Container>
    
      
  );
}

export default Management;