import React, { useState, useEffect } from "react";
import styled from "styled-components";
import icon from "../assets/image.jpg";
import image43 from "../assets/image 43.png";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getCookie } from "../Cookies";

export default function PerformanceDetail() {
  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const handleRectangle1Click = () => {
    setCount1((prevCount) => prevCount + 1);
  };

  const handleRectangle2Click = () => {
    setCount2((prevCount) => prevCount + 1);
  };

  const [isMoreView, setIsMoreView] = useState(false); // 더보기&접기 상태 저장

  const onClickImageMoreViewButton = () => {
    setIsMoreView(!isMoreView);
  }; // 클릭시 상태 반전
  const { performanceId } = useParams();
  const accessToken = getCookie("accessToken");
  const [festivalData, setFestivalData] = useState(null);

  useEffect(() => {
    axios
      .get(`${PROXY}/api/performance/${performanceId}`, {
        headers: {
          "X-AUTH-TOKEN": accessToken,
        },
      })
      .then((response) => {
        console.log(response.data);
        setFestivalData(response.data);
      })
      .catch((error) => {
        console.error(error);
      });
  }, [performanceId, accessToken]);
  console.log(performanceId);

  //dday계산
  function calculateDday(currentDate, startDate, endDate) {
    if (currentDate < startDate) {
      const timeDiff = startDate - currentDate;
      const daysDiff = Math.ceil(timeDiff / (1000 * 60 * 60 * 24));
      return `D-${daysDiff}`;
    } else if (currentDate >= startDate && currentDate <= endDate) {
      return "행사중";
    } else {
      return "행사예정";
    }
  }
  const currentDate = new Date();
  let dday = "D-Day";
  if (festivalData != null) {
    dday = calculateDday(
      currentDate,
      festivalData.startDate,
      festivalData.endDate
    );
  }

  //image 데이터 처리
  let imageUrl = "";
  if (festivalData != null) {
    imageUrl = festivalData.images.split(',')[0].substring(1);
    console.log(imageUrl)
  }

  const urlPattern = /\[([^)]+)\]/;
  const matches = imageUrl.match(urlPattern);
  if (matches) {
    imageUrl = matches[1];
  }

  const DetailsContent = () => {
    return (
      <ContentsWrap isMoreView={isMoreView}>
        <ContentsDetailWrap>
          <ImageMoreWrap isMoreView={isMoreView}>
            {isMoreView === false && <WhiteGradientOverlay />}
            <Image43
              src={imageUrl}
              alt={`Performance Image`}
              width="200"
              height="200"
            ></Image43>
          </ImageMoreWrap>
          {festivalData !== null ? (
            <ContentDetailText>{festivalData.detail}</ContentDetailText>
          ) : (
            <ContentDetailText></ContentDetailText>
          )}
          {isMoreView === false && (
            <PlusButton onClick={onClickImageMoreViewButton}>더보기</PlusButton>
          )}
        </ContentsDetailWrap>
      </ContentsWrap>
    );
  };

  return (
    <Container>
      <ContentContainer>
        <TextContainer>
          <Word className="Word">홈</Word>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#B7B7B7"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <Word className="Word">정보보기</Word>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="16"
            height="16"
            viewBox="0 0 16 16"
            fill="none"
          >
            <path
              d="M6 12L10 8L6 4"
              stroke="#B7B7B7"
              stroke-width="1.33333"
              stroke-linecap="round"
              stroke-linejoin="round"
            />
          </svg>
          <Word className="Word">공연</Word>
        </TextContainer>
        {festivalData !== null ? (
          <Image src={festivalData.profile} alt="Your Image" />
        ) : (
          <Image />
        )}
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
          <WordSelect>상세정보</WordSelect>

          <HorizontalLine />
        </TextContainerSelect>
      </ContentContainer>
      <ContentInfo>
        <RectangleRight>
          <TextInsideRectangle>{dday}</TextInsideRectangle>
        </RectangleRight>
        <ContentWrapper style={{ paddingBottom: "40px" }}>
          {festivalData !== null ? (
            <ContentTitle>{festivalData.name}</ContentTitle>
          ) : (
            <ContentTitle></ContentTitle>
          )}
          <Wrapper>
            <TextWrapper>
              <DateText>기간</DateText>
              {festivalData !== null ? (
                <Content2Text>
                  {festivalData.startDate}
                  <span> ~ </span>
                  {festivalData.endDate}
                </Content2Text>
              ) : (
                <Content2Text></Content2Text>
              )}
            </TextWrapper>
            <TextWrapper>
              <TimeText>시간</TimeText>
              {festivalData !== null ? (
                <ContentText>{festivalData.dateTime}</ContentText>
              ) : (
                <ContentText></ContentText>
              )}
            </TextWrapper>

            <TextWrapper>
              <TimeText>위치</TimeText>
              {festivalData !== null ? (
                <ContentText>{festivalData.location}</ContentText>
              ) : (
                <ContentText></ContentText>
              )}
            </TextWrapper>
            <TextWrapper>
              <LocationText>가격</LocationText>
              {festivalData !== null ? (
                <ContentText>{festivalData.price}</ContentText>
              ) : (
                <ContentText></ContentText>
              )}
            </TextWrapper>
            <TextWrapper>
              <Info>정보</Info>
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
        </ContentWrapper>
      </ContentInfo>
      <SelectWrapper>
        <DetailsContent />
      </SelectWrapper>
      <ManagerInquiryWrap>
        <ManagerInquiry>관리자</ManagerInquiry>
        {festivalData !== null ? (
          <ManagerInquiryText>{festivalData.management}</ManagerInquiryText>
        ) : (
          <ManagerInquiryText></ManagerInquiryText>
        )}
        <ManagerInquiry>문의처</ManagerInquiry>
        {festivalData !== null ? (
          <ManagerInquiryText>
            <Text3>{festivalData.management}</Text3>
          </ManagerInquiryText>
        ) : (
          <ManagerInquiryText></ManagerInquiryText>
        )}
      </ManagerInquiryWrap>
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
  display: flex;
  justify-content: center;
`;

const Image43 = styled.img`
  width: 90%;
  height: 100%;
`;

const ContentDetailText = styled.div`
  color: var(--festie-gray-800, #3a3a3a);
  font-family: SUIT Variable;
  font-size: 18px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 25.2px */
  letter-spacing: 0.18px;
  display: flex;
  justify-content: center;
  margin-top: 40px;
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
  margin-left: 38px;
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
  cursor: pointer;
  text-decoration: none;
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
  color: var(--festie-primary-orange, #ff7a00);
  font-family: SUIT Variable;
  font-size: 18px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
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
`;

const SelectWrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
`;

const ContentsWrap = styled.div`
  margin-top: 50px;
  flex-wrap: wrap;
  justify-content: center;
  display: flex;
  width: 910px;
`;

const ImageMoreWrap = styled.div`
  display: flex;
  position: relative;
  max-height: ${(props) => (props.isMoreView ? "" : "195px")};
  overflow: hidden;
  justify-content: center;
`;

const ContentsDetailWrap = styled.div`
  width: 100%;
  margin-top: 50px;
  flex-wrap: wrap;
  justify-content: center;
`;

const WhiteGradientOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(
    rgba(255, 255, 255, 0) 0%,
    rgb(255, 255, 255) 90%
  );
`;

const ManagerInquiryWrap = styled.div`
  margin-top: 64px;
  margin-bottom: 128px;
  display: flex;
  height: 50px;
  border: 1px solid var(--festie-gray-300, #dfdfdf);
`;

const ManagerInquiry = styled.div`
  width: 106.374px;
  border-right: 1px solid var(--festie-gray-300, #dfdfdf);
  background: var(--festie-gray-100, #f5f5f5);
  color: var(--festie-gray-800, #3a3a3a);
  font-family: SUIT Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%;
  letter-spacing: 0.14px;
  text-align: center;
  padding: 15px 0px;
`;

const ManagerInquiryText = styled.div`
  padding: 15px 100px;
  justify-content: center;
  align-items: center;
  color: var(--festie-gray-800, #3a3a3a);
  font-family: SUIT Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 400;
  line-height: 140%; /* 19.6px */
  letter-spacing: 0.14px;
  display: flex;
`;

const Text3 = styled.div`
  margin-right: 15px;
`;

const PlusButton = styled.div`
  display: flex;
  width: 910px;
  padding: 14px 0px;
  justify-content: center;
  align-items: center;
  border-radius: 25px;
  border: 1px solid var(--festie-gray-300, #dfdfdf);
  background: #fff;
  cursor: pointer;
`;
