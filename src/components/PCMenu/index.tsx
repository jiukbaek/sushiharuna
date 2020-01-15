import * as React from "react";
import { Link } from "react-router-dom";
import styled from "styled-components";

const MenuWrapper = styled.div`
  display: block;
  margin-right: 40px;
`;

const MenuItems = styled.ul`
  list-style-type: none;
`;

const MenuItem = styled.li`
  display: inline-block;
  color: rgb(209, 164, 17);
  font-size: 16px;
  margin: 0 15px;
  font-weight: 600;
`;

const scrollTop = () => {
  window.scroll(0, 0);
};

const Menu = () => {
  return (
    <MenuWrapper id="pcMenu">
      <MenuItems>
        <MenuItem onClick={scrollTop}>
          <Link to="/">HOME</Link>
        </MenuItem>
        <MenuItem onClick={scrollTop}>
          <Link to="/about">ABOUT</Link>
        </MenuItem>
        <MenuItem onClick={scrollTop}>
          <Link to="/menu">MENU</Link>
        </MenuItem>
      </MenuItems>
    </MenuWrapper>
  );
};

export default Menu;
