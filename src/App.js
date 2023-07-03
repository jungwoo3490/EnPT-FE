import logo from "./logo.svg";
import "./App.css";
import LevelSettingPage from "./pages/LevelSettingPage";
import TopicSettingPage from "./pages/TopicSettingPage";
import { BrowserRouter, Router, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LevelSettingPage />} />
          <Route path="/select" element={<TopicSettingPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
