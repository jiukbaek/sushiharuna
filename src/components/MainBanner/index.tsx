import * as React from "react";
import styled from "styled-components";
import device from "components/device";

const MainBannerWrapper = styled.div`
  position: relative;
  width: 100%;
  background-image: url("../source/images/banner_m.jpg");
  @media ${device["mobile_wide"]} {
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
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-family: "행복고흥L", sans serif;
  top: 0;
  left: 0;
`;
const MainBannerMainText = styled.div`
  font-size: 35vw;
  @media ${device["pc"]} {
    font-size: 19vw;
    font-weight: 600;
  }
  font-weight: 700;
  color: rgb(209, 164, 17);
  text-align: center;
  line-height: 20vw;
`;
const MainBannerSubText = styled.div`
  font-size: 10vw;
  @media ${device["pc"]} {
    font-size: 7vw;
    font-weight: 550;
  }
  font-weight: 700;
  color: rgb(209, 164, 17);
  margin-top: -10vw;
`;
const MainBannerBlack = styled.div`
  width: 100%;
  height: 100vh;
  @media ${device["pc"]} {
    height: 120vh;
  }
  background: rgba(0, 0, 0, 0.3);
`;

const MainBanner = () => (
  <MainBannerWrapper>
    <MainBannerTextWrapper>
      <MainBannerMainText>Sushi Haruna</MainBannerMainText>
      <MainBannerSubText>Sushi Omakase</MainBannerSubText>
    </MainBannerTextWrapper>
    <MainBannerBlack></MainBannerBlack>
  </MainBannerWrapper>
);

export default MainBanner;
