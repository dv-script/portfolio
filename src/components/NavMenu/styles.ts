import styled from "styled-components";
import { Link } from "react-router-dom";

export const NavbarContainer = styled.header`
  position: fixed;
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100vw;
  height: 75px;
  padding: 0 2.5rem;
  background-color: #f0f0f0;
  box-shadow: 0px 0px 10px 0px rgba(0,0,0,0.75);
  z-index: 10;
  `;

export const NavbarLogo = styled.ul`
  display: flex;
  position: relative;
`;

export const NavbarContent = styled.nav`
  display: flex;
  align-items: center;
  justify-content: flex-end;
`;

export const NavbarMobile = styled.button`
  display: none;

  @media (max-width: 768px) {
    cursor: pointer;
    display: flex;
    border: none;
    background-color: transparent;
  }
`;

export const NavbarMobileSpan = styled.span`

  @media (max-width: 768px) { 
    display: block;
    border-top: 2px solid ;
    color: #5a5a5a;
    position: relative;
    
    ::before,
    ::after {
      content: '';
      display: block;
      width: 20px;
      height: 1.75px;
      background-color: currentColor;
      margin-top: 4px;
      transition: .3s;
    }

    ${NavbarMobile}.active & {
      border: none;
    }

    ${NavbarMobile}.active &::before {
      transform: rotate(135deg);
    }

    ${NavbarMobile}.active &::after {
      transform: rotate(-135deg);
      position: absolute;
      top: 0;
    }
  }
`;

export const NavbarList = styled.ul`
  position: relative;
  display: flex;
  gap: 40px;
  transition: 300ms;
  
  @media (max-width: 768px) {
    position: absolute;
    height: 0;
    top: 75px;
    right: 0;
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    padding: 0 40px 0 0;
    width: 100vw;
    background-color: #eeeeee;
    transition: .6s;
    visibility: hidden;
    overflow-y: hidden;
    z-index: 10;

    ${NavbarMobile}.active ~ & {
      height: calc(100vh - 75px);
      visibility: visible;
      overflow-y: visible;
    }
  }
`;


export const NavbarItem = styled.li`
  position: relative;
  display: flex;
  align-items: center;
  height: 100%;
  cursor: pointer;
  
  @media (max-width: 768px) {
    height: min-content;
  }
`;

export const NavbarLink = styled(Link)`
  width: 100%;
  height: 100%;
  text-decoration: none;
  color: #000;
  font-size: 1.2rem;
  font-weight: 500;
  transition: 300ms;

  &:hover {
    color: #999999;
  }
  
  @media (max-width: 768px) {
    height: min-content;
  }
`;

export const NavbarSpan = styled.span`
  position: absolute;
  bottom: -5px;
  width: 100%;
  height: 2px;
  background-color: #999999;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 300ms;

  ${NavbarItem}:hover & {
    transform: scaleX(1);
  }

  ${NavbarLogo}:hover & {
    transform: scaleX(1);
  }
`;