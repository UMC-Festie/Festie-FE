import React, { useState } from "react";
import styled from "styled-components";
import FestivalImage from "../images/FestivalImage1.png"
import InstagramLogo from "../images/InstagramLogo.png"
import FestivalMain from "../images/FestivalMainImage.png"

export default function Main() {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [activeTab, setActiveTab] = useState("상세정보");
  const eventDetails = `
    부산국제매직페스티벌은 2006년부터 시작되어 문화콘텐츠 산업의 떠오르는 블루오션인 ‘매직’을 테마로 한 국내 100만 매직 매니아의 꿈의 축제인 국내 유일 세계 최대 규모의 마술 페스티벌이다. \n
    올해 10월까지 진행되는 제18회 부산국제매직페스티벌에는 매직서커스[봄], 매직컨벤션, 제5회 버스킹챔피언십, 매직서커스[가을], 한가위 매직 판타지아 등 다양한 행사들이 준비되어있다.\n

    [행사내용]\n
    \n
    행사별 일정\n
    1. 매직서커스[봄]\n
    기간 : 2023년 4월 15일 ~ 6월 11일 (매주 토, 일) * 6월 6일(화) 추가운영\n
    장소 : 스포원파크 꿈나래어린이극장\n
    프로그램 : 매직서커스(공연), 마술놀이(체험), 세계마법체험전(전시)\n
    주최/주관 : (사)부산국제매직페스티벌조직위원회\n
    후원/협찬 : 부산광역시, 해운대구, 부산예술대학교, 부산지방공단스포원\n
    예매처 : YES24, 네이버, 놀이의발견 등\n

    2. 매직컨벤션\n
    기간 : 2023년 6월 30일(금) ~ 7월 2일(일)\n
    장소 : 영화의전당\n
    프로그램 : FISM QC BIMF 국제마술대회(대회), 매직갈라쇼(공연), 렉쳐(강연), 매직토크쇼, 매직라운지(체험) 등\n
    주최/주관 : (사)부산국제매직페스티벌조직위원회, (재)영화의전당\n
    후원/협찬 : 부산광역시, 해운대구, 부산예술대학교\n
    예매처 : YES24, 네이버, 영화의전당 등\n
    \n
    3. 제5회 버스킹챔피언십\n
    기간 : 2023년 7월 1일(토) ~ 2일(일)\n
    장소 : 해운대 구남로 일대\n
    프로그램 : 국제매직버스킹챔피언십(대회) 등\n
    주최/주관 : (사)부산국제매직페스티벌조직위원회\n
    후원/협찬 : 부산광역시, 해운대구, 부산예술대학교\n
    \n
    4. 매직서커스[가을]\n
    기간 : 2023년 9월 ~ 10월 (매주 토, 일) * 10월 3일(화), 10월 9일(월) 추가운영\n
    장소 : 스포원파크 꿈나래어린이극장\n
    프로그램 : 매직서커스(공연), 마술놀이(체험), 세계마법체험전(전시)\n
    주최/주관 : (사)부산국제매직페스티벌조직위원회\n
    후원/협찬 : 부산광역시, 해운대구, 부산예술대학교, 부산지방공단스포원\n
    예매처 : YES24, 네이버, 놀이의발견 등\n
    \n
    5. 한가위 매직 판타지아\n
    기간 : 2023년 9월 29일(금) ~ 10월 1일(일)\n
    장소 : 부산시민회관 소극장\n
    프로그램 : 기획공연, 체험 프로그램 등\n
    주최/주관 : (사)부산국제매직페스티벌조직위원회\n
    후원/협찬 : 부산광역시, 해운대구, 부산예술대학교\n
    예매처 : YES24, 네이버, 놀이의발견 등\n
`;
const Manager = "덕구"
const Inquiry = "010-1234-5678 / https://www.hibimf.org/"

  const handleRectangle1Click = () => {
    setCount1((prevCount) => prevCount + 1);
  };

  const handleRectangle2Click = () => {
    setCount2((prevCount) => prevCount + 1);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };
  const DetailsContent = () => {
    return (
      <ContentsWrap style={{ width: "910px" }}>
        {eventDetails}
      </ContentsWrap>
    );
  };
  const ImageContent = () => {
    return (
      <div>
        <FestivalMainImage src={FestivalImage} alt="Festival Image"></FestivalMainImage>
      </div>
    );
  };

  return (
    <Container>
      <ContentContainer>
        <TextContainer>
          <Word className="Word">홈</Word>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="#B7B7B7" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <Word className="Word">정보보기</Word>
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
            <path d="M6 12L10 8L6 4" stroke="#B7B7B7" stroke-width="1.33333" stroke-linecap="round" stroke-linejoin="round"/>
          </svg>
          <Word className="Word">축제</Word>
        </TextContainer>
        <Image src={FestivalMain} alt="Your Image" />
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
          <HorizontalLine />
        </TextContainerSelect>
      </ContentContainer>
      <ContentInfo>
        <RectangleRight>
          <TextInsideRectangle>행사중</TextInsideRectangle>
        </RectangleRight>
        <ContentWrapper style={{ paddingBottom: "40px" }}>
          <ContentTitle>
            부산국제매직페스티벌
          </ContentTitle>
          <Wrapper>
            <TextWrapper>
              <Text>기간</Text>
              <ContentText>2023.04.15 ~ 2023.10.29</ContentText>
            </TextWrapper>
            <TextWrapper>
              <Text>위치</Text>
              <ContentText>토 18:00 (100분)</ContentText>
            </TextWrapper>
            <TextWrapper>
              <Text>가격</Text>
              <ContentText>프로그램별 상이(유/무료)</ContentText>
            </TextWrapper>
            <TextWrapper>
              <Text>주최</Text>
              <ContentText>(사)부산국제매직페스티벌 조직위원회</ContentText>
            </TextWrapper>
            <TextWrapper>
              <Text>전화번호</Text>
              <Content3Text>051-626-7002</Content3Text>
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
                <InfoText>공식홈페이지</InfoText>
                <InstaLogo src={InstagramLogo} alt="Instagram Logo"></InstaLogo>
                <InfoText>@busanmagicfestival</InfoText>
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
          
        </ContentWrapper>
      </ContentInfo>
      <SelectWrapper>
            {activeTab === "상세정보" && <DetailsContent />}
            {activeTab === "이미지" && <ImageContent />}
          </SelectWrapper>
          <ManagerInquiryWrap><ManagerInquiry>관리자</ManagerInquiry><ManagerInquiryText>{Manager}</ManagerInquiryText><ManagerInquiry>문의처</ManagerInquiry><ManagerInquiryText>{Inquiry}</ManagerInquiryText></ManagerInquiryWrap>
    </Container>
  );
}


const Container = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
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
  cursor: pointer;
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

const Text = styled.div`
  color: var(--festie-gray-800, #3a3a3a);
  font-family: SUIT Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.2px;
  margin-top: 20px;
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

const InfoText = styled.div`
  color: var(--festie-gray-700, #555);
  font-family: SUIT Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  letter-spacing: 0.2px;
`

const InstaLogo = styled.img `
  cursor: pointer;
  margin-left: 30px;
`

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
  margin-bottom: 30px;
  white-space: pre-line;
`;

const ContentText = styled.div`
  color: var(--festie-gray-700, #555);
  margin-top: 20px;
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
cursor: pointer;
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

const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContentsWrap = styled.div`
  margin-top: 50px;
  display: flex;
  justify-content: center;
  color: var(--festie-gray-800, #3A3A3A);
  font-family: SUIT Variable;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.18px;
  white-space: pre-line;
`

const ManagerInquiryWrap = styled.div`
  margin-top: 64px;
  margin-bottom: 128px;
  display: flex;
  height: 50px;
  border: 1px solid var(--festie-gray-300, #DFDFDF);
`

const ManagerInquiry = styled.div`
  width: 106.374px;
  border-right: 1px solid var(--festie-gray-300, #DFDFDF);
  background: var(--festie-gray-100, #F5F5F5);
  color: var(--festie-gray-800, #3A3A3A);
  font-family: SUIT Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.14px;
  text-align: center;
  padding: 15px 0px;
;`

const ManagerInquiryText = styled.div`
  padding: 15px 100px;
  justify-content: center;
  align-items: center;
  color: var(--festie-gray-800, #3A3A3A);
  font-family: SUIT Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  letter-spacing: 0.14px;
;`

const FestivalMainImage = styled.img `
  margin-top: 50px;
  border-radius: 30px;
`;