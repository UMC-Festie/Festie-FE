import { useState } from "react";
import styled from "styled-components";

export default function TogetherInfo() {
  const [image, setImage] = useState('img_url');
  const [name, setName] = useState('공연 이름');
  const [location, setLocation] = useState('공연 위치');
  const [date, setDate] = useState('2023.6.30');
  const [time, setTime] = useState('17:00');
 
    return (
      <>
        <InfoBox>
          <div>
            <FestivalImageWrap>
              <FestivalImage alt='공연 포스터' /*src={require(`${image}`)}*/></FestivalImage>
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
              <MoreButton>공연 정보 보기</MoreButton>
              <MoreButtonIcon>
              <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24" viewBox="0 0 25 24" fill="none">
                <path d="M5.5 12H19.5" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                <path d="M12.5 5L19.5 12L12.5 19" stroke="#555555" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
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
`;

const FestivalImageWrap = styled.div`
  width: 197px;
  height: 280px;
  flex-shrink: 0;
  background: url(<path-to-image>), lightgray 50% / cover no-repeat;
  margin-bottom: 17px;
`;

const FestivalImage = styled.img`
  width: 197px;
  height: 280px;
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