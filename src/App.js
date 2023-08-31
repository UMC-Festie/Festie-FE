import { Reset } from "styled-reset";
import { Route, Routes } from "react-router-dom";
import GlobalStyle from "./GlobalStyle";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Login from "./pages/Login";
import Signup2Form from "./pages/Signup2";
import FindPasswordForm from "./pages/Findpw";
import FindPwFinishForm from "./pages/Findpwfin";
import ResetPasswordForm from "./pages/Resetpw";
import ResetPasswordFinishForm from "./pages/Resetpwfin";
import MyPage from "./pages/Mypage";
import SignupForm from "./pages/Signup";
import Contents from "./pages/Contents"; //등록된 정보보기_메인페이지
import SharingConcert from "./pages/SharingConcert"; //정보 공유_새로운 공연 메인페이지
import Calendar from "./pages/Calendar"; //정보 공유_티켓팅 메인페이지
import Festival from "./pages/Festival"; //등록된 정보 보기_축제 메인페이지
import SharingFestival from "./pages/SharingFestival"; //정보 공유_새로운 축제 메인페이지
import ReviewMain from "./pages/ReviewMain"; //정보 공유_후기 메인페이지
import TogetherMain from "./pages/TogetherMain"; //같이가요 메인페이지
import Search from "./pages/Search"; //검색결과
import PerformanceWrite from "./pages/PerformanceWrite";
import TicketingWrite from "./pages/TicketingWrite";
import TogetherWrite from "./pages/TogetherWrite";
import ReviewWrite from "./pages/ReviewWrite";
import TogetherDetail from "./pages/TogetherDetail";
import PerformanceDetail from "./pages/PerformanceDetail"
import FestivalDetail from "./pages/FestivalDetail"
import ReviewDetail from "./pages/ReviewDetail";

function App() {
  return (
    <>
      <GlobalStyle />
      <Reset />
        <Header />
        <Routes>
          <Route path="/" element={<Main />} />  {/* 메인 */}
          <Route path="/signUp" element={<SignupForm />} />  {/* 회원가입 */}
          <Route path="/signUp/next" element={<Signup2Form />} />  {/* 회원가입2 */}
          <Route path="/login" element={<Login />} />  {/* 로그인 */}
          <Route path="/findPw" element={<FindPasswordForm />} />  {/* 비밀번호 찾기 */}
          <Route path="/findPw/finish" element={<FindPwFinishForm />} />  {/* 비밀번호 찾기 완료 */}
          <Route path="/resetPw" element={<ResetPasswordForm />} />  {/* 비밀번호 수정 */}
          <Route path="/resetPw/finish" element={<ResetPasswordFinishForm />} />  {/* 비밀번호 수정 완료 */}


          <Route path="/search" element={<Search />} /> {/* 검색 결과 */}
          <Route path="/mypage" element={<MyPage />} /> {/* 마이 페이지 */}


          <Route path="/view/performance" element={<Contents />} />  {/* 정보 보기 > 등록된 공연 메인 */}
          <Route path="/view/festival" element={<Festival />} />  {/* 정보 보기 > 등록된 축제 메인 */}
          <Route path="/view/performance/detail" element={<PerformanceDetail />} />  {/* 정보 보기 > 등록된 공연 상세 */} 
          <Route path="/view/festival/detail" element={<FestivalDetail />} />  {/* 정보 보기 > 등록된 축제 상세 */}


          <Route path="/share/performance" element={<SharingConcert />} />  {/* 정보 공유 > 새로운 공연 메인 */}
          <Route path="/share/performance/write" element={<PerformanceWrite />}/> {/* 정보 공유 > 새로운 공연 작성 */}
          <Route path="/share/festival" element={<SharingFestival />} />  {/* 정보 공유 > 새로운 축제 메인 */}
          <Route path="/share/review" element={<ReviewMain />} />  {/* 정보 공유 > 후기 메인 */}
          <Route path="/share/review/write" element={<ReviewWrite />} />  {/* 정보 공유 > 후기 작성 */}
          <Route path="/share/review/detail" element={<ReviewDetail />} />  {/* 정보 공유 > 후기 작성 */}
          <Route path="/share/ticketing" element={<Calendar />} />  {/* 정보 공유 > 티켓팅 메인 */}
          <Route path="/share/ticketing/write" element={<TicketingWrite />} />  {/* 정보 공유 > 티켓팅 작성 */}


          <Route path="/together" element={<TogetherMain />} />  {/* 같이가요 메인 */}
          <Route path="/together/write" element={<TogetherWrite />} />{" "}  {/* 같이가요  작성 */}
          <Route path="/together/detail/:togetherId" element={<TogetherDetail />} />  {/* 같이가요 상세 */}
        </Routes>
        <Footer />
    </>
  );
}

export default App;
