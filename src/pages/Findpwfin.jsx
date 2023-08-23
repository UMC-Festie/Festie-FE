import React from 'react';
import './Findpwfin.css';
import { NavLink, useNavigate } from "react-router-dom";

function FindPwFinishForm() {
  const navigate = useNavigate();
  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 스크롤을 최상단으로 이동
  };

  return (
    <div className="findpwfinishForm">
      <h2>비밀번호 찾기</h2>
      <p>입력한 이메일로 임시 비밀번호를 발송했어요! <br/> 로그인 후 비밀번호를 수정해주세요.</p>
      <div className="togologinBtn" onClick={() => {
        navigate('/login');
        handleScrollToTop();
      }}>
        로그인하기
      </div>
    </div>
  );
}

export default FindPwFinishForm;

