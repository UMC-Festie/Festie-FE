import { useEffect, useState } from "react";
import styled from "styled-components";
import TogetherRequest from "./TogetherRequest";
import ToastMessage from "./ToastMessage";
import axios from "axios";
import { useParams } from "react-router-dom";

export default function TogetherRequestList({ togetherData, userToken }) {
    const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
    const [requests, setRequests] = useState([]);
    const [isClicked, setIsClicked] = useState(false);
    const [isAnyRequestChecked, setIsAnyRequestChecked] = useState(false);
    const [checkedRequestIndex, setCheckedRequestIndex] = useState(null);
    const [showToast, setShowToast] = useState(false);
    const { togetherId } = useParams();

    useEffect(() => {
        setIsAnyRequestChecked(requests.some((request) => request.isChecked));
    }, [requests]);

    useEffect(() => {
        if(!togetherData) 
            return;

        setRequests(togetherData.applicantList);
    }, [togetherData]);

    const onClickCheckButton = (index) => {
        setRequests((prevRequests) =>
            prevRequests.map((request, idx) =>
                idx === index 
                    ? { ...request, isChecked: !request.isChecked } 
                    : { ...request, isChecked: false }
            )
        );
        setCheckedRequestIndex(index);
    };

    const onClickMatchingButton = () => {
        setIsClicked(!isClicked);
    }

    const postChoice = async (togetherId, bestieList) => {
        try {
            const reqeust = { 
                header: {
                    headers: {
                        "X-AUTH-TOKEN": userToken
                    }
                },
                body: {
                    togetherId: togetherId, 
                    bestieList: bestieList
                }
            };
             
            console.log(reqeust.body, reqeust.header);
            await axios.post(`${PROXY}/api/together/bestie/choice`, reqeust.body, reqeust.header);


            setShowToast(true);

            setTimeout(() => {
                setShowToast(false);
            }, 3000)
        } catch (error) {
            console.log(`[ERROR]: ${error}`)
        }
    }

    const onClickConfirmButton = () => {
        const checkedRequest = requests.find((request, index) => index === checkedRequestIndex);
        
        if (checkedRequest) {
            const updatedRequests = requests.map((request, index) =>
                index === checkedRequestIndex ? { ...request, isChecked: true } : request
            );
            
            setRequests(updatedRequests);

            postChoice(togetherId, [checkedRequest.userId]);
        }
    }

    
    return (
      <>
        <RequestListBox>
            <RequestHeader>
                <RequestTitleWrap>
                    <RequestTitle>같이가요 신청내역</RequestTitle>
                </RequestTitleWrap>
                {
                    requests.length === 0 ? 
                    <></>
                    :
                    <MatchingButtonWrap onClick={onClickMatchingButton} $isVisible={!isClicked}>
                        <MatchingButton>Bestie 매칭하기</MatchingButton>
                    </MatchingButtonWrap>
                }
                <ConfirmButtonWrap $isVisible={isClicked}>
                    {   
                        isAnyRequestChecked === true 
                        ? <ConfirmButton onClick={onClickConfirmButton}>매칭 메세지 보내기</ConfirmButton>
                        : <DisableConfirmButton>매칭 메세지 보내기</DisableConfirmButton>  
                    }
                </ConfirmButtonWrap>
            </RequestHeader>
            {
                !requests.length &&     
                <NoRequest>아직 신청한 Bestie가 없어요!</NoRequest>
            }
            <RequestList>
                {requests.map((request, index) => (
                    <TogetherRequest
                        key={request.userId}
                        userId={request.userId}
                        isChecked={request.isChecked}
                        isClicked={isClicked} 
                        isSelected={request.isSelected}
                        nickname={request.nickname}
                        age={request.age}
                        gender={request.gender === 'M' ? '남성' : '여성'}
                        message={request.introduction}
                        onClickCheckButton={() => onClickCheckButton(index)}
                    />
                ))}
            </RequestList>
        </RequestListBox>
        {
            showToast && 
                <ToastMessage title='매칭 메세지 전달 성공' content='매칭 메세지가 성공적으로 전달됐어요!'/>
        }
      </>
    )
}

const RequestListBox = styled.div`
    width: 750px;
    height: auto;
    flex-shrink: 0;
    border-radius: 20px;
    border: 1px solid var(--festie-primary-orange, #FF7A00);
    padding: 16px 32px 0 32px;
    margin-top: 12px;
`;

const RequestHeader = styled.div`
    display: flex;
    justify-content: space-between;
    align-items: center;
    margin-bottom: 12px;
`;

const RequestTitleWrap = styled.div`

`;

const RequestTitle = styled.span`
    color: var(--festie-primary-orange, #FF7A00);
    font-family: SUIT Variable;
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: 140%; 
`;

const MatchingButtonWrap = styled.div`
    display: ${props => (props.$isVisible ? "flex" : "none")};
`;

const MatchingButton = styled.button`
    display: inline-flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: none;
    border-radius: 21px;
    background: var(--festie-primary-orange, #FF7A00);  
    color: var(--festie-white, #FFF);
    font-family: SUIT Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; 
    &:hover {
        cursor: pointer;
    }
`;

const ConfirmButtonWrap = styled.div`
    display: ${props => (props.$isVisible ? "flex" : "none")};
`;

const DisableConfirmButton = styled.button`
    display: inline-flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: none;
    border-radius: 21px;
    background: var(--festie-gray-400, #C8C8C8);
    color: var(--festie-white, #FFF);
    text-align: right;
    font-family: SUIT Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;  
`;

const ConfirmButton = styled.button`
    display: inline-flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: center;
    gap: 8px;
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

const NoRequest = styled.div`
    color: var(--festie-gray-650, #6F6F6F);
    font-family: SUIT Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; 
    margin-bottom: 16px;
`;

const RequestList = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;