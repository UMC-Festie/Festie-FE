import React, { createContext, useContext, useState } from 'react';

// 초기값은 null 또는 빈 객체 등으로 설정
const UserContext = createContext();

// 이 파일에서 컨텍스트를 생성하고, 해당 컨텍스트로 사용될 Provider 컴포넌트를 내보내는 작업을 수행

export const useUserContext = () => useContext(UserContext);

export const UserProvider = ({ children }) => {
  const [userEmail, setUserEmail] = useState(null); // 유저 이메일 상태

  const updateUserEmail = (email) => {
    setUserEmail(email);
  };

  return (
    <UserContext.Provider value={{ userEmail, updateUserEmail }}>
      {children}
    </UserContext.Provider>
  );
};