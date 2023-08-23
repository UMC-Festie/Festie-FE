import React from 'react';
import './Resetpwfin.css';
import { NavLink } from "react-router-dom";

const handleScrollToTop = () => {
  window.scrollTo({ top: 0, behavior: 'smooth' }); // 스크롤을 최상단으로 이동
};

const ResetPasswordFinishForm = () => {
  return (
    <div className="resetpwfinishForm">
      <h2>비밀번호 수정</h2>
      <p>비밀번호가 성공적으로 변경됐어요!</p>
      <NavLink to="/mypage" style={{ textDecoration: "none" }}>
        <div className="togomyBtn" onClick={handleScrollToTop}>마이 페이지로 돌아가기</div>
      </NavLink>
    </div>
  );
};

export default ResetPasswordFinishForm;
