import { Reset } from "styled-reset";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main";
import Share from "./pages/Share";
import Together from "./pages/Together";
import PerformanceDetail from "./pages/PerformanceDetail"
import FestivalDetail from "./pages/FestivalDetail"

function App() {
  return (
    <>
      <Reset />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/share" element={<Share />} />
        <Route path="/together" element={<Together />} />
        <Route path="/view/performance/detail" element={<PerformanceDetail />} />
        <Route path="/view/festival/detail" element={<FestivalDetail />} />

      </Routes>
      <Footer />
    </>
  );
}

export default App;
