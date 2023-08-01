import { Reset } from 'styled-reset'
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main"
import View from "./pages/View"
import Share from "./pages/Share";
import Together from "./pages/Together";
//import Contents from "./pages/Contents"; //등록된 정보보기_메인페이지
//import SharingConcert from "./pages/SharingConcert"; //정보 공유_새로운 공연 메인페이지
//import Calendar from "./pages/Calendar"; //정보 공유_티켓팅 메인페이지
//import Festival from "./pages/Festival"; //등록된 정보 보기_축제 메인페이지
//import SharingFestival from "./pages/SharingFestival"; //정보 공유_새로운 축제 메인페이지
//import ReviewMain from "./pages/ReviewMain"; //정보 공유_후기 메인페이지
import TogetherMain from "./pages/TogetherMain"; //같이가요 메인페이지
//import Serch from "./pages/Serch"; //검색결과

function App() {
  return (
    <>
      <Reset />
      <Header />
      <Routes>
        <Route path="/" element={<TogetherMain/>} />
        <Route path="/view" element={<View />} />
        <Route path="/share" element={<Share />} />
        <Route path="/together" element={<Together />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
