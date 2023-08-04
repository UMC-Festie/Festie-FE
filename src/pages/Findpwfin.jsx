import React from 'react';
import './Findpwfin.css';

function FindPwFinishForm() {
  const handleLoginBtnClick = () => {
    window.location.href = "https://1drv.ms/u/s!Aq6D_pS4jMRRgTB5uioc5g20oBAg?e=XxKYkj";
    // or you can use location.replace to replace the current URL in history
    // location.replace('https://1drv.ms/u/s!Aq6D_pS4jMRRgTB5uioc5g20oBAg?e=XxKYkj');
  };

  return (
    <div className="findpwfinishForm">
      <h2>비밀번호 찾기</h2>
      <p>입력한 이메일로 임시 비밀번호를 발송했어요! <br/> 로그인 후 비밀번호를 수정해주세요.</p>
      <div className="togologinBtn" onClick={handleLoginBtnClick}>로그인하기</div>
    </div>
  );
}

export default FindPwFinishForm;

