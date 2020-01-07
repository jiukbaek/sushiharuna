import * as React from "react";
import styled from "styled-components";
import device from "components/device";

const MainBannerWrapper = styled.div`
  width: 100%;
  background-image: url("../source/images/banner_m.jpg");
  @media ${device["s"]} {
    background-image: url("../source/images/banner_ver.1.jpg");
  }
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const MainBannerTextWrapper = styled.div`
  position: absolute;
  display: flex;
  flex-direction: column;
  align-items: center;
  font-family: "행복고흥L", sans serif;
`;
const MainBannerMainText = styled.div`
  font-size: 35vw;
  font-weight: 700;
  color: rgb(209, 164, 17);
  text-align: center;
  line-height: 20vw;
`;
const MainBannerSubText = styled.div`
  font-size: 10vw;
  font-weight: 700;
  color: rgb(209, 164, 17);
  margin-top: -10vw;
`;
const MainBannerBlck = styled.div`
  width: 100%;
  height: 100vh;
  background: rgb(0, 0, 0, 0.3);
`;

const MainBanner = () => (
  <MainBannerWrapper>
    <MainBannerTextWrapper>
      <MainBannerMainText>Sushi Haruna</MainBannerMainText>
      <MainBannerSubText>Sushi Omakase</MainBannerSubText>
    </MainBannerTextWrapper>
    <MainBannerBlck></MainBannerBlck>
  </MainBannerWrapper>
);

export default MainBanner;
