import { useEffect, useState } from "react";
import styled from "styled-components";
import ToastMessage from "./ToastMessage";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function TogetherRequestModal({ isOpen, closeModal, togetherData, userToken }) {
    const [nickname, setNickname] = useState(null);
    const [name, setName] = useState(null);
    const [location, setLocation] = useState(null);
    const [date, setDate] = useState(null);
    const [time, setTime] = useState(null);
    const [message, setMessage] = useState('');
    const [showToast, setShowToast] = useState(false);
    const { togetherId } = useParams();

    const onClickCloseModal = () => {
        closeModal();
    };

    const handleInputChange = (event) => {
        setMessage(event.target.value);
    };

    const postBestie = async (togetherId, message) => {
        try {
            const reqeust = { 
                header: {
                    headers: {
                        "X-AUTH-TOKEN": userToken
                    }
                },
                body: {
                    togetherId: togetherId, 
                    introduction: message 
                }
            };
             
            console.log(reqeust.body, reqeust.header);
            await axios.post(`/api/together/bestie/application`, reqeust.body, reqeust.header);

            setShowToast(true);

            setTimeout(() => {
                setShowToast(false);
                closeModal();
            }, 3000);
        } catch (error) {
            console.log(`[ERROR]: ${error}`);
            
            const ERROR_CODE = error.response.data.errorCode;
            console.log(ERROR_CODE);

            if(ERROR_CODE === 7002) {
                alert('이미 Bestie를 신청한 내역이 존재합니다.');
            } 
            if(ERROR_CODE === 7003) {
                alert('매칭이 종료된 게시글입니다.');
            } 
            if(ERROR_CODE === 7004) {
                alert('Bestie 자신이 작성한 게시글에는 Bestie 신청이 불가합니다.');
            } 

            closeModal();
        }
    }

    const onClickSendRequest = () => {
        postBestie(togetherId, message);
    };

    useEffect(() => {
        if (!togetherData) {
          return;
        }
 
        setNickname(togetherData.writerNickname);
        setName(togetherData.festivalInfo.title);
        setLocation(togetherData.festivalInfo.region);
        setDate(togetherData.togetherDate);
        setTime(togetherData.togetherTime);
    }, [togetherData]);

    return (
        <>
        <ModalWrap $isOpen={isOpen}>
            <RequestModal>
                <RequestModalHeader>
                    <TitleWrap>
                        <Title>{nickname}님의 같이가요</Title>
                    </TitleWrap>
                    <CloseButtonWrap>
                        <CloseButton onClick={onClickCloseModal}>
                            <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none">
                                <path d="M18 6L6 18" stroke="#6F6F6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                                <path d="M6 6L18 18" stroke="#6F6F6F" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            </svg></CloseButton>
                    </CloseButtonWrap>
                </RequestModalHeader>
                <FestivalNameWrap>
                    <FestivalName>{name}</FestivalName>
                </FestivalNameWrap>
                <FestivalInfoWarp>
                    { location && 
                        <div>
                            <InfoTitle>장소</InfoTitle>
                            <FestivalInfo>{location}</FestivalInfo>
                        </div>
                    }
                    { date &&
                        <div>
                            <InfoTitle>날짜</InfoTitle>
                            <FestivalInfo>{date}</FestivalInfo>
                        </div>
                    }
                    { time &&
                        <div>
                            <InfoTitle>시간</InfoTitle>
                            <FestivalInfo>{time}</FestivalInfo>
                        </div>
                    }
                </FestivalInfoWarp>
                <SeparationWrap>
                    <svg xmlns="http://www.w3.org/2000/svg" width="490" height="2" viewBox="0 0 490 2" fill="none">
                        <path d="M0 1L490 1.00004" stroke="#E8E8E8"/>
                    </svg>
                </SeparationWrap>
                <ContentWrap>
                    <ContentTitle>Bestie 메세지</ContentTitle>
                    <ContentInput 
                        placeholder='Bestie에게 전달될 메세지를 작성해주세요.'
                        value={message}
                        onChange={handleInputChange}
                    />
                </ContentWrap>
                <RequestButtonWrap>
                    <RequestButton onClick={onClickSendRequest}>같이가요 신청 보내기</RequestButton>
                </RequestButtonWrap>
            </RequestModal>
        </ModalWrap>
        {
            showToast &&
                <ToastMessage title='같이가요 신청 완료' content={`${nickname}님에게 같이가요 신청을 보냈어요!`} />
        }
        </>
    )
}


const ModalWrap = styled.div`
  display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")};
  align-items: center;
  justify-content: center;
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.40);
  z-index: 9999;
`;

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
    gap: 32px;
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
