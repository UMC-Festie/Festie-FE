import { useState } from "react";
import styled from "styled-components";

export default function TogetherRequestModal() {
    const [nickname, setNickname] = useState('덕구');
    const [name, setName] = useState('부산푸드필름페스타');
    const [location, setLocation] = useState('부산광역시 해운대구');
    const [date, setDate] = useState('2023.6.30');
    const [time, setTime] = useState('17:00');
    
    return (
        <>
            <RequestModal>
                <RequestModalHeader>
                    <TitleWrap>
                        <Title>{nickname}님의 같이가요</Title>
                    </TitleWrap>
                    <CloseButtonWrap>
                        <CloseButton>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                                <path d="M6 6L18 18" stroke="#6F6F6F" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/>
                            </svg></CloseButton>
                    </CloseButtonWrap>
                </RequestModalHeader>
                <FestivalNameWrap>
                    <FestivalName>{name}</FestivalName>
                </FestivalNameWrap>
                <FestivalInfoWarp>
                    <FestivalLocationWrap>
                        <InfoTitle>장소</InfoTitle>
                        <FestivalInfo>{location}</FestivalInfo>
                    </FestivalLocationWrap>
                    <FestivalDateWrap>
                        <InfoTitle>날짜</InfoTitle>
                        <FestivalInfo>{date}</FestivalInfo>
                    </FestivalDateWrap>
                    <FestivalTimeWrap>
                        <InfoTitle>시간</InfoTitle>
                        <FestivalInfo>{time}</FestivalInfo>
                    </FestivalTimeWrap>
                </FestivalInfoWarp>
                <SeparationWrap>
                    <svg xmlns="http://www.w3.org/2000/svg" width="490" height="2" viewBox="0 0 490 2" fill="none">
                        <path d="M0 1L490 1.00004" stroke="#E8E8E8"/>
                    </svg>
                </SeparationWrap>
                <ContentWrap>
                    <ContentTitle>Bestie 메세지</ContentTitle>
                    <ContentInput placeholder='Bestie에게 전달될 메세지를 작성해주세요.'></ContentInput>
                </ContentWrap>
                <RequestButtonWrap>
                    <RequestButton>같이가요 신청 보내기</RequestButton>
                </RequestButtonWrap>
            </RequestModal>
        </>
    )
}

const RequestModal =  styled.div`
    display: flex;
    flex-direction: column;
    width: 490px;
    height: auto;
    flex-shrink: 0;
    border-radius: 20px;
    border: 1px solid var(--festie-gray-200, #E8E8E8);
    background: #FFF;
    padding: 20px;
`;

const RequestModalHeader = styled.div`
    display: flex;
    justify-content: space-between;
`;

const TitleWrap = styled.div`
    margin-bottom: 8px;
`;

const Title = styled.span`
    color: var(--festie-primary-orange, #FF7A00);
    font-family: SUIT Variable;
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: 140%; 
`;

const CloseButtonWrap = styled.div`
    width: 24px;
    height: 24px;
    flex-shrink: 0;
`;

const CloseButton = styled.button`
    border: none;
    background: transparent;

    &:hover {
        cursor: pointer;
    }
`;

const FestivalInfoWarp = styled.div`
    display: flex;
`;

const FestivalNameWrap = styled.div`
    margin-bottom: 8px;
`;

const FestivalName = styled.span`
    color: var(--festie-gray-800, #3A3A3A);
    font-family: SUIT Variable;
    font-size: 30px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
    letter-spacing: 0.3px;
`;

const InfoTitle = styled.span`
    color: var(--festie-gray-600, #949494);
    font-family: SUIT Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; 
    margin-right: 8px;
`;

const FestivalLocationWrap = styled.div`
    margin-right: 32px;
`;

const FestivalDateWrap = styled.div`
    margin-right: 32px;
`;

const FestivalTimeWrap = styled.div`

`;

const FestivalInfo = styled.span`
    color: var(--festie-gray-600, #949494);
    font-family: SUIT Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
`;

const SeparationWrap = styled.div`
    margin-top: 6px;
    margin-bottom: 12px;
`;

const ContentWrap = styled.div`

`;

const ContentTitle = styled.div`
    color: var(--festie-gray-800, #3A3A3A);
    font-family: SUIT Variable;
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: 140%; 
    margin-bottom: 8px;
`;

const ContentInput = styled.textarea`
    resize: none;
    display: inline-flex;
    width: 458px;
    height: 128px;
    margin-bottom: 12px;
    align-items: center;
    flex-shrink: 0;
    border: 1px solid var(--festie-gray-100, #F5F5F5);
    border-radius: 10px;
    background: var(--festie-gray-100, #F5F5F5);
    padding: 18px 16px;
    color: var(--festie-gray-650, #6F6F6F);
    font-family: SUIT Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; 

    &:focus {
        outline: 1px solid rgba(255, 122, 0, 0.8); /* 50% transparency */
    }
`;

const RequestButtonWrap = styled.div`
    display: flex;
    justify-content: center;
`;  

const RequestButton = styled.button`
    display: inline-flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    border: none;
    border-radius: 21px;
    background: var(--festie-primary-orange, #FF7A00);
    color: var(--festie-white, #FFF);
    text-align: right;
    font-family: SUIT Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; 

    &:hover {
        cursor: pointer;
    }
`;
