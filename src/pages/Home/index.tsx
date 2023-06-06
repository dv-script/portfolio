import { Cursor, useTypewriter } from "react-simple-typewriter";

import * as Styled from "./styles";

import NavMenu from "../../components/NavMenu";
import SocialMedia from "../../components/SocialMedia";

export default function Home() {

    const [description] = useTypewriter({
        words: ["Frontend developer with 1 year of experience. Specializing in ReactJS, Typescript, JavaScript, Tailwind, Sass, and Styled Components. Creating dynamic and responsive web interfaces."],
        typeSpeed: 25,
      });

    return (
        <>
            <NavMenu />
            <Styled.Container>

                <Styled.LeftContent>

                    <SocialMedia url="https://github.com/dv-script">
                        <Styled.GithubIcon />
                    </SocialMedia>

                    <SocialMedia url="https://www.linkedin.com/in/davi-hasson-castro-3968751ab/">
                        <Styled.LinkedInIcon />
                    </SocialMedia>

                </Styled.LeftContent>
                
                <Styled.MiddleContent>

                    <Styled.Title>Hi, I am</Styled.Title>
                    <Styled.Subtitle>Davi</Styled.Subtitle>

                    <Styled.Description>
                        {description}<Cursor />
                    </Styled.Description>

                </Styled.MiddleContent>

                
                <Styled.RightContent>
                    <Styled.ProfileImage />
                </Styled.RightContent>

            </Styled.Container>
        </>
    )
}