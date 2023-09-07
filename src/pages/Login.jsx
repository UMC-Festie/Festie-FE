import React, { useContext, useState } from 'react';
import './Login.css';
import lineIcon from "../assets/vector_7079.svg";
import axios from "axios";
import { NavLink, useNavigate } from "react-router-dom";
import { AuthContext } from '../AuthContext';
import { setCookie } from '../Cookies';

function LoginForm() {
  const PROXY = window.location.hostname === 'localhost' ? '' : '/proxy';
  const [email, setEmail] = useState(''); // 이메일을 위한 상태 변수
  const [password, setPassword] = useState(''); // 비밀번호를 위한 상태 변수
  const navigate = useNavigate();
  const { setIsLoggedIn } = useContext(AuthContext);

  const onClickLogin = async () => {
    try {
      const response = await axios.post(`${PROXY}/api/user/login`, {
        email,
        password,
      });

      if(response.status === 200) {
        // API 응답에서 받은 토큰 쿠키에 저장
        setCookie('accessToken', response.data, { path: '/' }); 
        setIsLoggedIn(true);
        localStorage.setItem('isLoggedIn', true);

        // alert('로그인 성공');
        navigate('/');
      }
    } catch (error) {
      console.error('로그인 실패:', error);
    }
  };
  
  // const onClickLogin = async () => {
  //   const fakeAccessToken = 'eyJhbGciOiJIUzI1NiJ9.eyJzdWIiOiJrZXZpbkBnbWFpbC5jb20iLCJyb2xlcyI6WyJVU0VSIl0sImlhdCI6MTY5MjUyMjMzOCwiZXhwIjoxNjkzMTI3MTM4fQ.l4_9X6gdPpLmK_v7xsISE0cmLJbxXDB-Xz4gDWV8woU'; // 하드코딩된 토큰 값
  
  //   try {
  //     // 토큰을 쿠키에 저장
  //     setCookie('accessToken', fakeAccessToken);
  
  //     // 토큰 사용하여 유저 이메일 컨텍스트 업데이트
  //     updateUserEmail(email);
  //   } catch (error) {
  //     console.error('로그인 실패:', error);
  //   }
  // };

  const handleScrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' }); // 스크롤을 최상단으로 이동
  };

  // axios.post('/api/user/login')
  // .then((Response) => {
  //     console.log(Response); 
  // })
  // .catch((Error) => {
  //     console.log(Error);
  // });

  // const onClickLogin = () => { //로그인 버튼 클릭 시 동작
  //   axios.post({
  //     url: '/api/user/login',
  //     method: 'POST',
  //     body: { email, password },
  //   })
  //     .then((res) => {
  //       localStorage.setItem('accessToken', res.data.accessToken);
  //       console.log(res.data);
  //       setEmail(res.data.email);
  //       setPassword(res.data.password);
  //       alert('로그인이 완료되었습니다.');
  //       window.location.replace('/');
  //     })
  //     .catch((err) => {
  //       alert('로그인 실패. 이메일과 비밀번호를 확인해주세요.');
  //     });
  // };

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
            value={email} // 값 바인딩
            onChange={(e) => setEmail(e.target.value)} // 값을 업데이트하기 위한 이벤트 핸들러
          />
            {/* <input
              type="text"
              className="loginemailText"
              placeholder="이메일을 입력해주세요"
            /> */}
          </li>
          <li>
            <strong>비밀번호</strong>
          </li>
          <li>
          <input
            type="password"
            className="loginpasswordText"
            placeholder="비밀번호를 입력해주세요"
            value={password} // 값 바인딩
            onChange={(e) => setPassword(e.target.value)} // 값을 업데이트하기 위한 이벤트 핸들러
          />
            {/* <input
              type="password"
              className="loginpasswordText"
              placeholder="비밀번호를 입력해주세요"
            /> */}
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
          <div className="loginBtn" onClick={onClickLogin}>로그인</div>
        </ul>
      </form>
      <form>
        <NavLink to="/signUp" style={{ textDecoration: "none" }}>
          <span className="joinBtn" onClick={handleScrollToTop}>회원가입하기</span>
        </NavLink>
        <span>
          <img
              src={lineIcon}
              style={{ marginLeft: '32px', verticalAlign: 'middle' }}
            />
        </span>
        <NavLink to="/findPw" style={{ textDecoration: "none" }}>
          <span className="findBtn" onClick={handleScrollToTop}>비밀번호 찾기</span>
        </NavLink>
        <div className="easyLogin" onClick={handleScrollToTop}>간편로그인</div>
      </form>
    </div>
  );
}

export default LoginForm;
