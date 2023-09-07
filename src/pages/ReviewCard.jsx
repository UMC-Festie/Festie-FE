//후기내용 임의로 작성함
import React from "react";
import "./ReviewCard.css";

const ReviewCard = ({ review }) => {
    // 후기 데이터에서 제목, 내용, 날짜, 조회수, 좋아요 수, 이미지를 가져옵니다.
    const { title, content, updatedAt, view, like, reviewImage } = review;
    console.log(review);

    // 내용을 최대 2줄까지만 보이도록 처리합니다.
    const truncatedContent = content.length > 190 ? `${content.slice(0, 190)}...` : content;

    return (
        <div className="review-card">
            <h3>{title}</h3>
            <div className="review-content">
                <p>{truncatedContent}</p>
                {reviewImage && <img src={reviewImage} alt="후기 이미지" className="review-image" />}
            </div>
            <div className="review-metadata">
                <span>{updatedAt}</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M0.667969 8.00033C0.667969 8.00033 3.33464 2.66699 8.0013 2.66699C12.668 2.66699 15.3346 8.00033 15.3346 8.00033C15.3346 8.00033 12.668 13.3337 8.0013 13.3337C3.33464 13.3337 0.667969 8.00033 0.667969 8.00033Z" stroke="#B7B7B7" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                    <path d="M8 10C9.10457 10 10 9.10457 10 8C10 6.89543 9.10457 6 8 6C6.89543 6 6 6.89543 6 8C6 9.10457 6.89543 10 8 10Z" stroke="#B7B7B7" stroke-width="1.2" stroke-linecap="round" stroke-linejoin="round" />
                </svg>{view}</span>
                <span><svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 16 16" fill="none">
                    <path d="M4.66536 7.33301L7.33203 1.33301C7.86246 1.33301 8.37117 1.54372 8.74625 1.91879C9.12132 2.29387 9.33203 2.80257 9.33203 3.33301V5.99967H13.1054C13.2986 5.99749 13.4901 6.03734 13.6664 6.11649C13.8428 6.19563 13.9998 6.31216 14.1266 6.45802C14.2534 6.60387 14.347 6.77556 14.4009 6.96118C14.4548 7.1468 14.4677 7.34191 14.4387 7.53301L13.5187 13.533C13.4705 13.8509 13.309 14.1407 13.064 14.349C12.819 14.5573 12.5069 14.67 12.1854 14.6663H4.66536M4.66536 7.33301V14.6663M4.66536 7.33301H2.66536C2.31174 7.33301 1.9726 7.47348 1.72256 7.72353C1.47251 7.97358 1.33203 8.31272 1.33203 8.66634V13.333C1.33203 13.6866 1.47251 14.0258 1.72256 14.2758C1.9726 14.5259 2.31174 14.6663 2.66536 14.6663H4.66536" stroke="#B7B7B7" stroke-width="1.09091" stroke-linecap="round" stroke-linejoin="round" />
                </svg>{like}</span>
            </div>
        </div>
    );
};

export { ReviewCard };
