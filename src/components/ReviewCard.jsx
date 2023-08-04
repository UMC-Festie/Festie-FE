//후기내용 임의로 작성함
import React from "react";
import "./ReviewCard.css";
const dummyReviews = [
        {
          id: 1,
          title: "후기 제목 1",
          content: "이상, 못할 밥을 끓는 찾아다녀도, 뿐이다. 든 놀이 그들은 때문이다. 못하다 더운지라 우리 하여도 그들은 그들에게 구하기 뿐이다. 인생을 곳으로 과실이 위하여 것은 석가는 열매를 뿐이다. 뼈 못하다 생의 않는 청춘 철환하였는가? 열매를 불어 수 곳이 같이, 대한 이것이다. 위하여서 불어 공자는 것이다. 보라,...",
          date: "2023.07.27",
          viewCount: 154,
          likeCount: 34,
          type: "축제",
          image :'http://tkfile.yes24.com/upload2/perfblog/202306/20230607/20230607-46113.jpg/dims/quality/70/',
        },
        {
          id: 2,
          title: "후기 제목 2",
          content: "간략한 후기 내용입니다.",
          date: "2023.07.28",
          viewCount: 67,
          likeCount: 12,
          type: "축제",
        },
        {
          id: 1,
          title: "후기 제목 3",
          content: "간략한 후기 내용입니다.",
          date: "2023.07.27",
          viewCount: 154,
          likeCount: 34,
          type: "축제",
        },
        {
          id: 2,
          title: "후기 제목 4",
          content: "간략한 후기 내용입니다.",
          date: "2023.07.28",
          viewCount: 67,
          likeCount: 12,
          type: "축제",
        }, {
          id: 1,
          title: "후기 제목 5",
          content: "간략한 후기 내용입니다.",
          date: "2023.07.27",
          viewCount: 154,
          likeCount: 34,
          type: "축제",
        },
        {
          id: 2,
          title: "후기 제목 6",
          content: "간략한 후기 내용입니다.",
          date: "2023.07.28",
          viewCount: 67,
          likeCount: 12,
          type:"공연",
        }, {
          id: 1,
          title: "후기 제목 7",
          content: "간략한 후기 내용입니다.",
          date: "2023.07.27",
          viewCount: 154,
          likeCount: 34,
          type:"공연",
        },
        {
          id: 2,
          title: "후기 제목 8",
          content: "간략한 후기 내용입니다.",
          date: "2023.07.28",
          viewCount: 67,
          likeCount: 12,
          type:"공연",
        }, {
          id: 1,
          title: "후기 제목 9",
          content: "간략한 후기 내용입니다.",
          date: "2023.07.27",
          viewCount: 154,
          likeCount: 34,
          type:"공연",
        },
        {
          id: 2,
          title: "후기 제목 10",
          content: "간략한 후기 내용입니다.",
          date: "2023.07.28",
          viewCount: 67,
          likeCount: 12,
          type:"공연",
        }, {
          id: 1,
          title: "후기 제목 11",
          content: "간략한 후기 내용입니다.",
          date: "2023.07.27",
          viewCount: 154,
          likeCount: 34,
          type: "후기",
        },
        {
          id: 2,
          title: "후기 제목 12",
          content: "간략한 후기 내용입니다.",
          date: "2023.07.28",
          viewCount: 67,
          likeCount: 12,
          type: "후기",
        }, {
          id: 1,
          title: "후기 제목 13",
          content: "간략한 후기 내용입니다.",
          date: "2023.07.27",
          viewCount: 154,
          likeCount: 34,
          type: "후기",
        },
        {
          id: 2,
          title: "후기 제목 2",
          content: "간략한 후기 내용입니다.",
          date: "2023.07.28",
          viewCount: 67,
          likeCount: 12,
          type: "후기",
        }, {
          id: 1,
          title: "후기 제목 14",
          content: "간략한 후기 내용입니다.",
          date: "2023.07.27",
          viewCount: 154,
          likeCount: 34,
          type: "후기",
        },
        {
          id: 2,
          title: "후기 제목 2",
          content: "간략한 후기 내용입니다.",
          date: "2023.07.28",
          viewCount: 67,
          likeCount: 12,
          type:"티켓팅",
        }, {
          id: 1,
          title: "후기 제목 15",
          content: "간략한 후기 내용입니다.",
          date: "2023.07.27",
          viewCount: 154,
          likeCount: 34,
          type:"티켓팅",
        },
        {
          id: 2,
          title: "후기 제목 16",
          content: "간략한 후기 내용입니다.",
          date: "2023.07.28",
          viewCount: 67,
          likeCount: 12,
          type:"티켓팅",
        }, {
          id: 1,
          title: "후기 제목 17",
          content: "간략한 후기 내용입니다.",
          date: "2023.07.27",
          viewCount: 154,
          likeCount: 34,
          type:"같이가요",
        },
        {
          id: 2,
          title: "후기 제목 18",
          content: "간략한 후기 내용입니다.",
          date: "2023.07.28",
          viewCount: 67,
          likeCount: 12,
          type:"같이가요",
        }, {
          id: 1,
          title: "후기 제목 19",
          content: "간략한 후기 내용입니다.",
          date: "2023.07.27",
          viewCount: 154,
          likeCount: 34,
          type:"같이가요",
        },
        {
          id: 2,
          title: "후기 제목 20",
          content: "간략한 후기 내용입니다.",
          date: "2023.07.28",
          viewCount: 67,
          likeCount: 12,
          type:"같이가요",
        },
        // ... 더 많은 후기 데이터
  ];
const ReviewCard = ({ review }) => {
    // 후기 데이터에서 제목, 내용, 날짜, 조회수, 좋아요 수, 이미지를 가져옵니다.
    const { title, content, date, viewCount, likeCount, image } = review;

    // 내용을 최대 2줄까지만 보이도록 처리합니다.
    const truncatedContent = content.length > 190 ? `${content.slice(0, 190)}...` : content;

    return (
        <div className="review-card">
            <h3>{title}</h3>
            <div className="review-content">
                <p>{truncatedContent}</p>
                {image && <img src={image} alt="후기 이미지" className="review-image" />}
            </div>
            <div className="review-metadata">
                <span>{date}</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M0.667969 8.00033C0.667969 8.00033 3.33464 2.66699 8.0013 2.66699C12.668 2.66699 15.3346 8.00033 15.3346 8.00033C15.3346 8.00033 12.668 13.3337 8.0013 13.3337C3.33464 13.3337 0.667969 8.00033 0.667969 8.00033Z" stroke="#B7B7B7" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#B7B7B7" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>{viewCount}</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4.66536 7.33301L7.33203 1.33301C7.86246 1.33301 8.37117 1.54372 8.74625 1.91879C9.12132 2.29387 9.33203 2.80257 9.33203 3.33301V5.99967H13.1054C13.2986 5.99749 13.4901 6.03734 13.6664 6.11649C13.8428 6.19563 13.9998 6.31216 14.1266 6.45802C14.2534 6.60387 14.347 6.77556 14.4009 6.96118C14.4548 7.1468 14.4677 7.34191 14.4387 7.53301L13.5187 13.533C13.4705 13.8509 13.309 14.1407 13.064 14.349C12.819 14.5573 12.5069 14.67 12.1854 14.6663H4.66536M4.66536 7.33301V14.6663M4.66536 7.33301H2.66536C2.31174 7.33301 1.9726 7.47348 1.72256 7.72353C1.47251 7.97358 1.33203 8.31272 1.33203 8.66634V13.333C1.33203 13.6866 1.47251 14.0258 1.72256 14.2758C1.9726 14.5259 2.31174 14.6663 2.66536 14.6663H4.66536" stroke="#B7B7B7" stroke-width="1.09091" stroke-linecap="round" stroke-linejoin="round" />
                </svg>{likeCount}</span>
            </div>
        </div>
    );
};

export { ReviewCard, dummyReviews };
