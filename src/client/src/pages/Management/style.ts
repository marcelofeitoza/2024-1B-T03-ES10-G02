import styled from 'styled-components';

interface ManagementProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
    selected?: boolean;
}

export const Container = styled.div`
    display: flex;
`;

export const ContainerContent = styled.div`
    width: 100%;
    height: 100vh;
    padding: 0px 0px;
`;

export const Header = styled.div`
    display: flex;
    align-items: center;
    padding: 50px 70px;

    h1{
        font-family: "Manrope", sans-serif;
        font-weight: 500;
        font-size: 32px;
        color: var(--primary);
        margin-right: 15px;
    }
`;

export const Navigation = styled.div`
    display: flex;
    align-items: center;

    span{
        margin: 0 5px;
    }
`;

export const TextHeader = styled.p<ManagementProps>`
    font-family: "Manrope", sans-serif;
    font-weight: 400;
    font-size: 16px;
    color: ${({ selected }) => selected ? 'var(--secondary)}' : 'var(--grey)}'};

    &:hover{
        /* cursor: pointer; */
    }
`;

export const KanbanContainer = styled.div`
   padding: 0 30px 24px 30px;
   height: calc(100% - 144px);
   

    // Large tablets and laptops
    @media (max-width: 1199px) {
        min-height: calc(100% - 144px);
        height: auto;
    }
   
`;

export const KanbanBase = styled.div`
    border: 1px solid rgba(0, 0, 0, 0.18);
    border-radius: 10px;
    height: 100%;
    padding: 25px 17px 25px 29px;

    display: flex;
    flex-direction: row;

    // Large tablets and laptops
    @media (max-width: 1199px) {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(256px, 103px));
        gap: 12px;
        justify-content: space-between;
    }
`;

export const HistoryBase = styled.div`
   
`;