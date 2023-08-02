import { Reset } from 'styled-reset'
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Footer from "./components/Footer";
import Main from "./pages/Main"
import Login from "./pages/Login";
import View from "./pages/View"
import Share from "./pages/Share";
import Together from "./pages/Together";
import Signup2Form from './pages/Signup2';
import FindPasswordForm from './pages/Findpw';
import FindPwFinishForm from './pages/Findpwfin';
import ResetPasswordForm from './pages/Resetpw';
import ResetPasswordFinishForm from './pages/Resetpwfin';
import MyPage from './pages/Mypage';
import SignupForm from './pages/Signup';

function App() {
  return (
    <>
      <Reset />
      <Header />
      <Routes>
      {/* <Route path="/" element={<ResetPasswordForm/>} /> */}
        <Route path="/" element={<Main />} />
        <Route path="/view" element={<View />} />
        <Route path="/share" element={<Share />} />
        <Route path="/together" element={<Together />} />
      </Routes>
      <Footer />
    </>
  );
}

export default App;
