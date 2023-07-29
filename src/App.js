import { Reset } from "styled-reset";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import View from "./pages/View";
import Share from "./pages/Share";
import Together from "./pages/Together";
import PerformanceWrite from "./pages/PerformanceWrite";
import TicketingWrite from "./pages/TicketingWrite";
import TogetherWrite from "./pages/TogetherWrite";
import ReviewWrite from "./pages/ReviewWrite";
import GlobalStyle from "./GlobalStyle";

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
      </Routes>
      <Footer />
    </>
  );
}

export default App;
