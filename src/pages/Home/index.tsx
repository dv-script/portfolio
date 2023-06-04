import { Cursor, useTypewriter } from "react-simple-typewriter";
import {FiGithub} from "react-icons/fi";
import {FaLinkedinIn} from "react-icons/fa";

import * as Styled from "./styles";

import NavMenu from "../../components/NavMenu";
import SocialMedia from "../../components/SocialMedia";

export default function Home() {

    const [description] = useTypewriter({
        words: ["Frontend developer with 1 year of experience. Specializing in ReactJS, JavaScript, Tailwind, Sass, and Styled Components. Creating dynamic and responsive web interfaces."],
        typeSpeed: 25,
      });

    return (
        <>
            <NavMenu />
            <Styled.Container>

                <Styled.LeftContent>

                    <SocialMedia url="https://github.com/dv-script">
                        <FiGithub color={"ccc"} size={35}/>
                    </SocialMedia>

                    <SocialMedia url="https://www.linkedin.com/in/davi-hasson-castro-3968751ab/">
                        <FaLinkedinIn color={"#ccc"} size={35}/>
                    </SocialMedia>

                </Styled.LeftContent>
                
                <Styled.RightContent>

                    <Styled.Title>Hi, I am</Styled.Title>
                    <Styled.Subtitle>Davi</Styled.Subtitle>

                    <Styled.Description>
                        {description}<Cursor />
                    </Styled.Description>

                </Styled.RightContent>

                
            </Styled.Container>
        </>
    )
}