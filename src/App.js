import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import logo from "./logo.svg";
import Macbook from "./pages/Macbook";
import Artwork from "./pages/Artwork";
import Coworker from "./pages/Coworker";
import Project from "./pages/Project";
import Dock from "./components/dock";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <img src={logo} className="App-logo" alt="logo" />
        <Routes>
          <Route path="/" element={<Macbook />} />
          <Route path="/artwork" element={<Artwork />} />
          <Route path="/coworker" element={<Coworker />} />
          <Route path="/project" element={<Project />} />
        </Routes>
        <Dock />
      </BrowserRouter>
    </div>
  );
}

export default App;
