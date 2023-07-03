import logo from "./logo.svg";
import "./App.css";
import LevelSettingPage from "./pages/LevelSettingPage";
import TopicSettingPage from "./pages/TopicSettingPage";
import EndPage from "./pages/EndPage";

import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <div className="App">
        <Routes>
          <Route path="/" element={<LevelSettingPage />} />
          <Route path="/select" element={<TopicSettingPage />} />
          <Route path="/end" element={<EndPage />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
