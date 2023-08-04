import React, { useState } from 'react';
import './Signup2.css';
import alertredIcon from '../assets/alert_circle_red.svg';

const Signup2Form = () => {
  const [selectedSex, setSelectedSex] = useState(null);
  const [isNicknameTaken, setIsNicknameTaken] = useState(false);

  const handleSexClick = (sex) => {
    setSelectedSex(sex);
  };
  
  const handleBlur = (event) => {
    const inputNickname = event.target.value; // 입력한 닉네임
    // 여기에서 닉네임 중복 여부를 확인하는 로직을 추가합니다.
    // 만약 중복된 닉네임이라면 setIsNicknameTaken(true)로 설정합니다.
    const existingNicknames = ['운히', '포디', '히동', '쥬쥬']; // 기존에 가입된 닉네임 리스트(프론트엔드파트원들로 임의로 설정)
    if (existingNicknames.includes(inputNickname)) {
      setIsNicknameTaken(true);
    } else {
      setIsNicknameTaken(false);
    }
  };

  return (
    <div className="signup2Form">
      <h2>
        Festie에 오신걸
        <br />
        환영합니다!
      </h2>
      <div className="page2">2/2</div>
      <p>
        같이가요 서비스를 위해서 닉네임, 성별, 나이를 입력해주세요.
        <br />
        닉네임을 제외한 성별과 나이는 수정이 불가합니다.
      </p>
      <form>
        <div>
          <span className="text">닉네임</span>
          <input
            type="text"
            className="nicknameText"
            placeholder="닉네임을 입력해주세요"
            onBlur={handleBlur}
          />
          {isNicknameTaken && (
            <div>
              <img
                src={alertredIcon}
                className="alertredIcon"
                style={{ marginLeft: '469px', verticalAlign: 'sub' }}
              />
              <p className="nicknamealert">이미 가입된 닉네임입니다</p>
            </div>
          )}
        </div>
        {/* <div>
          <span className="text">닉네임</span>
          <input type="text" className="nicknameText" placeholder="닉네임을 입력해주세요" />
          <img src={alertredIcon} className="alertredIcon" style={{ marginLeft: '469px', verticalAlign: 'sub' }} />
          <p className="emailalert">이미 가입된 닉네임입니다</p>
        </div> */}
        <div>
          <span className="text">생년월일</span>
          <span className="textSex">성별</span>
        </div>
        <div className="inputBirthsex">
          <input type="text" className="birthText" placeholder="YYYY-MM-DD" />
          <span
            className={`sexBtn ${selectedSex === '남자' ? 'clicked' : ''}`}
            style={{ marginLeft: '40px' }}
            onClick={() => handleSexClick('남자')}
          >
            남자
          </span>
          <span
            className={`sexBtn ${selectedSex === '여자' ? 'clicked' : ''}`}
            style={{ marginLeft: '12px' }}
            onClick={() => handleSexClick('여자')}
          >
            여자
          </span>
        </div>
        <div className="signup2doneBtn">완료</div>
      </form>
    </div>
  );
};

export default Signup2Form;
