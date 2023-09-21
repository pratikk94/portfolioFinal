import "./App.css";
import Home from "./Pages/Home";
import "./font.css";
import AboutMe from "./Pages/AboutMe";
import WorkExperience from "./Pages/WorkExperience";
import ScrollToTop from "./Component/ScrollToTop";
import { useRef } from "react";

function App() {
  const AboutMeSection = useRef(null);
  const HomeSection = useRef(null);
  const WorkExperienceSection = useRef(null);
  const scrollDown = (ref) => {
    console.log(ref);
    window.scrollTo({
      top: ref.current.offsetTop,
      behavior: "smooth",
    });
  };
  return (
    <div className="App">
      <header className="App-header">
        <ScrollToTop />
        <div className="NavBar">
          <ul
            style={{
              color: "white",
              listStyleType: "none",
              width: "100vw",
              justifyContent: "center",
            }}
          >
            <li
              style={{ width: "8vw", textDecoration: "none" }}
              onClick={() => scrollDown(HomeSection)}
            >
              Home
            </li>

            <li
              style={{ width: "8vw", textDecoration: "none" }}
              onClick={() => scrollDown(AboutMeSection)}
            >
              About
            </li>

            <li
              style={{ width: "8vw", textDecoration: "none" }}
              onClick={() => scrollDown(WorkExperienceSection)}
            >
              Work
            </li>
          </ul>
        </div>
        <div className="section section2" ref={HomeSection}>
          <Home />
        </div>
        <div className="section section3" ref={AboutMeSection}>
          <AboutMe />
        </div>
        <div className="section section4" ref={WorkExperienceSection}>
          <WorkExperience />
        </div>
      </header>
    </div>
  );
}

export default App;
