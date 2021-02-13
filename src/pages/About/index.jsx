import React from "react";
import styled from "styled-components";

import AboutBanner from "components/AboutBanner";

import Text from "components/Text";
import EmptyBox from "components/EmptyBox";
import device from "components/device";

const AboutWrapper = styled.div`
  width: 100vw;
  padding-bottom: 15vw;
`;

const AboutSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${(props) => (props.background ? props.background : "white")};
  border: none;

  @media ${device.md} {
    .pcContent {
      flex-direction: row-reverse;
    }
  }
`;

const AboutContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15vw 0;
  @media ${device.md} {
    padding: 8vw 0;
  }
`;

const AboutContentDynamicWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 15vw 0;

  @media ${device.md} {
    flex-direction: row;
    padding: 8vw 0;
  }
`;

const AboutImage = styled.img`
  width: 90vw;

  @media ${device.md} {
    width: 45vw;
    margin: 4vw;
  }
`;

const AboutTextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AboutText = styled.div`
  font-weight: 700;
  text-shadow: 1px 1.5px 2px gray;
  font-size: 7vw;
  margin-top: 6vw;

  @media ${device.md} {
    font-size: 4vw;
  }
`;

const About = () => {
  return (
    <AboutWrapper>
      <AboutSection>
        <AboutBanner />
      </AboutSection>
      <AboutSection>
        <AboutContentWrapper>
          <Text
            size="7vw"
            color="black"
            shadow="1px 1.5px 2px gray"
            pcSize="3vw"
          >
            스시하루나
          </Text>
          <EmptyBox height="4vw" />
          <Text
            size="4vw"
            margin="6px 0px"
            color="rgb(90,90,90)"
            pcSize="2vw"
            pcMargin="15px 0px"
          >
            안녕하십니까, 스시하루나 대표 최민철 입니다.
          </Text>
          <Text
            size="4vw"
            margin="6px 0px"
            color="rgb(90,90,90)"
            pcSize="2vw"
            pcMargin="15px 0px"
          >
            스시하루나는 숙성과 절임을 통해 생선의 맛을 극대화 시켜
          </Text>
          <Text
            size="4vw"
            margin="6px 0px"
            color="rgb(90,90,90)"
            pcSize="2vw"
            pcMargin="15px 0px"
          >
            생선 고유의 맛을 이끌어 내는데 중점을 두고있습니다.
          </Text>
          <Text
            size="4vw"
            margin="6px 0px"
            color="rgb(90,90,90)"
            pcSize="2vw"
            pcMargin="15px 0px"
          >
            각 재료별 최상의 맛을 선보이기 위하여
          </Text>
          <Text
            size="4vw"
            margin="6px 0px"
            color="rgb(90,90,90)"
            pcSize="2vw"
            pcMargin="15px 0px"
          >
            다양한 방법을 끊임없이 연구하고있습니다.
          </Text>
          <Text
            size="4vw"
            margin="6px 0px"
            color="rgb(90,90,90)"
            pcSize="2vw"
            pcMargin="15px 0px"
          >
            제철에 따라, 재료에 따라 그리고 숙성에 따라
          </Text>
          <Text
            size="4vw"
            margin="6px 0px"
            color="rgb(90,90,90)"
            pcSize="2vw"
            pcMargin="15px 0px"
          >
            색다른 식감과 풍미를 느껴보시길 바랍니다.
          </Text>
        </AboutContentWrapper>
      </AboutSection>
      <AboutSection>
        <AboutContentDynamicWrapper>
          <AboutImage src="../source/images/about1.png" />
          <AboutTextWrapper>
            <AboutText>大道無門</AboutText>
            <Text size="4vw" margin="1.2vw 0px" color="black" pcSize="2vw">
              대도무문 : 정도에는 거칠것이 없다
            </Text>
            <EmptyBox height="2vw" />
            <Text
              size="4vw"
              margin="6px 0px"
              color="rgb(90,90,90)"
              pcSize="1.4vw"
            >
              스승의 신념을 이어받아
            </Text>
            <Text
              size="4vw"
              margin="6px 0px"
              color="rgb(90,90,90)"
              pcSize="1.4vw"
            >
              스시 한 점 마다
            </Text>
            <Text
              size="4vw"
              margin="6px 0px"
              color="rgb(90,90,90)"
              pcSize="1.4vw"
            >
              거짓없이
            </Text>
            <Text
              size="4vw"
              margin="6px 0px"
              color="rgb(90,90,90)"
              pcSize="1.4vw"
            >
              정직함을 담아 요리합니다.
            </Text>
          </AboutTextWrapper>
        </AboutContentDynamicWrapper>
      </AboutSection>
      <AboutSection>
        <AboutContentDynamicWrapper className="pcContent">
          <AboutImage src="../source/images/about2.png" />
          <AboutTextWrapper>
            <Text
              size="7vw"
              color="black"
              shadow="1px 1.5px 2px gray"
              margin="4vw 0px"
              pcSize="4vw"
            >
              오감
            </Text>
            <EmptyBox height="2vw" />
            <Text
              size="4vw"
              margin="6px 0px"
              color="rgb(90,90,90)"
              pcSize="1.4vw"
            >
              스시하루나만의 숙성법으로
            </Text>
            <Text
              size="4vw"
              margin="6px 0px"
              color="rgb(90,90,90)"
              pcSize="1.4vw"
            >
              생선의 단맛, 신맛, 쓴맛, 향을 극대화 시켜
            </Text>
            <Text
              size="4vw"
              margin="6px 0px"
              color="rgb(90,90,90)"
              pcSize="1.4vw"
            >
              사람의 오감을 예민하게 만들어
            </Text>
            <Text
              size="4vw"
              margin="6px 0px"
              color="rgb(90,90,90)"
              pcSize="1.4vw"
            >
              "더 먹고싶다!"
            </Text>
            <Text
              size="4vw"
              margin="6px 0px"
              color="rgb(90,90,90)"
              pcSize="1.4vw"
            >
              라는 생각이 들게끔합니다.
            </Text>
          </AboutTextWrapper>
        </AboutContentDynamicWrapper>
      </AboutSection>
    </AboutWrapper>
  );
};

export default About;
