import "./App.css";
import { Route, Routes } from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Journal from "./components/travels/Journals";
import Joke from "./components/jokes/Joke";
import Main from "./components/landingPage/Main";
import Portfolio from "./components/portfolio/Portfolio";
import Meme from "./components/memeGenerator/Meme";
import DevLandingPage from "./components/devPort/DevLandingPage";
import TimeNow from "./components/timeNow/TimeNow";
import Pricing from "./components/timeNow/pricing/Pricing";

function App() {
  return (
    <div>
      <ScrollToTop />
      <Routes>
        <Route path="/*" element={<Main />}></Route>
        <Route exact path="/portfolio/*" element={<Portfolio />}></Route>
        <Route exact path="/journal/*" element={<Journal />}></Route>
        <Route exact path="/jokes/*" element={<Joke />}></Route>
        <Route exact path="/memes/*" element={<Meme />}></Route>
        <Route exact path="/devport/*" element={<DevLandingPage />}></Route>
        <Route exact path="/timenow/*" element={<TimeNow />}></Route>
        <Route exact path="/pricing/*" element={<Pricing />}></Route>
      </Routes>
    </div>
  );
}

export default App;
