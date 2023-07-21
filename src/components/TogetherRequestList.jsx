import { useState } from "react";
import styled from "styled-components";
import TogetherRequest from "./TogetherRequest";

export default function TogetherRequestList() {
    /* Dummy Data */
    //
    const [requests, setRequests] = useState([
        {
          userId: 1,
          isChecked: false,
          nickname: '포디',
          age: 25,
          gender: '여성',
          message: '안녕하세용 \n 축제 같이 가고 싶어용',
        },
        {
            userId: 2,
            isChecked: false,
            nickname: '김철수',
            age: 5,
            gender: '남성',
            message: '떡잎마을 방범대는 곤란한 사람들을 도와줘야 하고 말이야! 떡잎마을 방범대는 곤란한 사람을 구하고 떡잎마을의 평화를 지킨다! 떡잎마을 방범대 수첩에서 그렇게 쓰여있잖아!',
        },
    ]);
    //
    
    const [isClicked, setIsClicked] = useState(false);
    
    const onClickCheckButton = (userId) => {
        setRequests(prevRequests =>
          prevRequests.map(request =>
            request.userId === userId
              ? { ...request, isChecked: !request.isChecked }
              : request
          )
        );
        console.log(`${userId}번 체크 버튼 누름`);
    };

    const onClickMatchingButton = () => {
        setIsClicked(!isClicked);
    }

    return (
      <>
        <RequestListBox>
            <RequestHeader>
                <RequestTitleWrap>
                    <RequestTitle>같이가요 신청내역</RequestTitle>
                </RequestTitleWrap>
                <MatchingButtonWrap onClick={onClickMatchingButton} isVisible={!isClicked}>
                    <MatchingButton>Bestie 매칭하기</MatchingButton>
                </MatchingButtonWrap>
                <ConfirmButtonWrap isVisible={isClicked}>
                    <DisableConfirmButton>매칭 메세지 보내기</DisableConfirmButton> 
                    {/* <ConfirmButton>매칭 메세지 보내기</ConfirmButton> */}
                </ConfirmButtonWrap>
            </RequestHeader>
            <RequestList>
                {requests.map(request => (
                    <TogetherRequest
                        key={request.userId}
                        userId={request.userId}
                        isChecked={request.isChecked}
                        isClicked={isClicked} 
                        nickname={request.nickname}
                        age={request.age}
                        gender={request.gender}
                        message={request.message}
                        onClickCheckButton={() => onClickCheckButton(request.userId)}
                    />
                ))}
            </RequestList>
        </RequestListBox>
      </>
    )
}

const RequestListBox = styled.div`
    margin: 20px;
    width: 750px;
    height: auto;
    flex-shrink: 0;
    border-radius: 20px;
    border: 1px solid var(--festie-primary-orange, #FF7A00);
    padding: 16px 32px 0 32px;
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
    display: ${props => (props.isVisible ? "flex" : "none")};
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
    display: ${props => (props.isVisible ? "flex" : "none")};
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
    &:hover {
        cursor: pointer;
    }
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

const RequestList = styled.div`
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
`;