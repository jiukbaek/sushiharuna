import React from "react";
import styled from "styled-components";

import EmptyBox from "components/EmptyBox";

const FooterWrapper = styled.div`
  max-width: 100%;
  width: 100vw;
  background: rgb(45, 45, 47);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const FooterContentWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2vw 0;
`;

const FooterLogo = styled.img`
  width: 100px;
  margin: 20px 0px;
`;

const FooterText = styled.div`
  color: rgb(209, 164, 17);
  margin: 5px 0px;
`;

const InstagramWrapper = styled.a`
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 1px 0px;
`;

const InstagramIcon = styled.img`
  width: 16px;
  height: 16px;
  margin-right: 5px;
  margin-top: 1px;
`;

const Footer = () => {
  return (
    <FooterWrapper>
      <FooterContentWrapper>
        <FooterLogo src="../source/images/logo_nn.png" />
        <FooterText>
          <a
            href="https://v4.map.naver.com/?mapmode=0&lng=23b504b756185f466aadceccd7c2e001&pinId=379986783&pinType=site&lat=637fbf522dbfddabb4359e8ab81df20e&dlevel=11&enc=b64"
            target="_blank"
          >
            대구 동구 송라로 65 | 65, Songna-ro, Dong-gu, Daegu
          </a>
        </FooterText>
        <FooterText>
          대표 최민철{" "}
          <span
            onClick={() => {
              document.location.href = "tel:010-3333-9242";
            }}
          >
            010-3333-9242
          </span>
        </FooterText>
        <FooterText>© 2017 はるな</FooterText>
        <EmptyBox height="30px" />
        <InstagramWrapper
          href="https://www.instagram.com/sushiharuna/"
          target="_blank"
        >
          <InstagramIcon src="../source/images/instagram-logo2.png" />
          <FooterText>sushiharuna</FooterText>
        </InstagramWrapper>
      </FooterContentWrapper>
    </FooterWrapper>
  );
};

export default Footer;
