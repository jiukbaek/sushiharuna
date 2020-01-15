import * as React from "react";
import styled from "styled-components";
import { Link } from "react-router-dom";

const MenuWrapper = styled.div`
  display: block;
  position: relative;
  margin-right: 10px;
  user-select: none;

  input:checked ~ span {
    opacity: 1;
    transform: rotate(45deg) translate(-2px, -1px);
  }
  input:checked ~ ul {
    left: -45vw;
  }

  input:checked ~ span:nth-last-of-type(2) {
    opacity: 0;
    transform: rotate(0deg) scale(0.2, 0.2);
  }
  input:checked ~ span:nth-last-of-type(1) {
    transform: rotate(-45deg) translate(-2px, 1px);
  }

  span:first-of-type {
    transform-origin: 0% 0%;
  }
  span:nth-last-of-type(1) {
    transform-origin: 0% 100%;
  }
`;

const ToggleCheckBox = styled.input`
  display: block;
  position: absolute;
  width: 40px;
  height: 32px;
  opacity: 0;
  top: -1px;
  left: -7px;
  z-index: 1000;
`;

const MenuSpan = styled.span`
  display: block;
  position: relative;
  width: 33px;
  height: 4px;
  background: rgb(209, 164, 17);
  border-radius: 3px;
  margin-bottom: 5px;
  z-index: 100;
  transform-origin: 4px 0px;
  transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
    background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
`;

const SideMenuWrapper = styled.ul`
  position: absolute;
  list-style-type: none;
  width: 45vw;
  height: 100vh;
  background: rgb(45, 45, 47);
  transition: left 0.5s cubic-bezier(0.77, 0.2, 0.05, 1);
  z-index: 10;
  margin-top: -100px;
  padding-top: 150px;
  margin-left: 43px;
  padding-left: 25px;
  left: 0vw;
`;

const SideMenuColumn = styled.li`
  display: block;
  padding: 10px 0;
  margin: 5px 0;
  font-size: 22px;
  color: rgb(209, 164, 17);
`;

const scrollTop = () => {
  window.scroll(0, 0);
};

const MobileMenu = () => (
  <MenuWrapper className="mobileMenu" id="mobileMenu">
    <ToggleCheckBox type="checkbox" id="menuToggle" className="mobileMenu" />
    <MenuSpan className="mobileMenu"></MenuSpan>
    <MenuSpan className="mobileMenu"></MenuSpan>
    <MenuSpan className="mobileMenu"></MenuSpan>
    <SideMenuWrapper className="mobileMenu">
      <SideMenuColumn className="mobileMenu" onClick={scrollTop}>
        <Link to="/">HOME</Link>
      </SideMenuColumn>
      <SideMenuColumn className="mobileMenu" onClick={scrollTop}>
        <Link to="/about">ABOUT</Link>
      </SideMenuColumn>
      <SideMenuColumn className="mobileMenu" onClick={scrollTop}>
        <Link to="/menu">MENU</Link>
      </SideMenuColumn>
    </SideMenuWrapper>
  </MenuWrapper>
);

export default MobileMenu;
