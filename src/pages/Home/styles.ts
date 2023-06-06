import styled from 'styled-components';

import {FiGithub} from "react-icons/fi";
import {FaLinkedinIn} from "react-icons/fa";

import ProfileImg from "../../assets/profile.png"

export const Container = styled.section`
    width: 100vw;
    height: 100vh;
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 20px;

    @media (max-width: 480px) {
        padding: 1em;
    }
`;

export const LeftContent = styled.div`
    display: flex;
    flex-direction: column;
    gap: 20px;
`;

export const GithubIcon = styled(FiGithub)`
  color: #000;
  font-size: 35px;
  transition: 300ms;
`;

export const LinkedInIcon = styled(FaLinkedinIn)`
  color: #000;
  font-size: 35px;
  transition: 300ms;
`;

export const MiddleContent = styled.div`
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

export const RightContent = styled.div`
    @media (max-width: 920px) {
        display: none;
    }
`;

export const ProfileImage = styled.img.attrs((props => ({ ...props, src: ProfileImg })))`
    width: 400px;
    object-fit: cover;
    object-position: center;
`;