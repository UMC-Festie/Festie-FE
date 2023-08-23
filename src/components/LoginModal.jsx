import { useNavigate } from "react-router-dom";
import styled from "styled-components";

export default function DeleteModal({ isOpen, closeModal }) {
    const TITLE = '로그인';
    const CONTENT = '로그인이 필요한 서비스예요. 로그인 하러 가시겠어요?';
    const navigate =  useNavigate();
    
    const onClickCancelButton = () => {
        closeModal();
    };

    const onClickConfirmButton = () => {
        navigate('/login');
        closeModal();
    };
    
    return (
        <ModalWrap $isOpen={isOpen}>
            <Modal>
                <TitleWrap>
                    <Title>{TITLE}</Title>
                </TitleWrap>
                <ContentWrap>
                    <Content>{CONTENT}</Content>
                </ContentWrap>
                <ButtonWrap>
                    <CancelButton onClick={onClickCancelButton}>취소</CancelButton>
                    <ConfirmButton onClick={onClickConfirmButton}>확인</ConfirmButton>
                </ButtonWrap>
            </Modal>
        </ModalWrap>
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

const Modal = styled.div`
    width: 428px;
    height: 179px;
    border-radius: 20px;
    border: 1px solid var(--festie-gray-200, #E8E8E8);
    background: #FFF;
    display: flex;
    flex-direction: column;
    align-items: center;
`;

const TitleWrap = styled.div`
    margin-top: 28px;
`;

const Title = styled.span`
    color: var(--festie-primary-orange, #FF7A00);
    font-size: 18px;
    font-style: normal;
    font-weight: 800;
    line-height: 140%; 
`;

const ContentWrap = styled.div`
    margin-top: 14px;
`;

const Content = styled.span`
    color: var(--festie-gray-800, #3A3A3A);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; 
`;

const ButtonWrap = styled.div`
    margin: 32px 0 28px 0;
    color: var(--festie-gray-700, #555);
    font-size: 16px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; 
    display: flex;
    gap: 8px;
`;

const CancelButton = styled.button`
    display: flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    border-radius: 21px;
    border: 1px solid var(--festie-gray-500, #B7B7B7);
    background: #FFF;
    color: var(--festie-gray-700, #555);

    &:hover {
        cursor: pointer;
    }
`;

const ConfirmButton = styled.button`
    display: flex;
    padding: 8px 16px;
    justify-content: center;
    align-items: flex-start;
    gap: 8px;
    border: none;
    border-radius: 21px;
    background: var(--festie-primary-orange, #FF7A00);
    color: var(--festie-white, #FFF);

    &:hover {
        cursor: pointer;
    }
`;