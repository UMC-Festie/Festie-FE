import styled from "styled-components";
import TogetherPost from '../components/TogetherPost';
import TogetherInfo from '../components/TogetherInfo';
import TogetherRequestList from '../components/TogetherRequestList';
import TogetherRequestModal from "../components/TogetherRequestModal";
import TogetherMessage from "../components/TogetherMessage";
import { useEffect, useState } from "react";
import axios from "axios";
import { useParams } from "react-router-dom";
import { getCookie } from '../Cookies'
import LoginModal from '../components/LoginModal';

export default function TogetherDetail() {
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [togetherData, setTogetherData] = useState(null); 
    const [isWriter, setIsWriter] = useState(false);
    const [isApplicant, setIsApplicant] = useState(false);
    const [isApplicantSuccess, setIsApplicantSuccess] = useState(false);
    const [status, setStatus] = useState(0);
    const { togetherId } = useParams();
    const accessToken = getCookie('accessToken');
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const onClickScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    const handleOpenModal = () => {
        console.log(accessToken);

        if(!accessToken) {
            setIsLoginModalOpen(true);
            return;
        }

        setIsModalOpen(true);
    };
    
    const handleCloseModal = () => {
        setIsModalOpen(false);
    };

    useEffect(() => {
        window.scrollTo({top: 0,});
        
        // scroll
        const handleScroll = () => {
            setShowScrollButton(window.scrollY > 100 ? true : false);
        }

        window.addEventListener('scroll', handleScroll);

        return () => { 
            window.removeEventListener('scroll', handleScroll);
        }
    }, []);

    useEffect(() => {
        const fetchData = async (togetherId) => {
            try {
                const response = await axios.get(`/api/together/${togetherId}`, {
                    headers: {
                        "X-AUTH-TOKEN": accessToken
                    }
                });
    
                setTogetherData(response.data);
                setIsWriter(response.data.isWriter);
                setIsApplicant(response.data.isApplicant);
                setIsApplicantSuccess(response.data.isApplicationSuccess);
                setStatus(response.data.status);
            } catch (error) {
                console.log(`[ERROR]: ${error}`)
            }
        }
    
        console.log(togetherId);
        fetchData(togetherId);
    }, [togetherId, accessToken]);

    useEffect(() => {
        if(!togetherData) 
            return;

        console.log(togetherData); 
    }, [togetherData]);



    return (
        <DetailPageContainer>
            <DetailPage>
                <CategoryInfo>
                    <Category href="/">홈</Category>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#B7B7B7" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <Category href="/together">같이가요</Category>
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
                                                <TogetherMessage togetherData={togetherData}></TogetherMessage>
                                            </>
                                        ) : (
                                            <MatchingState $isSuccess={isApplicantSuccess}>매칭에 실패했어요</MatchingState>
                                    )}
                                </>
                            ) : <></>
                        }
                        <TogetherPost 
                            isWriter={isWriter} 
                            togetherData={togetherData}
                        />
                        {
                            isModalOpen && 
                                <TogetherRequestModal 
                                    isOpen={isModalOpen} 
                                    closeModal={handleCloseModal} 
                                    userToken={accessToken} 
                                    togetherData={togetherData} 
                                />
                        }
                        {
                            isWriter ? (
                                <TogetherRequestList userToken={accessToken} togetherData={togetherData} />
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
                            <TogetherInfo togetherData={togetherData}/>
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
                {
                isLoginModalOpen && 
                    <LoginModal 
                        isOpen={isLoginModalOpen} 
                        closeModal={() => setIsLoginModalOpen(false)} 
                    />
                }                
            </DetailPage>
        </DetailPageContainer>
    )
}

const DetailPageContainer = styled.div`
    display: flex;
    justify-content: center;
`;

const DetailPage = styled.div`
    display: flex;
    flex-direction: column;
    padding: 42px 90px 140px 90px;
`;

const CategoryInfo = styled.div`
    display: flex; 
    align-items: center;
    margin-bottom: 14px;
    gap: 16px;
`;

const Category = styled.a`
    color: var(--festie-gray-500, #B7B7B7);
    font-family: SUIT Variable;
    font-size: 13px;
    font-style: normal;
    font-weight: 500;
    line-height: 140%; 
    text-decoration: none;

    &:hover {
        cursor: pointer;
    }
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