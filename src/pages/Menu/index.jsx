import React from "react";
import styled from "styled-components";

import Text from "components/Text";
import EmptyBox from "components/EmptyBox";
import device from "components/device";

const MenuWrapper = styled.div`
  width: 100vw;
  max-width: 100%;
  padding: 5vw 0vw;
`;

const MenuSection = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  background: ${(props) => (props.background ? props.background : "white")};
  border: none;
`;

const MenuContentWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  padding: 10vw 0vw;
  @media ${device.md} {
    padding: 5vw 0vw;
  }
`;

const FlexdirectionRow = styled.div`
  display: flex;
  flex-direction: row;
  margin: 10vw 0vw;
  @media ${device.md} {
    margin: 5vw 0vw;
  }
`;

const FishGuideWrapper = styled.div`
  width: 93vw;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0px 1vw;
  margin: 5vw 0;
  .fishHeight {
    height: 10vw;
  }
  @media ${device.md} {
    width: 60vw;
    margin: 3vw 0;
    .fish5 {
      height: 4vw;
    }
  }
`;

const FishTextWrapper = styled.div`
  width: 75%;
  display: flex;
  flex-direction: column;
`;

const FishImage = styled.img`
  width: 20vw;
  height: 14vw;
  @media ${device.md} {
    width: 10vw;
    height: 7vw;
  }
`;

const Menu = () => {
  return (
    <MenuWrapper>
      <MenuSection>
        <MenuContentWrapper>
          <Text
            size="4.4vw"
            color="rgb(90,90,90)"
            margin="20vw 0vw"
            pcSize="2.2vw"
            pcMargin="5vw 0vw"
          >
            스시하루나는 오마카세 단일 코스로 운영하고 있습니다.
          </Text>
          <FlexdirectionRow>
            <Text color="rgb(90,90,90)" size="4.4vw" pcSize="2.2vw">
              하루나 오마카세
            </Text>
            <Text
              color="rgb(90,90,90)"
              size="4.4vw"
              margin="0 8vw"
              pcSize="2.2vw"
              pcMargin="0 4vw"
            >
              ...
            </Text>
            <Text color="rgb(90,90,90)" size="4.4vw" pcSize="2.2vw">
              50,000
            </Text>
          </FlexdirectionRow>
        </MenuContentWrapper>
      </MenuSection>
      <MenuSection>
        <MenuContentWrapper>
          <Text color="black" size="8vw" pcSize="4vw" margin="4vw 0">
            재료소개
          </Text>
          <FishGuideWrapper>
            <FishImage
              src="../source/images/fish9.png"
              className="fishHeight"
            />
            <FishTextWrapper>
              <Text color="black" size="6vw" pcSize="3vw" margin="1vw 0">
                고등어
              </Text>
              <Text color="black" size="4vw" pcSize="2vw">
                기름이 꽉 찬 고등어를 소금과 식초에 절이는 시메 방법을 이용한 뒤
                마지막으로 된장과 간장을 이용 하여 고급스런 감칠 맛을 내는데
                주력 하였습니다. 보통 일주일에서 한달 사이 저온에서 조금씩 감칠
                맛을 끌어 올려 내었습니다.
              </Text>
            </FishTextWrapper>
          </FishGuideWrapper>
          <FishGuideWrapper>
            <FishImage src="../source/images/fish1.png" />
            <FishTextWrapper>
              <Text color="black" size="6vw" pcSize="3vw">
                도미
              </Text>
              <Text color="black" size="4vw" pcSize="2vw">
                소금과 된장소스에 3일에서 2주일 정도 절여 솜사탕 처럼 입에서
                녹는 식감에 주력 하였습니다.
              </Text>
            </FishTextWrapper>
          </FishGuideWrapper>
          <FishGuideWrapper>
            <FishImage src="../source/images/fish2.png" />
            <FishTextWrapper>
              <Text color="black" size="6vw" pcSize="3vw">
                참치
              </Text>
              <Text color="black" size="4vw" pcSize="2vw">
                소금과 된장소스에 3일에서 2주일 정도 절여 솜사탕 처럼 입에서
                녹는 식감에 주력 하였습니다.
              </Text>
            </FishTextWrapper>
          </FishGuideWrapper>
          <FishGuideWrapper>
            <FishImage src="../source/images/fish3.png" />
            <FishTextWrapper>
              <Text color="black" size="6vw" pcSize="3vw">
                광어
              </Text>
              <Text color="black" size="4vw" pcSize="2vw">
                소금만 사용 하여 3일 이내 숙성 후 자연산 광어의 단맛을 최대한
                끌어 올리는데 집중했습니다.
              </Text>
            </FishTextWrapper>
          </FishGuideWrapper>
          <FishGuideWrapper>
            <FishImage src="../source/images/fish4.png" />
            <FishTextWrapper>
              <Text color="black" size="6vw" pcSize="3vw">
                멸치
              </Text>
              <Text color="black" size="4vw" pcSize="2vw">
                히말라야산 암염과 몽골산 암염을 이용하여 식초에 절여 낸뒤
                촉촉하면서도 고소한 맛을 극대화 시켜 내고 있습니다.
              </Text>
            </FishTextWrapper>
          </FishGuideWrapper>
          <FishGuideWrapper>
            <FishImage
              src="../source/images/fish5.png"
              className="fishHeight"
            />
            <FishTextWrapper>
              <Text color="black" size="6vw" pcSize="3vw">
                삼치
              </Text>
              <Text color="black" size="4vw" pcSize="2vw">
                은은한 단맛을 가진 삼치는 소금과 적식초를 이용하여 침샘을
                자극하는데 중점을 두었으며 주로 코스중 세번 째에 배치 하여
                맛있게 즐길수 있게 준비 하였습니다.
              </Text>
            </FishTextWrapper>
          </FishGuideWrapper>
          <FishGuideWrapper>
            <FishImage src="../source/images/fish6.png" />
            <FishTextWrapper>
              <Text color="black" size="6vw" pcSize="3vw">
                아나고
              </Text>
              <Text color="black" size="4vw" pcSize="2vw">
                바다장어 아나고는 에도마에 조리 방식으로 손질후 간장 베이스
                소스에 끓여서 사용하고 있습니다. 껍질은 바삭하고 속은 부드러운
                식감을 내고있습니다.
              </Text>
            </FishTextWrapper>
          </FishGuideWrapper>
          <FishGuideWrapper>
            <FishImage src="../source/images/fish7.png" />
            <FishTextWrapper>
              <Text color="black" size="6vw" pcSize="3vw">
                전갱이
              </Text>
              <Text color="black" size="4vw" pcSize="2vw">
                고등어와 마찬가지로 소금과 식초 된장을 이용 하여 절여 내는데
                고등어 보다는 상큼한 맛을 내기 위해 강하게 절이지는 않고
                은은하면서 고소하게 녹아내리는 식감에 중점을 두고 있습니다.
              </Text>
            </FishTextWrapper>
          </FishGuideWrapper>

          <FishGuideWrapper>
            <FishImage src="../source/images/fish8.png" />
            <FishTextWrapper>
              <Text color="black" size="6vw" pcSize="3vw">
                계란
              </Text>
              <Text color="black" size="4vw" pcSize="2vw">
                새우살 흰살생선 산마 간장 설탕 소금 미림 유자 버터 생크림 등
                10가지 재료를 이용하여 굽거나 쪄내어 촉촉하면서도 달콤한 맛이
                아주 인상 적입니다.
              </Text>
            </FishTextWrapper>
          </FishGuideWrapper>
        </MenuContentWrapper>
      </MenuSection>
    </MenuWrapper>
  );
};

export default Menu;
