import React, { useState } from 'react';
import './Findpw.css';
import alertredIcon from '../assets/alert_circle_red.svg';
import { NavLink, useNavigate } from "react-router-dom";

const FindPasswordForm = () => {
  const navigate = useNavigate();
  const [isEmailNotFound, setIsEmailNotFound] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 스크롤을 최상단으로 이동
  };

  // 하드코딩 동작 확인
  const handleBlur = (event) => {
    const inputEmail = event.target.value; // 입력한 이메일
    const existingEmails = ['festie2023@gmail.com', 'sdw0917@naver.com']; // 이메일 리스트 예시

    if (!existingEmails.includes(inputEmail)) {
      setIsEmailNotFound(true);
    } else {
      setIsEmailNotFound(false);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("제출됨!");
  };

  const isSubmitDisabled = isEmailNotFound;


  // 서벼 연결
  // const handleBlur = async (event) => {
  //   const inputEmail = event.target.value; // 입력한 이메일

  //   try {
  //     // 서버로 POST 요청을 보내기, 서버의 API 엔드포인트는 '/checkEmail'으로 가정
  //     const response = await axios.post('/checkEmail', { email: inputEmail });

  //     // 서버에서 받은 응답을 확인하여 등록되지 않은 이메일인지 여부를 처리
  //     setIsEmailNotFound(!response.data.isRegistered);
  //   } catch (error) {
  //     console.error('Error during Axios request:', error);
  //   }
  // };

  return (
    <div className="findpwForm">
      <h2>비밀번호 찾기</h2>
      <p className='findpwExplain'>비밀번호를 찾을 이메일과 닉네임을 입력해주세요.</p>

      <form>
        <ul>
          <li>
            <strong>이메일</strong>
          </li>
          <div>
            <input
              type="text"
              className="FindpwemailText"
              placeholder="이메일을 입력해주세요"
              onBlur={handleBlur}
            />
            {isEmailNotFound && (
              <div>
                <img src={alertredIcon} className="alertredIcon" style={{ marginLeft: '469px', verticalAlign: 'sub' }}/>
                <p className="Findpwemailalert">등록되지 않은 이메일이에요</p>
              </div>
            )}
            {!isEmailNotFound && <span><p className="emptyalertform" style={{ marginLeft: '469px', verticalAlign: 'sub' }}>에러메시지공간</p></span>}
          </div>
          <li>
            <strong>닉네임</strong>
          </li>
          <li>
            <input type="text" className="FindpwnicknameText" placeholder="닉네임을 입력해주세요" />
          </li>
          {/* <div className="findpwnextBtn">다음</div> */}
          <div className={`findpwnextBtn ${isSubmitDisabled ? "disabled" : "enabled"}`}
            onClick={() => {
              if (!isSubmitDisabled) {
                handleSubmit();
                navigate('/findPw/finish');
              }
            }}
            disabled={isSubmitDisabled}
          >
            다음
          </div>
        </ul>
      </form>
    </div>
  );
};

export default FindPasswordForm;
