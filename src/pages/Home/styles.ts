import styled from 'styled-components';

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;
`;

export const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
    margin-right: 20px;
`;

export const RightContent = styled.div`
    display: flex;
    flex-direction: column;
    width: 380px;
`;

export const Title = styled.h2`
    width: 100%;
    font-size: 52px;
    font-weight: bold;
    line-height: 1;
`;

export const Subtitle = styled.h3`
    width: 100%;
    font-size: 48px;
    font-weight: bold;
    color: #ccc;
    line-height: 1;
`;

export const Description = styled.p`
    width: 100%;
    font-size: 18px;
    margin-top: 10px;
`;