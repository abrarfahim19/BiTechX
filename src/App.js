import { Route, Routes } from "react-router-dom";
import "./App.css";
import Body from "./components/Body/Body";
import LongStoryPage from "./components/LongStoryPage/LongStoryPage";
import NavBar from "./components/NavBar/NavBar";
import ShortStory from "./components/ShortStoy/ShortStory";
import Home from "./Pages/Home";

function App() {
  return (
    <div>
      <NavBar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/story" element={<ShortStory />} />
        <Route path="/longstory" element={<LongStoryPage />} />
      </Routes>
    </div>
  );
}

export default App;
