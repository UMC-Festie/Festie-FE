import styled from "styled-components";
import ReviewPost from '../components/ReviewPost';
import TogetherInfo from '../components/FestivalInfo';
import { useEffect, useState } from "react";
import axios from "axios";
// import { useParams } from "react-router-dom";
import { getCookie } from '../Cookies'
import LoginModal from '../components/LoginModal';

export default function ReviewDetail() {
    const [showScrollButton, setShowScrollButton] = useState(false);
    const [reviewData, setReviewData] = useState(null); 
    const [isWriter, setIsWriter] = useState(false);
    const [likeCount, setLikeCount] = useState(0);
    const [dislikeCount, setDislikeCount] = useState(0);
    const [isLiked, setIsLiked] = useState(false);
    const [isDisliked, setIsDisliked] = useState(false);
    // const { reviewId } = useParams();
    const reviewId = 2;
    const accessToken = getCookie('accessToken');
    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);

    const onClickScrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: 'smooth'
        })
    };

    useEffect(() => {
        if (!reviewData) {
            return;
        }
       
        setLikeCount(reviewData.likes === null ? 0 : reviewData.likes);
        setDislikeCount(reviewData.dislikes === null ? 0 : reviewData.dislikes);
        if(reviewData.isLikedOrDisliked === 1)
            setIsLiked(true);
        if(reviewData.isLikedOrDisliked === 0) 
            setIsDisliked(true);
    }, [reviewData]);


    const onClickLikeButton = async () => {
        console.log('like');

        if(!accessToken) {
            setIsLoginModalOpen(true);
            return;
        }

        // 좋아요 누른 상태일 때 -> 등록 취소
        setIsLiked(isLiked ? false : true);
    }

    const onClickUnlikeButton = async () => {
        console.log('unlike');

        if(!accessToken) {
            alert('로그인이 필요한 서비스입니다.');
            return;
        }

        // 좋아요 누른 상태일 때 -> 등록 취소
        setIsDisliked(isDisliked ? false : true);
    }

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
        const fetchData = async (reviewId) => {
            try {
                const response = await axios.get(`/api/review/${reviewId}`, {
                    headers: {
                        "X-AUTH-TOKEN": accessToken
                    }
                });
    
                setReviewData(response.data);
                setIsWriter(response.data.isWriter);
            } catch (error) {
                console.log(`[ERROR]: ${error}`)
            }
        }
    
        console.log(reviewId);
        fetchData(reviewId);
    }, [reviewId, accessToken]);

    useEffect(() => {
        if(!reviewData) 
            return;

        console.log(reviewData); 
    }, [reviewData]);


    return (
        <DetailPageContainer>
            <DetailPage>
                <CategoryInfo>
                    <Category href="/">홈</Category>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#B7B7B7" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <Category href="/share/performance">정보공유</Category>
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                        <path d="M6 12L10 8L6 4" stroke="#B7B7B7" strokeWidth="1.33333" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                    <Category href="/share/review">후기</Category>
                </CategoryInfo>
                <ContentContainer>
                    <TogetherWrap>
                        <ReviewPost 
                            isWriter={isWriter} 
                            reviewData={reviewData}
                        />
                        <ButtonWrap>
                            <LikeButton $isClicked={isLiked} onClick={onClickLikeButton}>
                                {
                                    isLiked ? 
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <path d="M6.41668 10.0833L10.0833 1.83333C10.8127 1.83333 11.5122 2.12306 12.0279 2.63879C12.5436 3.15451 12.8333 3.85399 12.8333 4.58333V8.25H18.0217C18.2874 8.24699 18.5507 8.30179 18.7931 8.41062C19.0356 8.51944 19.2515 8.67967 19.4259 8.88022C19.6003 9.08077 19.729 9.31684 19.8031 9.57206C19.8772 9.82729 19.8949 10.0956 19.855 10.3583L18.59 18.6083C18.5237 19.0455 18.3017 19.444 17.9648 19.7303C17.6279 20.0167 17.1988 20.1717 16.7567 20.1667H6.41668M6.41668 10.0833V20.1667M6.41668 10.0833H3.66668C3.18045 10.0833 2.71413 10.2765 2.37031 10.6203C2.0265 10.9641 1.83334 11.4304 1.83334 11.9167V18.3333C1.83334 18.8196 2.0265 19.2859 2.37031 19.6297C2.71413 19.9735 3.18045 20.1667 3.66668 20.1667H6.41668" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <path d="M6.41732 10.083L10.084 1.83301C10.8133 1.83301 11.5128 2.12274 12.0285 2.63846C12.5443 3.15419 12.834 3.85366 12.834 4.58301V8.24967H18.0223C18.2881 8.24667 18.5513 8.30147 18.7938 8.41029C19.0362 8.51911 19.2521 8.67935 19.4265 8.8799C19.6009 9.08044 19.7296 9.31651 19.8037 9.57174C19.8778 9.82697 19.8955 10.0953 19.8557 10.358L18.5907 18.608C18.5244 19.0452 18.3023 19.4436 17.9654 19.73C17.6285 20.0164 17.1995 20.1713 16.7573 20.1663H6.41732M6.41732 10.083V20.1663M6.41732 10.083H3.66732C3.18109 10.083 2.71477 10.2762 2.37096 10.62C2.02714 10.9638 1.83398 11.4301 1.83398 11.9163V18.333C1.83398 18.8192 2.02714 19.2856 2.37096 19.6294C2.71477 19.9732 3.18109 20.1663 3.66732 20.1663H6.41732" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                }
                                <Count $isClicked={isLiked}>{likeCount}</Count>
                            </LikeButton>
                            <LikeButton $isClicked={isDisliked} onClick={onClickUnlikeButton}>
                                {
                                    isDisliked ?
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <path d="M15.5833 11.9167L11.9167 20.1667C11.1873 20.1667 10.4878 19.8769 9.97212 19.3612C9.4564 18.8455 9.16666 18.146 9.16666 17.4167V13.75H3.97833C3.71258 13.753 3.44936 13.6982 3.20689 13.5894C2.96442 13.4806 2.74852 13.3203 2.57413 13.1198C2.39974 12.9192 2.27103 12.6832 2.19694 12.4279C2.12284 12.1727 2.10512 11.9044 2.145 11.6417L3.41 3.39166C3.47629 2.9545 3.69835 2.55602 4.03525 2.26966C4.37215 1.98329 4.8012 1.82833 5.24333 1.83333H15.5833M15.5833 11.9167V1.83333M15.5833 11.9167H18.0308C18.5496 11.9258 19.0537 11.7442 19.4475 11.4062C19.8412 11.0683 20.0971 10.5975 20.1667 10.0833V3.66666C20.0971 3.15247 19.8412 2.68171 19.4475 2.34375C19.0537 2.00579 18.5496 1.82416 18.0308 1.83333H15.5833" stroke="white" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                    :
                                    <svg xmlns="http://www.w3.org/2000/svg" width="22" height="22" viewBox="0 0 22 22" fill="none">
                                        <path d="M15.5841 11.9167L11.9174 20.1667C11.1881 20.1667 10.4886 19.8769 9.97288 19.3612C9.45716 18.8455 9.16743 18.146 9.16743 17.4167V13.75H3.97909C3.71334 13.753 3.45012 13.6982 3.20765 13.5894C2.96519 13.4806 2.74928 13.3203 2.57489 13.1198C2.4005 12.9192 2.2718 12.6832 2.1977 12.4279C2.1236 12.1727 2.10588 11.9044 2.14576 11.6417L3.41076 3.39167C3.47706 2.95451 3.69911 2.55603 4.03601 2.26967C4.37291 1.9833 4.80196 1.82834 5.24409 1.83334H15.5841M15.5841 11.9167V1.83334M15.5841 11.9167H18.0316C18.5504 11.9258 19.0545 11.7442 19.4482 11.4063C19.8419 11.0683 20.0979 10.5975 20.1674 10.0833V3.66667C20.0979 3.15248 19.8419 2.68172 19.4482 2.34376C19.0545 2.0058 18.5504 1.82416 18.0316 1.83334H15.5841" stroke="#555555" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"/>
                                    </svg>
                                }
                                <Count $isClicked={isDisliked}>{dislikeCount}</Count>
                            </LikeButton>
                        </ButtonWrap>
                    </TogetherWrap>
                    <FestivalWrap>
                        <div>
                            <TogetherInfo reviewData={reviewData}/>
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
    gap: 20px;
`;

const ButtonWrap = styled.div`
    display: flex;
    gap: 12px;
`;

const LikeButton = styled.button`
    display: flex;
    padding: 10px 18px;
    justify-content: center;
    align-items: center;
    gap: 8px;
    border-radius: 21px;
    border: 1px solid ${({ $isClicked }) => ($isClicked ? "#FF7A00" : "#B7B7B7")};
    background: ${({ $isClicked }) => ($isClicked ? "#FF7A00" : "#FFF")};

    &:hover {
        cursor: pointer;
    }
`;

const Count = styled.span`
    color: ${({ $isClicked }) => ($isClicked ? "#FFF" : "#555")};
    font-size: 18px;
    font-style: normal;
    font-weight: 500;
    line-height: normal;
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
    bottom: 404px;
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