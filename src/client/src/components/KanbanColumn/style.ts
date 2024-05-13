import styled from 'styled-components';

export const Container = styled.div`
    display: flex;
    flex-direction: column;
    width: 236px;
    margin-right: 12px;
`;

export const KanbanColumnHeader = styled.div`
    width: 100%;
    min-height: 41px;
    background-color: var(--local);
    border-radius: 8px;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    align-items: center;
    padding: 0 14px 0 20px;
    margin-bottom: 21px;

    h1{
        font-family: "Manrope", sans-serif;
        font-weight: 500;
        font-size: 14px;
        color: #D79100;
    }
`;

export const KanbanColumnContent = styled.div`
  
`;

export const KanbanColumnHeaderIcons = styled.div`
    display: flex;
    flex-direction: row;
    justify-content: space-between;
    width: fit-content;
`;

export const HeaderIconsItem = styled.div`
    width: 18px;
    height: 18px;

    svg{
        width: 100%;
        height: 100%;
        object-fit: contain;
    }
`;
