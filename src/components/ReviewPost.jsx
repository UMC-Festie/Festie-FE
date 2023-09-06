import { useEffect, useState } from "react";
import styled from "styled-components";
import DeleteModal from "../components/DeleteModal";

export default function ReviewPost({ isWriter, reviewData }) {
  const [title, setTitle] = useState(null);
  const [views, setViews] = useState(null);
  const [writer, setWriter] = useState(null);
  const [date, setDate] = useState(null);
  const [imagesUrl, setImagesUrl] = useState(null);
  const [contents, setContents] = useState(null);
  const [isDeleteModalOpen, setIsDeleteModalOpen] = useState(false);
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  const showImage = (index) => {
    setCurrentImageIndex(index);
  };

  const showNextImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex + 1) % imagesUrl.length);
  };

  const showPreviousImage = () => {
    setCurrentImageIndex((prevIndex) => (prevIndex - 1 + imagesUrl.length) % imagesUrl.length);
  };

  const handleOpenDeleteModal = () => {
    setIsDeleteModalOpen(true);
  };

  const handleCloseDeleteModal = () => {
    setIsDeleteModalOpen(false);
  };

  const onClickEditButton = () => {
    alert('글 수정 페이지');
    
    // navigation
    /*
    navigation.navigate(`/${postId}`, {
      state: podstId
    }); 
    */
  };

  const onClickDeleteButton = () => {
    handleOpenDeleteModal();
  };

  useEffect(() => {
    if (!reviewData) {
      return;
    }

    setTitle(reviewData.postTitle);
    setViews(reviewData.view);
    setWriter(reviewData.writer);
    setDate(reviewData.updatedDate);
    setImagesUrl(reviewData.imagesUrl);
    setContents(reviewData.content);
  }, [reviewData]);

  return (
    <>
      <PostBox>
        <PostHeader>
          <LeftWrap>
            <TitleWrap>
              <Title>{title}</Title>
            </TitleWrap>
            <WriteInfoWrap>
              <WriterWrap>
                <Writer>{writer}</Writer>
              </WriterWrap>
              <DateWrap>
                <Date>{date}</Date>
              </DateWrap>
            </WriteInfoWrap>
          </LeftWrap>
          <RightWrap>
            <CountWrap>
              <ViewsWrap>
                <ViewsIcon>
                  <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20" fill="none">
                    <path d="M0.832031 10.0007C0.832031 10.0007 4.16536 3.33398 9.9987 3.33398C15.832 3.33398 19.1654 10.0007 19.1654 10.0007C19.1654 10.0007 15.832 16.6673 9.9987 16.6673C4.16536 16.6673 0.832031 10.0007 0.832031 10.0007Z" stroke="#B7B7B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                    <path d="M10 12.5C11.3807 12.5 12.5 11.3807 12.5 10C12.5 8.61929 11.3807 7.5 10 7.5C8.61929 7.5 7.5 8.61929 7.5 10C7.5 11.3807 8.61929 12.5 10 12.5Z" stroke="#B7B7B7" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
                  </svg>
                </ViewsIcon>
                <Views>{views}</Views>
              </ViewsWrap>
              </CountWrap>
              <ButtonWrap $isWriter={isWriter}>
                <EditButtonWrap>
                  <EditButton onClick={onClickEditButton}>수정</EditButton>
                </EditButtonWrap>
                <DeleteButtonWrap>
                  <DeleteButton onClick={onClickDeleteButton}>삭제</DeleteButton>
                  {
                    isDeleteModalOpen && 
                    <DeleteModal isOpen={isDeleteModalOpen} closeModal={handleCloseDeleteModal} />
                  }
                </DeleteButtonWrap>
              </ButtonWrap>
            </RightWrap>
          </PostHeader>
          <SeparationWrap>
            <svg xmlns="http://www.w3.org/2000/svg" width="751" height="2" viewBox="0 0 751 2" fill="none">
              <path d="M0 1H751" stroke="#E8E8E8"/>
            </svg>
          </SeparationWrap>
          <ContentsWrap>
            <ImageWrap>
                {/* <DimLeft/>
                <DimRight/> */}
                <ArrowButtonLeft onClick={showPreviousImage}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M25 10L15 20L25 30" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </ArrowButtonLeft>
                {
                    imagesUrl &&
                    imagesUrl.map((image, index) => (
                        <Image
                            key={index}
                            src={image} 
                            style={{ display: index === currentImageIndex ? 'block' : 'none', position: 'relative' }}
                        >
                        </Image>
                ))}
                <ArrowButtonRight onClick={showNextImage}>
                    <svg xmlns="http://www.w3.org/2000/svg" width="40" height="40" viewBox="0 0 40 40" fill="none">
                        <path d="M15 30L25 20L15 10" stroke="white" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                    </svg>
                </ArrowButtonRight>
            </ImageWrap>
            <ImageButtonWrap>
                {
                    imagesUrl &&
                    imagesUrl.map((_, index) => (
                    <ImageButton 
                        key={index} 
                        onClick={() => showImage(index)}
                    >
                        {
                            currentImageIndex === index ? 
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                    <circle cx="3" cy="3" r="3" fill="#FF7A00"/>
                                </svg>
                                :
                                <svg xmlns="http://www.w3.org/2000/svg" width="6" height="6" viewBox="0 0 6 6" fill="none">
                                    <circle cx="3" cy="3" r="3" fill="#C8C8C8"/>
                                </svg>
                        }
                        
                    </ImageButton>
                ))}
            </ImageButtonWrap>
            <Contents>{contents}</Contents>
          </ContentsWrap>
      </PostBox>
    </>
  )
}

const PostBox = styled.div`
  /* margin: 20px; */
  display: flex;
  flex-direction: column;
  width: 751px;
  height: auto;
  padding: 0 32px;
  flex-shrink: 0;
  border-radius: 20px;
  border: 1px solid var(--festie-gray-200, #E8E8E8);
`;

const PostHeader = styled.div`
  display: flex;
  justify-content: space-between;
  margin-top: 26px;
`;

const LeftWrap = styled.div`

`;

const TitleWrap = styled.div`
  /* border: 1px solid green; */
  width: auto;
  height: 42px;
`;

const Title = styled.span`
  color: var(--festie-gray-900, #252525);
  font-family: SUIT Variable;
  font-size: 30px;
  font-style: normal;
  font-weight: 700;
  line-height: 140%;
  letter-spacing: 0.3px;
`;

const WriteInfoWrap = styled.div`
  display: flex;
  margin-top: 16px;
`;

const WriterWrap = styled.div`
  /* border: 1px solid green; */
  width: auto;
  height: 20px;
  margin-right: 24px;
`;

const Writer = styled.span`
  color: var(--festie-gray-700, #555);
  font-family: SUIT Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const DateWrap = styled.div`
  /* border: 1px solid green; */
  width: auto;
  height: 20px;
`;

const Date = styled.span`
  color: var(--festie-gray-500, #B7B7B7);
  font-family: SUIT Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const RightWrap = styled.div`
  display: flex;
  flex-direction: column;
`;

const CountWrap = styled.div`
  display: flex;
  justify-content: flex-end;
`;

const ViewsWrap = styled.div`
  /* border: 1px solid red; */
  display: inline-flex;
  align-items: center;
  width: auto;
  height: 20px;
  gap: 8px;
`;

const ViewsIcon = styled.div`
  width: 20px;
  height: 20px;
`;

const Views = styled.div`
  color: var(--festie-gray-500, #B7B7B7);
  font-family: SUIT Variable;
  font-size: 14px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
`;

const ButtonWrap = styled.div`
  display: ${({ $isWriter }) => ($isWriter ? "flex" : "none")};
  justify-content: space-between;
  margin-top: 15px;
  /* border: 1px solid blue; */
`;

const EditButtonWrap = styled.div`
  margin-right: 8px;
`;

const EditButton = styled.button`
  color: var(--festie-gray-700, #555);
  font-family: SUIT Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 21px;
  border: 1px solid var(--festie-gray-500, #B7B7B7);
  background: #FFF;

  &:hover {
    cursor: pointer;
  }
`;

const DeleteButtonWrap = styled.div`
`;

const DeleteButton = styled.button`
  color: var(--festie-gray-700, #555);
  font-family: SUIT Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  display: inline-flex;
  padding: 8px 16px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 21px;
  border: 1px solid var(--festie-gray-500, #B7B7B7);
  background: #FFF;
  
  &:hover {
    cursor: pointer;
  }
`;

const SeparationWrap = styled.div`
  margin-top: 10px;
  width: 751px;
  height: 0px;
  flex-shrink: 0;
  stroke-width: 1px;
  stroke: var(--festie-gray-200, #E8E8E8);  
`;

const ContentsWrap = styled.div`
  display: flex;
  width: 751px;
  flex-direction: column;
  margin-top: 46px;
  margin-bottom: 18px;
  flex-shrink: 0;
  /* border: 1px solid pink; */
`;

const ImageWrap = styled.div`
    border-radius: 20px;
    background: lightgray -40.448px -137px / 133.141% 154.439% no-repeat;
    height: 428px;
    display: flex;
    justify-content: center;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: contain;
    border-radius: 20px;
    position: relative;
`;

const ImageButtonWrap = styled.div`
    display: flex;
    justify-content: center;
    gap: 8px;
`;

// const Dim = styled.div`
//   border: 1px solid pink;
//   position: absolute;
//   width: 140px;
//   height: 100%;
//   top: 0;
//   border-radius: 20px;
//   background: ${(props) =>
//     props.left
//       ? 'linear-gradient(90deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 100%);'
//       : props.right
//       ? 'linear-gradient(270deg, rgba(0, 0, 0, 0.50) 0%, rgba(0, 0, 0, 0.00) 100%);'
//       : 'none'};
// `;

// const DimLeft = styled(Dim)`
//   left: 0;
//   opacity: 0;
// `;

// const DimRight = styled(Dim)`
//   right: 0;
//   opacity: 0;
// `;

const ArrowButton = styled.button`
    border: none;
    position: absolute; 
    top: 50%; 
    transform: translateY(-50%); 
    z-index: 1;
    background-color: transparent;

    &:hover {
        cursor: pointer;
    }
`;

const ArrowButtonLeft = styled(ArrowButton)`
    left: 12px;
`;

const ArrowButtonRight = styled(ArrowButton)`
    right: 12px; 
`;

const ImageButton = styled.button`
    border: none;
    background-color: transparent;

    &:hover {
        cursor: pointer;
    }
`;

const Contents = styled.span`
  color: var(--festie-gray-800, #3A3A3A);
  font-family: SUIT Variable;
  font-size: 16px;
  font-style: normal;
  font-weight: 500;
  line-height: 140%;
  white-space: pre-line;
`;
