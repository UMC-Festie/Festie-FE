import { useEffect, useState } from "react";
import styled from "styled-components";

export default function TogetherMessage({ togetherData }) {
    const [message, setMessage] = useState(null);

    useEffect(() => {
        if (!togetherData) {
            return;
        }
    
        setMessage(togetherData.message);
      }, [togetherData]);

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