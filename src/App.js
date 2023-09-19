import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Home from "./Pages/Home";
import "./font.css";
import AboutMe from "./Pages/AboutMe";
import WorkExperience from "./Pages/WorkExperience";
import NavBar from "./Component/NavBar";
function App() {
  return (
    <div className="App">
      <header className="App-header">
        <BrowserRouter>
          <NavBar />

          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="about" element={<AboutMe />} />
            <Route path="work" element={<WorkExperience />} />
          </Routes>
        </BrowserRouter>
      </header>
    </div>
  );
}

export default App;
