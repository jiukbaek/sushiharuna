import * as React from "react";
import styled from "styled-components";

import AboutBanner from "components/AboutBanner";

import Text from "components/Text";
import EmptyBox from "components/EmptyBox";

const AboutWrapper = styled.div`
  width: 100vw;
`;

const AboutSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${props => (props.background ? props.background : "white")};
  border: none;
`;

const AboutContentWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8vw 0;
`;

const AboutContentDynamicWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 8vw 0;
`;

const AboutImage = styled.img`
  width: 90vw;
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
  margin-top: 4vw;
`;

const About = () => {
  return (
    <AboutWrapper>
      <AboutSection>
        <AboutBanner />
      </AboutSection>
      <AboutSection>
        <AboutContentWrapper>
          <Text size="7vw" color="black" shadow="1px 1.5px 2px gray">
            스시하루나
          </Text>
          <EmptyBox height="4vw" />
          <Text size="4vw" margin="6px 0px" color="rgb(90,90,90)">
            안녕하십니까, 스시하루나 대표 최민철 입니다.
          </Text>
          <Text size="4vw" margin="6px 0px" color="rgb(90,90,90)">
            스시하루나는 숙성과 절임을 통해 생선의 맛을 극대화 시켜
          </Text>
          <Text size="4vw" margin="6px 0px" color="rgb(90,90,90)">
            생선 고유의 맛을 이끌어 내는데 중점을 두고있습니다.
          </Text>
          <Text size="4vw" margin="6px 0px" color="rgb(90,90,90)">
            각 재료별 최상의 맛을 선보이기 위하여
          </Text>
          <Text size="4vw" margin="6px 0px" color="rgb(90,90,90)">
            다양한 방법을 끊임없이 연구하고있습니다.
          </Text>
          <Text size="4vw" margin="6px 0px" color="rgb(90,90,90)">
            제철에 따라, 재료에 따라 그리고 숙성에 따라
          </Text>
          <Text size="4vw" margin="6px 0px" color="rgb(90,90,90)">
            색다른 식감과 풍미를 느껴보시길 바랍니다.
          </Text>
        </AboutContentWrapper>
      </AboutSection>
      <AboutSection>
        <AboutContentDynamicWrapper direction="row">
          <AboutImage src="../source/images/about1.png" />
          <AboutTextWrapper>
            <AboutText>大道無門</AboutText>
            <Text size="4vw" margin="6px 0px" color="black">
              대도무문 : 정도에는 거칠것이 없다
            </Text>
            <EmptyBox height="2vw" />
            <Text size="4vw" margin="6px 0px" color="rgb(90,90,90)">
              스승의 신념을 이어받아
            </Text>
            <Text size="4vw" margin="6px 0px" color="rgb(90,90,90)">
              스시 한 점 마다
            </Text>
            <Text size="4vw" margin="6px 0px" color="rgb(90,90,90)">
              거짓없이
            </Text>
            <Text size="4vw" margin="6px 0px" color="rgb(90,90,90)">
              정직함을 담아 요리합니다.
            </Text>
          </AboutTextWrapper>
        </AboutContentDynamicWrapper>
      </AboutSection>
      <AboutSection>
        <AboutContentDynamicWrapper direction="row">
          <AboutImage src="../source/images/about2.png" />
          <AboutTextWrapper>
            <Text
              size="7vw"
              color="black"
              shadow="1px 1.5px 2px gray"
              margin="4vw 0px"
            >
              오감
            </Text>
            <EmptyBox height="2vw" />
            <Text size="4vw" margin="6px 0px" color="rgb(90,90,90)">
              스시하루나만의 숙성법으로
            </Text>
            <Text size="4vw" margin="6px 0px" color="rgb(90,90,90)">
              생선의 단맛, 신맛, 쓴맛, 향을 극대화 시켜
            </Text>
            <Text size="4vw" margin="6px 0px" color="rgb(90,90,90)">
              사람의 오감을 예민하게 만들어
            </Text>
            <Text size="4vw" margin="6px 0px" color="rgb(90,90,90)">
              "더 먹고싶다!"
            </Text>
            <Text size="4vw" margin="6px 0px" color="rgb(90,90,90)">
              라는 생각이 들게끔합니다.
            </Text>
          </AboutTextWrapper>
        </AboutContentDynamicWrapper>
      </AboutSection>
    </AboutWrapper>
  );
};

export default About;
