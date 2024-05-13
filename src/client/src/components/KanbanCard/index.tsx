import React from 'react';
import { Container, ReleaseCard, TextCard, AuthorCard, AuthorIcon, ReleaseCardContainer} from './style';
import { Draggable } from "react-beautiful-dnd";
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

interface CardProps{
    index: number;
}
  
const KanbanCard: React.FC<Card & CardProps> = ({ nome, type, message, changeSets, author }, {index}) => {
    // console.log('author:', author)
    // console.log('nome:', author.nome)
    // console.log('nome:', author.photo)
    // const id = 'kdsfndifnidsnfisndiofnsdof';

    return (
        <Container>
            {type === 'release' ? (
                <Draggable draggableId={`${nome}`} key={nome} index={index}>
                    {(provided, snapshot) => (
                        <ReleaseCard
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            //isDragging={snapshot.isDragging}
                        >
                            <ReleaseCardContainer>
                                <h1>{nome}</h1>
                                <TextCard>
                                {changeSets?.map((change, index) => (
                                    <p key={index}>{String(change)}</p>
                                ))}
                                </TextCard>
                                <AuthorCard>
                                    <AuthorIcon>
                                        <img src={author.photo} alt="" />
                                    </AuthorIcon>
                                    <h2>{author.nome}</h2>
                                </AuthorCard>
                            </ReleaseCardContainer>
                        </ReleaseCard>
                    )}
                </Draggable>
            ) : (
                <Draggable draggableId={`${nome}`} key={nome} index={index}>
                    {(provided, snapshot) => (
                        <ReleaseCard
                            {...provided.draggableProps}
                            {...provided.dragHandleProps}
                            ref={provided.innerRef}
                            //isDragging={snapshot.isDragging}
                        >
                            <ReleaseCardContainer>
                                <h1>{nome}</h1>
                                <TextCard>
                                    {message}
                                </TextCard>
                                <AuthorCard>
                                    <AuthorIcon>
                                        <img src={author.photo} alt="" />
                                    </AuthorIcon>
                                    <h2>{author.nome}</h2>
                                </AuthorCard>
                            </ReleaseCardContainer>
                        </ReleaseCard>
                    )}
                </Draggable>
            )}
        </Container>
        // <Container>
        //     {type === 'release' ? (
        //         <ReleaseCard>
        //             <h1>{nome}</h1>
        //             <TextCard>
        //             {changeSets?.map((change, index) => (
        //                 <p key={index}>{String(change)}</p>
        //             ))}
        //             </TextCard>
        //             <AuthorCard>
        //                 <AuthorIcon>
        //                     <img src={author.photo} alt="" />
        //                 </AuthorIcon>
        //                 <h2>{author.nome}</h2>
        //             </AuthorCard>
        //         </ReleaseCard>
        //     ) : (
        //         <ReleaseCard>
        //             <h1>{nome}</h1>
        //             <TextCard>
        //                 {message}
        //             </TextCard>
        //             <AuthorCard>
        //                 <AuthorIcon>
        //                     <img src={author.photo} alt="" />
        //                 </AuthorIcon>
        //                 <h2>{author.nome}</h2>
        //             </AuthorCard>
        //         </ReleaseCard>
        //     )}
        // </Container>
    );
}

export default KanbanCard;