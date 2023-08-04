import styled from "styled-components";
import TogetherPost from '../components/TogetherPost';
import TogetherInfo from '../components/TogetherInfo';
import TogetherRequestList from '../components/TogetherRequestList';
import TogetherRequestModal from "../components/TogetherRequestModal";
import TogetherMessage from "../components/TogetherMessage";
import { useEffect, useState } from "react";

export default function TogetherDetail() {
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [isWriter, setIsWriter] = useState(false);
    const [isApplicant, setIsApplicant] = useState(false);
    const [isApplicantSuccess, setIsApplicantSuccess] = useState(true);
    const [status, setStatus] = useState(1);
    const [isModalOpen, setIsModalOpen] = useState(false);

    const onClickScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    const handleOpenModal = () => {
        setIsModalOpen(true);
    };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        const handleScroll = () => {
            setShowScrollButton(window.scrollY > 100 ? true : false);
        }

        window.addEventListener('scroll', handleScroll);

        return () => { 
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);


    return (
        <DetailPage>
            <CategoryInfo>
                <Category>홈</Category>
                <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M6 12L10 8L6 4" stroke="#B7B7B7" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                </svg>
                <Category>같이가요</Category>
            </CategoryInfo>
            <ContentContainer>
                <TogetherWrap>
                    {
                        !isWriter && isApplicant ? (
                            <>
                                {
                                    status === 0 ? (
                                        <MatchingState $isSuccess={isApplicantSuccess}>매칭 중이에요</MatchingState>
                                    ) : isApplicantSuccess ? (
                                        <>
                                            <MatchingState $isSuccess={isApplicantSuccess}>매칭에 성공했어요</MatchingState>
                                            <TogetherMessage></TogetherMessage>
                                        </>
                                    ) : (
                                        <MatchingState $isSuccess={isApplicantSuccess}s>매칭에 실패했어요</MatchingState>
                                )}
                            </>
                        ) : <></>
                    }
                    <TogetherPost isWriter={isWriter} />
                    {
                        isModalOpen && 
                            <TogetherRequestModal isOpen={isModalOpen} closeModal={handleCloseModal} />
                    }
                    {
                        isWriter ? (
                            <TogetherRequestList />
                        ) : !isApplicant ? (
                            <RequestBestieButton onClick={handleOpenModal}>
                            Bestie가 되고 싶어요
                            </RequestBestieButton>
                        ) : (
                            <></>
                    )}
                </TogetherWrap>
                <FestivalWrap>
                    <div>
                        <TogetherInfo />
                    </div>
                </FestivalWrap>
            </ContentContainer>    
            {
                showScrollButton &&
                    <ScrollUpButton onClick={onClickScrollToTop}>
                        <svg xmlns="http://www.w3.org/2000/svg" width="28" height="28" viewBox="0 0 28 28" fill="none">
                            <path d="M14 22.1673V5.83398" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                            <path d="M5.83398 14.0007L14.0007 5.83398L22.1673 14.0007" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                        </svg>
                    </ScrollUpButton>  
            }                 
        </DetailPage>
    )
}

const DetailPage = styled.div`
    display: flex;
    flex-direction: column;
    padding: 42px 90px 140px 90px;
`;

const CategoryInfo = styled.div`
    display: flex; 
    margin-bottom: 14px;
`;

const Category = styled.span`
    color: var(--festie-gray-500, #B7B7B7);
    font-family: SUIT Variable;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; 
`;

const ContentContainer = styled.div`
    display: flex;
    gap: 40px;
    position: relative;
`;

const TogetherWrap = styled.section`
    display: flex;
    flex-direction: column;
    gap: 12px;
`;

const FestivalWrap = styled.section`
    position: sticky;
    top: 0;
    right: 40px;
    width: fit-content;
    display: flex;
    justify-content: flex-end;
    height: 100%;
`;

const ScrollUpButton = styled.button`
    position: fixed;
    bottom: 20px;
    right: 20px;
    display: flex;
    width: 50px;
    height: 50px;
    padding: 11px;
    border: none;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 24px;
    background: var(--festie-primary-yellow, #FFE500);

    &:hover {
        cursor: pointer;
    }
`;

const RequestBestieButton = styled.button`
    display: flex;
    width: 245px;
    padding: 12px 0px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: none;
    border-radius: 26px;
    background: var(--festie-primary-orange, #FF7A00);
    color: var(--festie-white, #FFF);
    font-family: SUIT Variable;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%; 
    margin-top: 12px;

    &:hover {
        cursor: pointer;
    }
`;

const MatchingState = styled.div`
    background: ${props => (props.$isSuccess 
        ? 'var(--festie-primary-orange, #FF7A00)' 
        : 'var(--festie-gray-400, #C8C8C8)')};
    display: flex;
    width: 245px;
    padding: 12px 0px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border: none;
    border-radius: 26px;
    color: var(--festie-white, #FFF);
    font-family: SUIT Variable;
    font-size: 20px;
    font-style: normal;
    font-weight: 700;
    line-height: 140%;
`;