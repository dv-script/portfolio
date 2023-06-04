import styled from "styled-components";

export const SocialMediaLink = styled.a`
    cursor: pointer;
    display: flex;
    justify-content: center;
    align-items: center;
    width: 4rem;
    height: 4rem;
    border: 2px solid #ccc;
    border-radius: 50%;
    overflow: hidden;
    position: relative;
`;

export const SocialMediaSpan = styled.span`
    width: 100%;
    height: 0;
    position: absolute;
    top: 100%;
    z-index: -10;
    transition-duration: 0.5s;

    ${SocialMediaLink}:hover & {
        width: 100%;
        height: 100%;
        top: 0;
    }
`;
