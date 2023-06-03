import { useState } from 'react';

import * as Styled from './styles';

export default function Navbar() {

    const [isActive, setIsActive] = useState(false);

    const handleClick = () => {
        setIsActive(!isActive);
    }

    return (
        <Styled.NavbarContainer>

                    <Styled.NavbarLogo>
                        <Styled.NavbarLink to={"./"}>Davi</Styled.NavbarLink>
                        <Styled.NavbarSpan />
                    </Styled.NavbarLogo>

                    <Styled.NavbarContent>

                        <Styled.NavbarMobile className={isActive ? 'active' : ''} onClick={handleClick}>
                            <Styled.NavbarMobileSpan/>
                        </Styled.NavbarMobile>

                        <Styled.NavbarList>
                            
                            <Styled.NavbarItem>
                                <Styled.NavbarLink to={"./about"}>About</Styled.NavbarLink>
                                <Styled.NavbarSpan />
                            </Styled.NavbarItem>

                            <Styled.NavbarItem>
                                <Styled.NavbarLink to={"./skills"}>Skills</Styled.NavbarLink>
                                <Styled.NavbarSpan />
                            </Styled.NavbarItem>

                            <Styled.NavbarItem>
                                <Styled.NavbarLink to={"./projects"}>Projects</Styled.NavbarLink>
                                <Styled.NavbarSpan />
                            </Styled.NavbarItem>
                            
                            <Styled.NavbarItem>
                                <Styled.NavbarLink to={"./about"}>Contact</Styled.NavbarLink>
                                <Styled.NavbarSpan />
                            </Styled.NavbarItem>

                        </Styled.NavbarList>
                    
                    </Styled.NavbarContent>

        </Styled.NavbarContainer>
    )
}