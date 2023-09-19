Step 1 :

1. Clear App.js
2. Clear App.css :
   Add the following lines in .App-header

background-image: url("./images/background.gif");
background-repeat: no-repeat;
background-position: bottom right;

3. Change font by adding font folder. I have used EBGaramond

4. Add antd.

5. Add home page :
   a. Split it in 2 halfs. Rows and column introduction.
   b. Add image to left hand side of the page.
   c. Add HeroSection.jsx

   <div className="divider">
   <Card
   style={{
            width: "40vw",
            height: "40vh",
            }} >
   <img
   src="/me.jpeg"
   style={{ borderRadius: "200px", width: "10vw", height: "10vw" }}
   />
   <h1>Pratik Khanapurkar</h1>
   <h3>Tech Consultant DCPCR</h3>
   </Card>
   </div>

   d. Add HomeHeroSection.css file.

   contents :
   .divider {
   background-image: url("../images/homeScreenDivider.gif");
   background-position: center;
   width: 50vw;
   height: 100vh;
   display: flex;
   justify-content: center;
   align-items: center;
   }

6. Add navigation and routes.

npm install react-router-dom

7. Create two pages About me and Work experience

make changes to App.js

import "./App.css";
import AboutMe from "./Pages/AboutMe";
import Home from "./Pages/Home";
import WorkExperience from "./Pages/WorkExperience";
import "./font.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
function App() {
return (
<BrowserRouter>
<Routes>
<Route path="/" element={<Home />} />
<Route path="about" element={<AboutMe />} />
<Route path="work" element={<WorkExperience />} />
</Routes>
</BrowserRouter>
);
}

export default App;

Workexperience component

npm install react-router-dom
npm install styled-components@5.3.10
