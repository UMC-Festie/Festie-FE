import React, { useState } from 'react';
import './Signup.css';
import alertredIcon from '../components/alert_circle_red.svg';
import alertgrayIcon from '../components/alert_circle_gray.svg';

// function SignupForm() {
//   // // Handle form submission and validation here (if needed)
//   // const handleSubmit = (event) => {
//   //   event.preventDefault();
//   //   // Your form submission and validation logic goes here (if needed)
//   // };

//   const SignupForm = () => {
//     const [email, setEmail] = useState("");
//     const [password, setPassword] = useState("");
//     const [passwordCheck, setPasswordCheck] = useState("");
//     const [isValidEmail, setIsValidEmail] = useState(true);
//     const [isValidPassword, setIsValidPassword] = useState(true);
//     const [isPasswordMatch, setIsPasswordMatch] = useState(true);
//   };
  
//     const handleChangeEmail = (e) => {
//       const { value } = e.target;
//       setEmail(value);
//     };
  
//     const handleChangePassword = (e) => {
//       const { value } = e.target;
//       setPassword(value);
//     };
  
//     const handleChangePasswordCheck = (e) => {
//       const { value } = e.target;
//       setPasswordCheck(value);
//     };
  
//     const handleSubmit = (e) => {
//       e.preventDefault();
  
//       // 이메일 유효성 검사를 위한 정규식
//       const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
//       setIsValidEmail(emailPattern.test(email));
  
//       // 비밀번호 유효성 검사
//       const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{11,}$/;
//       setIsValidPassword(passwordPattern.test(password));
  
//       // 비밀번호와 비밀번호 재확인 일치 여부 검사
//       setIsPasswordMatch(password === passwordCheck);
//     };
  
//     const isSubmitDisabled = !isValidEmail || !isValidPassword || !isPasswordMatch;
  

//   return (
//     <div className="signup1Form">
//       <h2>Festie에 오신걸<br />환영합니다!</h2>
//       <div className="page1">1/2</div>

//       <form onSubmit={handleSubmit}>
//         <ul>
//           <li><strong>이메일</strong></li>
//           <li></li>
//           <input type="text" className="emailText" placeholder="아이디가 될 이메일을 입력해주세요" />
//           <img src={alertredIcon} className="alertredIcon" style={{ marginLeft: '469px', verticalAlign: 'sub' }} />
//           <span><p className="emailalert">올바른 형식의 이메일을 입력해주세요.</p></span>
//           <li><strong>비밀번호</strong></li>
//           <li></li>
//           <input type="password" className="passwordText" placeholder="(주의사항을 확인하고) 비밀번호를 입력해주세요" />
//           <li></li>
//           <img src={alertgrayIcon} className="alertgrayIcon" style={{ marginLeft: '469px', verticalAlign: 'sub' }} />
//           <span><p className="pwalert">영어 대/소문자, 특수문자 포함 11자 이상</p></span>
//           <li><strong>비밀번호 재확인</strong></li>
//           <li></li>
//           <input type="password" className="passwordcheckText" placeholder="비밀번호를 입력해주세요" />
//           <img src={alertredIcon} className="alertredIcon" style={{ marginLeft: '469px', verticalAlign: 'sub' }} />
//           <span><p className="pwcheckalert">비밀번호가 일치하지 않아요.</p></span>
//           <div className="nextBtn" type="submit">다음</div>
//         </ul>
//       </form>
//     </div>
//   );
// }

// export default SignupForm;

const SignupForm = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [passwordCheck, setPasswordCheck] = useState("");
  const [isValidEmail, setIsValidEmail] = useState(true);
  const [isValidPassword, setIsValidPassword] = useState(true);
  const [isPasswordMatch, setIsPasswordMatch] = useState(true);
  const [isSpecialCharIncluded, setIsSpecialCharIncluded] = useState(true);

  const handleChangeEmail = (e) => {
    const { value } = e.target;
    setEmail(value);
  };

  const handleChangePassword = (e) => {
    const { value } = e.target;
    setPassword(value);
  };

  const handleChangePasswordCheck = (e) => {
    const { value } = e.target;
    setPasswordCheck(value);
  };

  const handleBlurEmail = () => {
    // 이메일 유효성 검사를 위한 정규식
    const emailPattern = /^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,4}$/i;
    setIsValidEmail(emailPattern.test(email));
  };

  const handleBlurPassword = () => {
    // 비밀번호 유효성 검사를 위한 정규식
    const passwordPattern = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{11,}$/;
    setIsValidPassword(passwordPattern.test(password));
    setIsSpecialCharIncluded(passwordPattern.test(password) && /[@$!%*?&]/.test(password));
  };

  const handleBlurPasswordCheck = () => {
    // 비밀번호와 비밀번호 재확인 일치 여부 검사
    setIsPasswordMatch(password === passwordCheck);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // 여기서 제출 처리 로직을 추가하세요.
    console.log("제출됨!");
  };

  const isSubmitDisabled = !isValidEmail || !isValidPassword || !isSpecialCharIncluded || !isPasswordMatch;

  return (
    <div className="signupForm">
      <h2>Festie에 오신걸<br />환영합니다!</h2>
      <div className="page1">1/2</div>

      <form onSubmit={handleSubmit}>
        <ul>
          <li><strong>이메일</strong></li>
          <li></li>
          <input
            type="text"
            className={`emailText ${!isValidEmail ? "error" : ""}`}
            placeholder="아이디가 될 이메일을 입력해주세요"
            onChange={handleChangeEmail}
            onBlur={handleBlurEmail}
          />
          {!isValidEmail && <span><img src={alertredIcon} className="alertredIcon" style={{ marginLeft: '469px', verticalAlign: 'sub' }} /><p className="emailalert">올바른 형식의 이메일을 입력해주세요.</p></span>}
          <li><strong>비밀번호</strong></li>
          <li></li>
          <input
            type="password"
            className={`passwordText ${!isValidPassword ? "error" : ""}`}
            placeholder="(주의사항을 확인하고) 비밀번호를 입력해주세요"
            onChange={handleChangePassword}
            onBlur={handleBlurPassword}
          />
          {!isValidPassword && <span><img src={alertredIcon} className="alertredIcon" style={{ marginLeft: '469px', verticalAlign: 'sub' }} /><p className="pwalert">특수문자를 포함해주세요.</p></span>}
          {isValidPassword && isSpecialCharIncluded && <span><img src={alertgrayIcon} className="alertgrayIcon" style={{ marginLeft: '469px', verticalAlign: 'sub' }} /><p className="pwform">영어 대/소문자, 특수문자 포함 11자 이상</p></span>}
          <li><strong>비밀번호 재확인</strong></li>
          <li></li>
          <input
            type="password"
            className={`passwordcheckText ${!isPasswordMatch ? "error" : ""}`}
            placeholder="비밀번호를 입력해주세요"
            onChange={handleChangePasswordCheck}
            onBlur={handleBlurPasswordCheck}
          />
          {!isPasswordMatch && <span><img src={alertredIcon} className="alertredIcon" style={{ marginLeft: '469px', verticalAlign: 'sub' }} /><p className="pwcheckalert">비밀번호가 일치하지 않아요.</p></span>}
          <div className="signupnextBtn" type="submit" disabled={isSubmitDisabled}>다음</div>
        </ul>
      </form>
    </div>
  );
};

export default SignupForm;

