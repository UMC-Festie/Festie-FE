import { useEffect, useState } from "react";
import styled, { keyframes, css } from "styled-components";

export default function ToastMessage({ title, content }) {
    const [isVisible, setIsVisible] = useState(true);

    useEffect(() => {
        const timeout = setTimeout(() => {
            setIsVisible(false);
        }, 3000);

        return () => {
            clearTimeout(timeout);
        };
    }, []);

    return (
        <MessageWrap $isVisible={isVisible}>
            <MessageBox>
                <div>
                    <Title>{title}</Title>
                </div>
                <div>
                    <Content>{content}</Content>
                </div>
            </MessageBox>
        </MessageWrap>
    )
}

const fadeIn = keyframes`
    from {
        opacity: 0;
        transform: translateY(20px);
    }
    to {
        opacity: 1;
        transform: translateY(0);
    }
`;

const fadeOut = keyframes`
    from {
        opacity: 1;
        transform: translateY(0);
    }
    to {
        opacity: 0;
        transform: translateY(20px);
    }
`;

const MessageWrap = styled.div`
    /* display: ${({ $isOpen }) => ($isOpen ? "flex" : "none")}; */
    display: flex;
    align-items: flex-end;
    justify-content: center;
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    z-index: 9999;
    animation: ${({ $isVisible }) =>
        $isVisible
            ? css`
                  ${fadeIn} 0.3s ease-in-out
              `
            : css`
                  ${fadeOut} 0.3s ease-in-out
              `};
`;

const MessageBox = styled.div`
    display: inline-flex;
    padding: 28px 93px 35px 94px;
    flex-direction: column;
    align-items: center;
    gap: 14px;
    border-radius: 20px;
    border: 1px solid var(--festie-primary-orange, #FF7A00);
    background: #FFF;
    box-shadow: 0px 2px 10px 0px rgba(0, 0, 0, 0.20);
    margin-bottom: 1px;
`;

const Title = styled.span`
    color: var(--festie-primary-orange, #FF7A00);
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: 140%; 
`;

const Content = styled.span`
    color: var(--festie-gray-800, #3A3A3A);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; 
`;

