import styled from 'styled-components';

export const Container = styled.div`
    width: 100%;
`;

export const ReleaseCard = styled.div`
    width: 100%;
    padding: 11px 14px;
    border-radius: 10px;
    border: 1px solid rgba(0, 0, 0, 0.18);
    margin-bottom: 20px;
`;

export const ReleaseCardContainer = styled.div`
    width: 100%;

    h1{
        font-family: "Manrope", sans-serif;
        font-weight: 500;
        font-size: 14px;
        color: var(--primary);
        margin-bottom: 5px;
    }
`;

export const TextCard = styled.div`
   min-height: 37px;
   margin-bottom: 10px;
`;

export const AuthorCard = styled.div`
    width: 100%;
    display: flex;
    flex-direction: row;
    align-items: center;

    h2{
        font-family: "Manrope", sans-serif;
        font-weight: 500;
        font-size: 12px;
        color: var(--primary);
        margin-left: 8px;
    
    }
`;

export const AuthorIcon = styled.div`
    width: 28px;
    height: 28px;
    border-radius: 50%;

    img{
        width: 100%;
        height: 100%;
        border-radius: 50%;
        object-fit: cover;
    }
`;
