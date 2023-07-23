import { useState } from "react";
import styled from "styled-components";

export default function TogetherMessage() {
    const [message, setMessage] = useState(`이상, 못할 밥을 끓는 찾아다녀도, 뿐이다. 든 놀이 그들은 때문이다. 못하다 더운지라 우리 하여도 그들은 그들에게 구하기 뿐이다. 인생을 곳으로 과실이 위하여 것은 석가는 열매를 뿐이다. 뼈 못하다 생의 않는 청춘 철환하였는가?`);

    return (
        <>
            <MessageBox>
                <TitleWrap>
                    <Title>Bestie 메세지</Title>
                </TitleWrap>
                <ContentWrap>
                    <Content>{message}</Content>
                </ContentWrap>
            </MessageBox>
        </>
    )
}

const MessageBox =  styled.div`
    display: flex;
    width: 750px;
    padding: 22px 32px 24px 32px;
    flex-direction: column;
    justify-content: center;
    align-items: flex-start;
    gap: 14px;
    border-radius: 20px;
    border: 1px solid var(--festie-primary-orange, #FF7A00);
`;

const TitleWrap = styled.div`
    
`;

const Title = styled.span`
    color: var(--festie-primary-orange, #FF7A00);
    font-family: SUIT Variable;
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: 140%; 
`;

const ContentWrap = styled.div`
    
`;

const Content = styled.span`
    color: var(--festie-gray-800, #3A3A3A);
    font-family: SUIT Variable;
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%;
`;