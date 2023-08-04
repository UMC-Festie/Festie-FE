import { Reset } from "styled-reset";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Login from "./pages/Login";
import View from "./pages/View";
import Share from "./pages/Share";
import Together from "./pages/Together";
import Signup2Form from './pages/Signup2';
import FindPasswordForm from './pages/Findpw';
import FindPwFinishForm from './pages/Findpwfin';
import ResetPasswordForm from './pages/Resetpw';
import ResetPasswordFinishForm from './pages/Resetpwfin';
import MyPage from './pages/Mypage';
import SignupForm from './pages/Signup';
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
import GlobalStyle from "./GlobalStyle";
import TogetherDetail from './pages/TogetherDetail';

function App() {
  return (
    <>
      <GlobalStyle />
      <Reset />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/view" element={<View />} />
        <Route path="/share" element={<Share />} />
        <Route path="/together" element={<Together />} />
        <Route path="/share/performance_write" element={<PerformanceWrite />} />
        <Route path="/share/review_write" element={<ReviewWrite />} />
        <Route path="/share/ticketing_write" element={<TicketingWrite />} />
        <Route path="/together_write" element={<TogetherWrite />} />
        <Route path="/togetherDetail" element={<TogetherDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
