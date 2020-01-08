import * as React from "react";

import styled from "styled-components";

import MainBanner from "components/MainBanner";
import Text from "components/Text";
import EmptyBox from "components/EmptyBox";

declare let kakao: any;

const MainWrapper = styled.div`
  width: 100vw;
`;

const MainSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${props => (props.background ? props.background : "white")};
  border: none;
`;

const MainContentWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12vw 0;
`;

const SushiIcon = styled.img`
  width: 28vw;
  margin-bottom: 5px;
`;

const InfoLogoWrapper = styled.div`
  width: 100%;
`;

const BlackLogo = styled.img`
  width: 18vw;
  float: right;
`;

const MainGuideWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8vw 50px;
`;

const GuideWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: ${props => (props.url ? props.url : "")};
  margin: 4vw 0px;
  padding: 4vw 0px;
`;

const FlexDirectionRow = styled.div`
  display: flex;
  flex-direction: row;
`;

const PhotoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5vw 5vw;
  flex-wrap: wrap;
`;

const SushiPhoto = styled.img`
  width: 43vw;
  height: 43vw;
  margin: 2vw 0;
`;

const LocationWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 5vw 2vw;
  align-items: center;
  flex-direction: column;
`;

const MapBox = styled.div`
  width: 92vw;
  height: 92vw;
  background-image: url("../source/images/sushiharuna_map.png");
  background-size: cover;
  background-position: center center;
`;

const MapImage = styled.img`
  width: 100%;
  height: 100%;
`;

const Main = () => {
  return (
    <MainWrapper>
      <MainSection>
        <MainBanner />
      </MainSection>
      <MainSection>
        <MainContentWrapper>
          <SushiIcon src="../source/images/sushiicon.png" />
          <Text size="8vw">스시하루나</Text>
          <EmptyBox height="12vw" />
          <Text margin="8px 0px">
            하루나는 봄안개라는 의미를 가지고 있습니다.
          </Text>
          <Text margin="8px 0px">스시하루나는 숙성초밥을 전문으로</Text>
          <Text margin="8px 0px">입안에 넣는 순간 부드럽게</Text>
          <Text margin="8px 0px">사르르 녹는 초밥을 맛 보실 수 있습니다.</Text>
          <Text margin="8px 0px">또, 다양한 재료에따라 느껴지는</Text>
          <Text margin="8px 0px">풍미도 함께 즐겨보시기 바랍니다.</Text>
          <EmptyBox height="10vw" />
          <InfoLogoWrapper>
            <BlackLogo src="../source/images/logo_black.png" />
          </InfoLogoWrapper>
        </MainContentWrapper>
      </MainSection>
      <MainSection background="rgb(45,45,47)">
        <MainGuideWrapper>
          <GuideWrapper url="url('../source/images/wood_t1.jpg')">
            <Text size="8vw">영업시간</Text>
            <Text size="6vw" margin="5px 0px">
              매일 11:30 ~ 22:00
            </Text>
            <FlexDirectionRow>
              <Text size="4vw">
                break time
                <br />
                14:00~17:00
              </Text>
              <EmptyBox height="1px" width="5vw" />
              <Text size="4vw">
                break time
                <br />
                14:00~17:00
              </Text>
            </FlexDirectionRow>
          </GuideWrapper>
          <GuideWrapper url="url('../source/images/wood_t2.jpg')">
            <Text size="8vw">메뉴</Text>
            <Text size="6vw" margin="8px 0px">
              하루나 오마카세 ... 50,000
            </Text>
            <Text size="3vw">
              오마카세란 '맡긴다' 라는 뜻으로, 손님은 요리사에게
              <br />
              온전히 메뉴를 맡기고 요리사는 가장 신선한 식재료로
              <br />
              요리를 만들어 내놓는 것을 뜻합니다.
            </Text>
          </GuideWrapper>
          <GuideWrapper url="url('../source/images/wood_t3.jpg')">
            <Text size="8vw">예약문의</Text>
            <Text size="5vw" margin="10px 0px">
              스시하루나는 예약제로 운영됩니다.
              <br />
              반드시 예약 후 방문 부탁드립니다.
            </Text>
            <Text size="5vw">010.3333.9242</Text>
          </GuideWrapper>
        </MainGuideWrapper>
      </MainSection>
      <MainSection background="rgb(45,45,47)">
        <PhotoWrapper>
          <SushiPhoto src="../source/images/sushi1.png" />
          <SushiPhoto src="../source/images/sushi2.png" />
          <SushiPhoto src="../source/images/sushi3.png" />
          <SushiPhoto src="../source/images/sushi4.png" />
          <SushiPhoto src="../source/images/sushi5.png" />
          <SushiPhoto src="../source/images/sushi6.png" />
        </PhotoWrapper>
      </MainSection>
      <MainSection>
        <LocationWrapper>
          <Text size="8vw" margin="8px 0px">
            오시는길
          </Text>
          <MapBox id="map">
            {/* <MapImage src="../source/images/sushiharuna_map.png" /> */}
          </MapBox>
        </LocationWrapper>
      </MainSection>
    </MainWrapper>
  );
};

export default Main;
