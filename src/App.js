import { Reset } from 'styled-reset'
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main"
import View from "./pages/View"
import Share from "./pages/Share";
import Together from "./pages/Together";
import TogetherDetail from './pages/TogetherDetail';

function App() {
  return (
    <>
      <Reset />
      <Header />
      <Routes>
        <Route path="/" element={<Main />} />
        <Route path="/view" element={<View />} />
        <Route path="/share" element={<Share />} />
        <Route path="/together" element={<Together />} />
        <Route path="/togetherDetail" element={<TogetherDetail />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
