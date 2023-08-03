import styled from "styled-components";

export default function TogetherRequest({ userid, isChecked, onClickCheckButton, isClicked, nickname, age, gender, message }) {
    return (
      <>
        <RequestBox userId={userid}>
            <RequestHeader>
                <InfoWrap>
                    <NicknameWrap>
                        <Nickname>{nickname}</Nickname>
                    </NicknameWrap>
                    <AgeWrap>
                        <Age>{age}세</Age>
                    </AgeWrap>
                    <GenderWrap>
                        <Gender>{gender}</Gender>
                    </GenderWrap>
                </InfoWrap>
                <CheckButtonWrap $isVisible={isClicked.toString()}>
                    {
                        isChecked === true ?
                            <CheckedButton onClick={onClickCheckButton}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M10 3L4.5 8.5L2 6" stroke="white" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </CheckedButton>
                            : <UncheckedButton onClick={onClickCheckButton}>
                                <svg xmlns="http://www.w3.org/2000/svg" width="12" height="12" viewBox="0 0 12 12" fill="none">
                                    <path d="M10 3L4.5 8.5L2 6" stroke="#949494" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </UncheckedButton>
                    }
                </CheckButtonWrap>
            </RequestHeader>
            <MessageWrap>
                <Message>{message}</Message>
            </MessageWrap>
       </RequestBox>
      </>
    )
}

const RequestBox = styled.div`
    display: flex;
    flex-direction: column;
    width: 368px;
    height: auto;
    flex-shrink: 0;
    border-radius: 16px;
    background: var(--festie-gray-100, #F5F5F5);
    margin-bottom: 16px;
`;

const RequestHeader = styled.div`
    display: flex;
    justify-content: space-between;
    margin-top: 12px;
    margin-bottom: 12px;
    padding: 0 16px;
`;

const InfoWrap = styled.div`
    display: flex;
`;

const NicknameWrap = styled.div`
    margin-right: 9px;
`;

const Nickname = styled.span`
    color: var(--festie-gray-800, #3A3A3A);
    font-family: SUIT Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; 
`;

const AgeWrap = styled.div`
    margin-right: 9px;
`;

const Age = styled.span`
    color: var(--festie-gray-650, #6F6F6F);
    font-family: SUIT Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
`;

const GenderWrap = styled.div`
    margin-right: 9px;
`;

const Gender = styled.div`
    color: var(--festie-gray-650, #6F6F6F);
    font-family: SUIT Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
`;

const CheckButtonWrap = styled.div`
    display: ${props => (props.$isVisible ? "flex" : "none")};
`;

const UncheckedButton = styled.button`
    display: flex;
    width: 18px;
    height: 18px;
    padding: 3px;
    justify-content: center;
    align-items: center;
    border-radius: 9px;
    border: 1px solid var(--festie-gray-600, #949494);
    background: transparent;
    &:hover {
        cursor: pointer;
    }
`;

const CheckedButton = styled.button`
    display: flex;
    width: 18px;
    height: 18px;
    padding: 3px;
    justify-content: center;
    align-items: center;
    border-radius: 9px;
    border: none;
    background: var(--festie-primary-orange, #FF7A00);
    &:hover {
        cursor: pointer;
    }
`;

const MessageWrap = styled.div`
    padding: 0 16px;
    margin-bottom: 14px;
`;

const Message = styled.span`
    color: var(--festie-gray-700, #555);
    font-family: SUIT Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
    white-space: pre-line;
`;