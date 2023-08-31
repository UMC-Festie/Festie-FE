import { useEffect, useState } from "react";
import styled from "styled-components";
import thumbnailImg from "../assets/festival_thumbnail.png";

export default function FestivalInfo({ togetherData, reviewData }) {
  const [imageUrl, setImageUrl] = useState(null);
  const [name, setName] = useState(null);
  const [location, setLocation] = useState(null);
  const [date, setDate] = useState(null);
  const [time, setTime] = useState(null);

  const onClickFestivalInfoButton = () => {
    alert('공연 정보 상세 페이지');
    
    // navigation
    /*
    navigation.navigate(`/${festivalId}`, {
      state: festivalId
    }); 
    */
  };

  // 같이가요 공연 정보
  useEffect(() => {
    if (!togetherData) {
        return;
    }

    if(togetherData.festivalInfo.thumbnailUrl) {
      setImageUrl(togetherData.festivalInfo.thumbnailUrl);
    } else {
      // 썸네일 이미지 없을 때 이미지 
      setImageUrl(thumbnailImg);
    }
   
    setName(togetherData.festivalInfo.title);
    setLocation(togetherData.festivalInfo.region);
    setDate(togetherData.togetherDate);
    setTime(togetherData.togetherTime);
  }, [togetherData]);


  // 리뷰 공연 정보
  useEffect(() => {
    if (!reviewData) {
        return;
    }

    if(reviewData.festivalInfo.thumbnailUrl) {
      setImageUrl(reviewData.festivalInfo.thumbnailUrl);
    } else {
      // 썸네일 이미지 없을 때 이미지 
      setImageUrl(thumbnailImg);
    }
   
    setName(reviewData.festivalInfo.festivalTitle);
    setLocation(reviewData.festivalInfo.region);
    setDate(reviewData.festivalInfo.date);
    setTime(reviewData.festivalInfo.time);
  }, [reviewData]);


    return (
      <>
        <InfoBox>
          <div>
            <FestivalImageWrap>
              <FestivalImage alt='공연 포스터' src={imageUrl} ></FestivalImage>
            </FestivalImageWrap>
            <FestivalNameWrap>
              <FestivalName>{name}</FestivalName>
            </FestivalNameWrap>
            <FestivalLocationWrap>
              <FestivalLocation>{location}</FestivalLocation>
            </FestivalLocationWrap>
            <FestivalDateWrap>
              <FestivalDate>{date}</FestivalDate>
            </FestivalDateWrap>
            <FestivalTimeWrap>
              <FestivalTime>{time}</FestivalTime>
            </FestivalTimeWrap>
            <MoreButtonWrap>
              <MoreButton onClick={onClickFestivalInfoButton}>공연 정보 보기</MoreButton>
              <MoreButtonIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M5.5 12H19.5" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                <path d="M12.5 5L19.5 12L12.5 19" stroke="#555555" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              </MoreButtonIcon>
            </MoreButtonWrap>
          </div>
        </InfoBox>
      </>
    )
}

const InfoBox = styled.div`
  /* margin: 20px; */
  padding: 24px;
  width: 197px;
  height: auto;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid var(--festie-gray-200, #E8E8E8);
  background-color: #FFFFFF;
`;

const FestivalImageWrap = styled.div`
  width: 197px;
  height: 280px;
  flex-shrink: 0;
  margin-bottom: 17px;
  border-radius: 20px;
  border: 1px solid var(--festie-gray-200, #E8E8E8);
  overflow: hidden;
`;

const FestivalImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: contain;
`;

const FestivalNameWrap = styled.div`
  margin-bottom: 7px;
`;

const FestivalName = styled.div`
  color: var(--festie-gray-800, #3A3A3A);
  font-family: SUIT Variable;
  font-size: 18px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const FestivalLocationWrap = styled.div`
  margin-bottom: 4px;
`;

const FestivalLocation = styled.div`
  color: var(--festie-gray-600, #949494);
  font-family: SUIT Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const FestivalDateWrap = styled.div`
  margin-bottom: 4px;
`;

const FestivalDate = styled.div`
  color: var(--festie-gray-600, #949494);
  font-family: SUIT Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const FestivalTimeWrap = styled.div`

`;

const FestivalTime = styled.div`
  color: var(--festie-gray-600, #949494);
  font-family: SUIT Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const MoreButtonWrap = styled.button`
  display: flex;
  width: 197px;
  padding: 12px 20px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 26px;
  border: 1px solid var(--festie-primary-orange, #FF7A00);
  background: var(--festie-white, #FFF);
  margin-top: 20px;

  &:hover {
    cursor: pointer;
  }
`;

const MoreButton = styled.span`
  color: var(--festie-gray-700, #555);
  font-family: SUIT Variable;
  font-size: 20px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
`;

const MoreButtonIcon = styled.span`

`;