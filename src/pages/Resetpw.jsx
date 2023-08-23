import React, { useState } from 'react';
import './Resetpw.css';
import alertredIcon from '../assets/alert_circle_red.svg';
import alertgrayIcon from '../assets/alert_circle_gray.svg';
import { NavLink } from "react-router-dom";

const ResetPasswordForm = () => {
  const [password, setPassword] = useState("");
  const [isPwNotFound, setIsPwNotFound] = useState(false);
  const [isSpecialCharIncluded, setIsSpecialCharIncluded] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 스크롤을 최상단으로 이동
  };

  const handleChangePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleBlurPassword = () => {
    // 비밀번호 유효성 검사를 위한 정규식
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{11,}$/;
    setIsValidPassword(passwordPattern.test(password));
    setIsSpecialCharIncluded(passwordPattern.test(password) && /[@$!%*?&]/.test(password));
  };

  // 하드코딩 동작 확인
  const handleBlur = (event) => {
    const inputPw = event.target.value; // 입력한 비밀번호
    const existingPws = ['Festiebestie23!',]; // 비밀번호 리스트 예시

    if (!existingPws.includes(inputPw)) {
      setIsPwNotFound(true);
    } else {
      setIsPwNotFound(false);
    }
  };
  
  return (
    <>
      <div className="resetpwForm">
        <h2>비밀번호 수정</h2>
        <p className='resetpwExplain'>기존 비밀번호와 바꾸려는 비밀번호를 입력해주세요</p>

        <form>
          <ul>
            <li><strong>기존 비밀번호</strong></li>
            {/* <li><input type="password" className="oripwText" placeholder="기존 비밀번호를 입력해주세요" /></li> */}
            <div>
              <input
                type="password"
                className="oripwText"
                placeholder="기존 비밀번호를 입력해주세요"
                onBlur={handleBlur}
              />
              {isPwNotFound && (
                <div>
                  <img
                    src={alertredIcon}
                    className="alertredIcon"
                    style={{ marginLeft: '469px', verticalAlign: 'sub' }}
                  />
                  <p className="resetpworialert">비밀번호가 일치하지 않아요</p>
                </div>
              )}
            {!isPwNotFound !== false && <span><p className="emptyalertform" style={{ marginLeft: '469px', verticalAlign: 'sub' }}>에러메시지공간</p></span>}

            </div>
            <li><strong>바꿀 비밀번호</strong></li>
            {/* <li><input type="password" className="newpwText" placeholder="바꾸려는 비밀번호를 입력해주세요" /></li> */}
            <input
            type="password"
            className={`passwordText ${!isValidPassword ? "error" : ""}`}
            placeholder="바꾸려는 비밀번호를 입력해주세요"
            onChange={handleChangePassword}
            onBlur={handleBlurPassword}
            />
            {!isValidPassword && <span><img src={alertredIcon} className="alertredIcon" style={{ marginLeft: '469px', verticalAlign: 'sub' }} /><p className="pwalert">특수문자를 포함해주세요.</p></span>}
            {isValidPassword && isSpecialCharIncluded && <span><img src={alertgrayIcon} className="alertgrayIcon" style={{ marginLeft: '469px', verticalAlign: 'sub' }} /><p className="pwform">영어 대/소문자, 특수문자 포함 11자 이상</p></span>}
            {/* <img src={alertgrayIcon} className="alertIcon" style={{ marginLeft: '469px', verticalAlign: 'sub' }} />
            <span className="resetpwnewalert">영어 대/소문자, 특수문자 포함 11자 이상</span> */}
            <NavLink to="/resetPw/finish" style={{ textDecoration: "none" }}>
              <div className="doneBtn" onClick={handleScrollToTop}>완료</div>
            </NavLink>
          </ul>
        </form>
      </div>

      <div className="togoFind">
        <span className="togofindText">비밀번호가 기억나지 않나요?</span>
        <NavLink to="/findPw" style={{ textDecoration: "none" }}>
          <span className="resetfindBtn" onClick={handleScrollToTop}>비밀번호 찾기</span>
        </NavLink>
        <input type="button" className="togoBtn" />
      </div>
    </>
  );
};

export default ResetPasswordForm;
