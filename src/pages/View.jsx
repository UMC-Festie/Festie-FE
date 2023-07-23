import React, { useState } from "react";
import styled from "styled-components";
import icon from "../images/image.jpg";
import image43 from "../images/image 43.png";

const Container = styled.div`
  display: flex;
  align-items: flex-start;
  padding-left: 90px;
  padding-top: 42px;
`;

const ContentContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin-top: 42px;
`;

const RectangleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-top: 19.65px;
`;

const TextContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const Word = styled.div`
  color: var(--festie-gray-500, #b7b7b7);
  font-family: "SUIT Variable";
  font-size: 12px;
  font-style: normal;
  font-weight: 500;
  line-height: 18px;
`;

const Image = styled.img`
  margin-top: 14px;
  width: 339px;
  height: 480.354px;
  flex-shrink: 0;
  border-radius: 19px;
`;

const Image43 = styled.img`
  width: 910px;
  height: 1896px;
  flex-shrink: 0;
`;

const Rectangle = styled.div`
  display: inline-flex;
  padding: 10px 18px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 21px;
  border: 1px solid var(--festie-gray-500, #b7b7b7);
  background: #fff;
  cursor: pointer;
  padding: 10px 18px;
  width: fit-content;
`;

const CustomSvg = styled.svg`
  width: 22px;
  height: 22px;
`;

const CustomSvgBook = styled.svg`
  width: 32px;
  height: 32px;
`;

const SvgPath = styled.path`
  stroke-width: 1.5;
  stroke-linecap: round;
  stroke-linejoin: round;
  fill: none;
`;

const RectangleRight = styled.div`
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 10px;
  border-radius: 19px;
  background: var(--festie-primary-orange, #ff7a00);
  width: fit-content;
  height: 22px;
  margin-top: 74px;
  flex-shrink: 0;
`;

const TextInsideRectangle = styled.div`
  color: var(--festie-white, #fff);
  font-family: "SUIT Variable";
  font-size: 18px;
  font-style: normal;
  font-weight: 600;
  line-height: normal;
`;

const DateText = styled.div`
  color: var(--festie-gray-800, #3a3a3a);
  font-family: SUIT Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.2px;
`;

const TimeText = styled.div`
  color: var(--festie-gray-800, #3a3a3a);
  margin-top: 22px;
  font-family: SUIT Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.2px;
`;

const LocationText = styled.div`
  color: var(--festie-gray-800, #3a3a3a);
  margin-top: 22px;
  font-family: SUIT Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.2px;
`;

const Info = styled.div`
  color: var(--festie-gray-800, #3a3a3a);
  margin-top: 22px;
  font-family: SUIT Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.2px;
`;

const ContentInfo = styled.div`
  margin-left: 40px;
  display: flex;
  flex-direction: column;
`;

const ContentTitle = styled.div`
  color: var(--festie-gray-900, #252525);
  font-family: "SUIT Variable";
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 42px;
  letter-spacing: 0.3px;
  margin-top: 10px;
  flex-shrink: 0;
  width: 625px;
  margin-bottom: 92px;
  white-space: pre-line;
`;

const ContentText = styled.div`
  color: var(--festie-gray-700, #555);
  margin-top: 22px;
  font-family: SUIT Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0.2px;
  margin-left: 59px;
`;

const Content2Text = styled.div`
  color: var(--festie-gray-700, #555);
  margin-top: 0;
  font-family: SUIT Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0.2px;
  margin-left: 59px;
`;

const Content3Text = styled.div`
  color: var(--festie-gray-700, #555);
  margin-top: 22px;
  font-family: SUIT Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0.2px;
  margin-left: 19px;
  display: flex;
  align-items: center;
  gap: 8px;
`;

const TextWrapper = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  gap: 22px;
  margin-bottom: 92px;
`;

const RelatedInfoWrapper = styled.div`
  display: inline-flex;
  padding: 12px 20px;
  align-items: center;
  gap: 8px;
  border-radius: 26px;
  background: var(--festie-primary-orange, #ff7a00);
  margin-top: 26px;
`;

const Wrapper = styled.div`
  margin-top: -22px;
`;

const TogetherText = styled.div`
  display: flex;
  align-items: center;
  color: var(--festie-white, #fff);
  font-family: SUIT Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;

  svg {
    width: 24px;
    height: 24px;
    margin-left: 6px;
    vertical-align: middle;
  }
`;

const WordSelect = styled.div`
  color: ${(props) =>
    props.active ? "var(--festie-primary-orange, #FF7A00)" : "inherit"};
  font-family: SUIT Variable;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  margin-left: 32px;
  cursor: pointer;
`;

const TextContainerSelect = styled.div`
  display: flex;
  margin-top: 44px;
  margin-left: -32px;
  position: relative;
`;

const HorizontalLine = styled.div`
  position: absolute;
  bottom: -10px;
  left: 0;
  width: 1100px;
  height: 0px;
  flex-shrink: 0;
  border-bottom: 1px solid var(--festie-gray-200, #e8e8e8);
  margin-top: 11px;
  margin-left: 32px;
`;

const SelectWrapper = styled.div``;

const DetailsContent = () => {
  return (
    <div style={{ width: "600px", height: "400px" }}>
      <Image43 src={image43} alt="Your Image" />
    </div>
  );
};

const ImageContent = () => {
  return (
    <div style={{ width: "600px", height: "400px" }}>
      <h2>abc</h2>
    </div>
  );
};

const ReviewContent = () => {
  return (
    <div style={{ width: "600px", height: "400px" }}>
      <h3>123</h3>
    </div>
  );
};

export default function Main() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [activeTab, setActiveTab] = useState("");

  const repeatSvg = (color, path) => (
    <CustomSvg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 16 16"
      fill={color}
    >
      <SvgPath d={path} stroke={color} />
    </CustomSvg>
  );

  const handleRectangle1Click = () => {
    setCount1((prevCount) => prevCount + 1);
  };

  const handleRectangle2Click = () => {
    setCount2((prevCount) => prevCount + 1);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  return (
    <Container>
      <ContentContainer>
        <TextContainer>
          <Word className="Word">홈</Word>
          {repeatSvg("#B7B7B7", "M6 12L10 8L6 4")}
          <Word className="Word">정보보기</Word>
          {repeatSvg("#B7B7B7", "M6 12L10 8L6 4")}
          <Word className="Word">공연</Word>
        </TextContainer>
        <Image src={icon} alt="Your Image" />
        <RectangleContainer>
          <Rectangle onClick={handleRectangle1Click}>
            <CustomSvg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <SvgPath
                d="M6.41536 10.083L10.082 1.83301C10.8114 1.83301 11.5109 2.12274 12.0266 2.63846C12.5423 3.15419 12.832 3.85366 12.832 4.58301V8.24967H18.0204C18.2861 8.24667 18.5493 8.30147 18.7918 8.41029C19.0343 8.51911 19.2502 8.67935 19.4246 8.8799C19.599 9.08044 19.7277 9.31651 19.8018 9.57174C19.8759 9.82697 19.8936 10.0953 19.8537 10.358L18.5887 18.608C18.5224 19.0452 18.3003 19.4436 17.9634 19.73C17.6265 20.0164 17.1975 20.1713 16.7554 20.1663H6.41536M6.41536 10.083V20.1663M6.41536 10.083H3.66536C3.17913 10.083 2.71282 10.2762 2.369 10.62C2.02519 10.9638 1.83203 11.4301 1.83203 11.9163V18.333C1.83203 18.8192 2.02519 19.2856 2.369 19.6294C2.71282 19.9732 3.17913 20.1663 3.66536 20.1663H6.41536"
                stroke="#555555"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </CustomSvg>
            <span>{count1}</span>
          </Rectangle>
          <Rectangle onClick={handleRectangle2Click}>
            <CustomSvg
              xmlns="http://www.w3.org/2000/svg"
              width="22"
              height="22"
              viewBox="0 0 22 22"
              fill="none"
            >
              <SvgPath
                d="M15.5841 11.9167L11.9174 20.1667C11.1881 20.1667 10.4886 19.8769 9.97288 19.3612C9.45716 18.8455 9.16743 18.146 9.16743 17.4167V13.75H3.97909C3.71334 13.753 3.45012 13.6982 3.20765 13.5894C2.96519 13.4806 2.74928 13.3203 2.57489 13.1198C2.4005 12.9192 2.2718 12.6832 2.1977 12.4279C2.1236 12.1727 2.10588 11.9044 2.14576 11.6417L3.41076 3.39167C3.47706 2.95451 3.69911 2.55603 4.03601 2.26967C4.37291 1.9833 4.80196 1.82834 5.24409 1.83334H15.5841M15.5841 11.9167V1.83334M15.5841 11.9167H18.0316C18.5504 11.9258 19.0545 11.7442 19.4482 11.4063C19.8419 11.0683 20.0979 10.5975 20.1674 10.0833V3.66667C20.0979 3.15248 19.8419 2.68172 19.4482 2.34376C19.0545 2.0058 18.5504 1.82416 18.0316 1.83334H15.5841"
                stroke="#555555"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </CustomSvg>
            <span>{count2}</span>
          </Rectangle>
        </RectangleContainer>
        <TextContainerSelect>
          <WordSelect
            active={activeTab === "상세정보"}
            onClick={() => handleTabClick("상세정보")}
          >
            상세정보
          </WordSelect>
          <WordSelect
            active={activeTab === "이미지"}
            onClick={() => handleTabClick("이미지")}
          >
            이미지
          </WordSelect>
          <WordSelect
            active={activeTab === "후기"}
            onClick={() => handleTabClick("후기")}
          >
            후기
          </WordSelect>
          <HorizontalLine />
        </TextContainerSelect>
      </ContentContainer>
      <ContentInfo>
        <RectangleRight>
          <TextInsideRectangle>D-24</TextInsideRectangle>
        </RectangleRight>
        <ContentWrapper style={{ paddingBottom: "40px" }}>
          <ContentTitle>
            2023 LEE SUNG KYOUNG ASIA FAN MEETING [BE CLOSER] IN SEOUL
          </ContentTitle>
          <Wrapper>
            <TextWrapper>
              <DateText>날짜</DateText>
              <Content2Text>2023.07.22</Content2Text>
            </TextWrapper>
            <TextWrapper>
              <TimeText>시간</TimeText>
              <ContentText>토 18:00 (100분)</ContentText>
            </TextWrapper>
            <TextWrapper>
              <LocationText>장소</LocationText>
              <ContentText>건국대학교 서울캠퍼스 새천년관대공연장</ContentText>
            </TextWrapper>
            <TextWrapper>
              <Info>관련정보</Info>
              <Content3Text>
                <CustomSvgBook
                  xmlns="http://www.w3.org/2000/svg"
                  width="32"
                  height="32"
                  viewBox="0 0 32 32"
                  fill="none"
                >
                  <path
                    d="M24 17.3333V25.3333C24 26.0406 23.719 26.7189 23.219 27.219C22.7189 27.719 22.0406 28 21.3333 28H6.66667C5.95942 28 5.28115 27.719 4.78105 27.219C4.28095 26.7189 4 26.0406 4 25.3333V10.6667C4 9.95942 4.28095 9.28115 4.78105 8.78105C5.28115 8.28095 5.95942 8 6.66667 8H14.6667"
                    stroke="#FFE500"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M20 4H28V12"
                    stroke="#FFE500"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                  <path
                    d="M13.332 18.6667L27.9987 4"
                    stroke="#FFE500"
                    strokeWidth="2.66667"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </CustomSvgBook>
                <span>예매하기</span>
              </Content3Text>
            </TextWrapper>
            <RelatedInfoWrapper>
              <TogetherText>
                같이가요 작성하기
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 24 24"
                  fill="none"
                >
                  <path
                    d="M5 12H19"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                  <path
                    d="M12 5L19 12L12 19"
                    stroke="white"
                    stroke-width="2"
                    stroke-linecap="round"
                    stroke-linejoin="round"
                  />
                </svg>
              </TogetherText>
            </RelatedInfoWrapper>
          </Wrapper>
          <SelectWrapper>
            {activeTab === "상세정보" && <DetailsContent />}
            {activeTab === "이미지" && <ImageContent />}
            {activeTab === "후기" && <ReviewContent />}
          </SelectWrapper>
        </ContentWrapper>
      </ContentInfo>
    </Container>
  );
}
