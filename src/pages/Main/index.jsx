import React, { useEffect } from "react";

import styled from "styled-components";

import MainBanner from "components/MainBanner";
import Text from "components/Text";
import EmptyBox from "components/EmptyBox";
import device from "components/device";

const MainWrapper = styled.div`
  width: 100vw;
  max-width: 100%;
`;

const MainSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${(props) => (props.background ? props.background : "white")};
  border: none;
`;

const MainContentWrapper = styled.div`
  max-width: 1200px;
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 12vw 0;

  @media ${device.md} {
    padding: 6vw 0;
  }
`;

const SushiIcon = styled.img`
  width: 28vw;
  margin-bottom: 5px;

  @media ${device.md} {
    width: 10vw;
  }
`;

const InfoLogoWrapper = styled.div`
  width: 100%;
`;

const BlackLogo = styled.img`
  width: 18vw;
  float: right;

  @media ${device.md} {
    width: 7vw;
  }
`;

const MainGuideWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  padding: 8vw 5vw;

  @media ${device.md} {
    flex-direction: row;
    justify-content: space-between;
    padding: 1.5vw 3vw;
  }
`;

const GuideWrapper = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  background-image: ${(props) => (props.url ? props.url : "")};

  margin: 4vw 0px;
  padding: 4vw 0px;

  .pcBR {
    display: none;
  }

  @media ${device.md} {
    margin: 4vw 1.9vw;
    padding: 7vw 0px;
    background-size: cover;
    .pcBR {
      display: block;
    }

    .pcText {
      line-height: 2.4vw;
    }
  }
`;

const FlexDirectionRow = styled.div`
  display: flex;
  flex-direction: row;

  @media ${device.md} {
    flex-direction: column;
  }
`;

const PhotoWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: space-between;
  padding: 5vw 5vw;
  flex-wrap: wrap;

  .pcSushi {
    display: none;
  }

  @media ${device.md} {
    .pcSushi {
      display: block;
    }
  }
`;

const SushiPhoto = styled.img`
  width: 43vw;
  height: 43vw;
  margin: 2vw 0;

  @media ${device.md} {
    width: 21vw;
    height: 22vw;
    margin: 1vw 0;
  }
`;

const LocationWrapper = styled.div`
  width: 100%;
  display: flex;
  padding: 5vw 2vw;
  align-items: center;
  flex-direction: column;
`;

const MapBox = styled.div`
  width: 70vw;
  height: 70vw;
  background-image: url("../source/images/sushiharuna_map.png");
  background-size: cover;
  background-position: center center;

  @media ${device.md} {
    width: 70vw;
    height: 45vw;
  }
`;

const Highlight = styled.span`
  @media ${device.md} {
    font-size: ${(props) => props.size};
  }
`;

const LocationTextWrapper = styled.div`
  float: left;
  width: 70vw;

  img {
    width: 3vw;
    height: 3vw;
    margin-right: 1vw;
    margin-bottom: -0.6vw;
  }

  @media ${device.md} {
    width: 70vw;

    img {
      width: 2vw;
      height: 2vw;
    }
  }
`;

const Main = () => {
  useEffect(() => {
    kakao.maps.load(() => {
      const container = document.getElementById("map");
      const options = {
        center: new kakao.maps.LatLng(35.873001, 128.618234),
        level: 3,
      };
      const map = new kakao.maps.Map(container, options);
      const position = new kakao.maps.LatLng(35.873001, 128.618234);
      const marker = new kakao.maps.Marker({ position });

      marker.setMap(map);
    });
  });

  return (
    <MainWrapper>
      <MainSection>
        <MainBanner />
      </MainSection>
      <MainSection>
        <MainContentWrapper>
          <SushiIcon src="../source/images/sushiicon.png" />
          <Text size="8vw" pcSize="3vw">
            스시하루나
          </Text>
          <EmptyBox height="12vw" pcHeight="4vw" />
          <Text margin="8px 0px" pcMargin="15px 0px" pcSize="2vw">
            하루나는 봄안개라는 의미를 가지고 있습니다.
          </Text>
          <Text margin="8px 0px" pcMargin="15px 0px" pcSize="2vw">
            스시하루나는 숙성초밥을 전문으로
          </Text>
          <Text margin="8px 0px" pcMargin="15px 0px" pcSize="2vw">
            입안에 넣는 순간 부드럽게
          </Text>
          <Text margin="8px 0px" pcMargin="15px 0px" pcSize="2vw">
            사르르 녹는 초밥을 맛 보실 수 있습니다.
          </Text>
          <Text margin="8px 0px" pcMargin="15px 0px" pcSize="2vw">
            또, 다양한 재료에따라 느껴지는
          </Text>
          <Text margin="8px 0px" pcMargin="15px 0px" pcSize="2vw">
            풍미도 함께 즐겨보시기 바랍니다.
          </Text>
          <EmptyBox height="7vw" />
          <InfoLogoWrapper>
            <BlackLogo src="../source/images/logo_black.png" />
          </InfoLogoWrapper>
        </MainContentWrapper>
      </MainSection>
      <MainSection background="rgb(45,45,47)">
        <MainGuideWrapper>
          <GuideWrapper url="url('../source/images/wood_t1.jpg')">
            <Text size="8vw" pcSize="4vw">
              영업시간
            </Text>
            <Text
              size="6vw"
              margin="5px 0px"
              pcSize="2.5vw"
              pcMargin="30px 0px"
            >
              매일 11:30 ~ 22:00
            </Text>
            <FlexDirectionRow>
              <Text size="4vw" pcSize="2.3vw" pcMargin="35px 0px">
                break time
                <br />
                14:00~17:00
              </Text>
              <EmptyBox height="1px" width="5vw" />
              <Text size="4vw" pcSize="2.3vw" pcMargin="35px 0px">
                last order
                <br />
                21:00
              </Text>
            </FlexDirectionRow>
          </GuideWrapper>
          <GuideWrapper url="url('../source/images/wood_t2.jpg')">
            <Text size="8vw" pcSize="4vw">
              메뉴
            </Text>
            <Text
              size="6vw"
              margin="8px 0px"
              pcSize="2.3vw"
              pcMargin="50px 0px"
            >
              하루나 오마카세 ... 50,000
            </Text>
            <Text
              size="3vw"
              pcSize="1.7vw"
              pcMargin="50px 0px"
              className="pcText"
            >
              <Highlight size="2.3vw">오마카세</Highlight>란 '맡긴다' 라는
              <br className="pcBR" /> 뜻으로, 손님은 요리사에게
              <br />
              온전히 메뉴를 맡기고 요리사는 <br className="pcBR" />
              가장 신선한 식재료로
              <br />
              요리를 만들어 내놓는 것을 뜻합니다.
            </Text>
          </GuideWrapper>
          <GuideWrapper url="url('../source/images/wood_t3.jpg')">
            <Text size="8vw" pcSize="4vw">
              예약문의
            </Text>
            <Text
              size="4.2vw"
              margin="10px 0px"
              pcSize="2vw"
              pcMargin="85px 0px"
              className="pcText"
            >
              <Highlight size="2.4vw">스시하루나</Highlight>
              는 <br className="pcBR" />
              예약제로 운영됩니다.
              <br />
              반드시 예약 후 <br className="pcBR" />
              방문 부탁드립니다.
            </Text>
            <Text
              size="5vw"
              pcSize="3vw"
              pcMargin="40px 0px"
              onClick={() => {
                document.location.href = "tel:010-3333-9242";
              }}
            >
              010.3333.9242
            </Text>
          </GuideWrapper>
        </MainGuideWrapper>
      </MainSection>
      <MainSection background="rgb(45,45,47)">
        <PhotoWrapper>
          <SushiPhoto src="../source/images/sushi_6.jpg" />
          <SushiPhoto src="../source/images/sushi_5.jpg" />
          <SushiPhoto src="../source/images/sushi_3.jpg" />
          <SushiPhoto src="../source/images/sushi_2.jpg" />
          <SushiPhoto src="../source/images/sushi_4.jpg" />
          <SushiPhoto src="../source/images/sushi_1.jpg" />
          <SushiPhoto src="../source/images/sushi_7.jpg" className="pcSushi" />
          <SushiPhoto src="../source/images/sushi_8.jpg" className="pcSushi" />
        </PhotoWrapper>
      </MainSection>
      <MainSection>
        <LocationWrapper>
          <Text
            color="black "
            size="8vw"
            margin="8px 0px"
            pcSize="4vw"
            pcMargin="2vw 0vw"
          >
            오시는길
          </Text>
          <EmptyBox width="0px" height="0px" pcWidth="1px" pcHeight="3vw" />
          <MapBox id="map" />
          <LocationTextWrapper>
            <Text color="black" size="3vw" margin="1vw 0px" pcSize="2vw">
              <img src="../source/images/map.png" alt="" />
              대구 동구 송라로 65 (신천동 733-1)
            </Text>
            <Text color="black" size="3vw" margin="1vw 0px" pcSize="2vw">
              <img src="../source/images/subway.png" alt="" />
              신천역 4번 출구에서 147m
            </Text>
            <Text color="black" size="3vw" margin="1vw 0px" pcSize="2vw">
              <img src="../source/images/bus.png" alt="" />
              410, 909, 동구2 (시청 방면) 신천역 하차 5m
            </Text>
          </LocationTextWrapper>
        </LocationWrapper>
      </MainSection>
    </MainWrapper>
  );
};

export default Main;
