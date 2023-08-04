import React, { useState } from 'react';
import './Login.css';
import lineIcon from "../assets/vector_7079.svg";

function LoginForm() {
  return (
    <div className="loginForm">
      <h2>
        Festie에 오신걸
        <br />
        환영합니다!
      </h2>

      <form>
        <ul>
          <li>
            <strong>이메일</strong>
          </li>
          <li>
            <input
              type="text"
              className="loginemailText"
              placeholder="이메일을 입력해주세요"
            />
          </li>
          <li>
            <strong>비밀번호</strong>
          </li>
          <li>
            <input
              type="password"
              className="loginpasswordText"
              placeholder="비밀번호를 입력해주세요"
            />
          </li>
          <div className="checkboxWrap">
            <input type="checkbox" id="saveEmail" />
            <label htmlFor="saveEmail">
              <span></span>이메일 저장
            </label>
            <input type="checkbox" id="autoLogin" />
            <label htmlFor="autoLogin">
              <span></span>자동로그인
            </label>
          </div>
          <div className="loginBtn">로그인</div>
        </ul>
      </form>
      <form>
        <span className="joinBtn">회원가입하기</span>
        <span>
          <img
              src={lineIcon}
              style={{ marginLeft: '32px', verticalAlign: 'middle' }}
            />
        </span>
        <span className="findBtn">비밀번호 찾기</span>
        <div className="easyLogin">간편로그인</div>
      </form>
    </div>
  );
}

export default LoginForm;
