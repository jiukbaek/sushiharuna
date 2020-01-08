import * as React from "react";
import styled from "styled-components";

import MobileMenu from "components/MobileMenu";

const HeaderWrapper = styled.div`
  width: 100%;
  position: fixed;
  z-index: 10;
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
`;

const Header = () => (
  <HeaderWrapper>
    <HeaderInner>
      <HeaderLogo
        onClick={() => {
          location.href = "/";
        }}
      >
        <img src="../source/images/logo_nn.png" />
      </HeaderLogo>
      <MobileMenu />
    </HeaderInner>
  </HeaderWrapper>
);

export default Header;
