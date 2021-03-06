import React from "react";
import { useHistory } from "react-router";
import styled from "styled-components";

import device from "components/device";
import MobileMenu from "components/MobileMenu";
import PCMenu from "components/PCMenu";

const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  z-index: 10;

  #pcMenu {
    display: none;
  }
  #mobileMenu {
    display: block;
  }

  @media all and (-ms-high-contrast: none), (-ms-high-contrast: active) {
    /* IE10+ CSS styles go here */
  }

  @media ${device.md} {
    #pcMenu {
      display: block;
    }
    #mobileMenu {
      display: none;
    }
  }
`;

const HeaderInner = styled.div`
  display: flex;
  padding: 10px 0px;
  align-items: center;
  justify-content: space-between;
`;

const HeaderLogo = styled.div`
  float: left;
  display: flex;
  align-items: center;
  padding-left: 10px;
  cursor: pointer;
`;

const Header = () => {
  const history = useHistory();

  return (
    <HeaderWrapper>
      <HeaderInner>
        <HeaderLogo onClick={() => history.replace("/")}>
          <img src="../source/images/logo_nn.png" />
        </HeaderLogo>
        <MobileMenu />
        <PCMenu />
      </HeaderInner>
    </HeaderWrapper>
  );
};

export default Header;
