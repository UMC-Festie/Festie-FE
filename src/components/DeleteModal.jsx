import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { getCookie } from '../Cookies'
import styled from "styled-components";

export default function DeleteModal({ isOpen, closeModal }) {
    const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
    const TITLE = '글 삭제';
    const CONTENT = '글을 삭제하시겠어요? 삭제된 글은 복구가 불가능해요.';
    const { togetherId } = useParams();
    const accessToken = getCookie('accessToken');
    const navigate = useNavigate();

    const DeletePost = async (togetherId) => {
        try {
            const response = await axios.delete(`${PROXY}/api/together/${togetherId}`, {
                headers: {
                    "X-AUTH-TOKEN": accessToken
                }
            });

            return response;
        } catch (error) {
            console.log(`[ERROR]: ${error}`)
        }
    }

    const onClickCancelButton = () => {
        closeModal();
    };

    const onClickDeleteButton = async () => {
        const response = await DeletePost(togetherId);
        // console.log(response);

        if (response && response.status === 200) {
            alert('삭제되었습니다!');
            closeModal();
            navigate('/together');
        } 
        if (response && response.status === 2006) {
            console.log('같이가요 게시글 삭제 권한이 없습니다.');
            return;
        } 
        if (response && response.status === 7001) {
            console.log('해당하는 같이가요 게시글이 없습니다.');
            return;
        } 
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
                    <DeleteButton onClick={onClickDeleteButton}>삭제</DeleteButton>
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

const DeleteButton = styled.button`
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