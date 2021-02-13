import React from "react";
import styled from "styled-components";
import device from "components/device";

const AboutBannerWrapper = styled.div`
  width: 100%;
  background-image: url("../source/images/about_banner.jpg");
  background-size: cover;
  background-repeat: no-repeat;
  background-position: center;
  display: flex;
  justify-content: center;
  align-items: center;
`;
const AboutBannerBlck = styled.div`
  width: 100%;
  height: 80vh;
  background: rgb(0, 0, 0, 0.3);

  @media ${device["pc"]} {
    height: 100vh;
  }
`;

const AboutBanner = () => (
  <AboutBannerWrapper>
    <AboutBannerBlck></AboutBannerBlck>
  </AboutBannerWrapper>
);

export default AboutBanner;
