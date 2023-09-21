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

Create NavBar.jsx nd NavBarElement.jsx

import React from "react";
import { Nav, NavMenu } from "./NavBarElement";
import { NavLink } from "react-router-dom";

const Navbar = () => {
return (
<>

<Nav style={{ width: "100vw" }}>
<NavMenu>
<NavLink to="/" style={{ width: "8vw", textDecoration: "none" }}>
Home
</NavLink>

          <NavLink to="/about" style={{ width: "8vw", textDecoration: "none" }}>
            About
          </NavLink>

          <NavLink to="/work" style={{ width: "8vw", textDecoration: "none" }}>
            Work
          </NavLink>
        </NavMenu>
      </Nav>
    </>

);
};

export default Navbar;

import { NavLink as Link } from "react-router-dom";
import styled from "styled-components";

export const Nav = styled.nav`  background: #f8da5933;
  height: 85px;
  display: flex;
  justify-content: space-between;`;

export const NavLink = styled(Link)`  color: #808080;
  display: flex;
  align-items: center;
  text-decoration: none;
  padding: 0 1rem;
  height: 100%;
  cursor: pointer;`;

export const NavMenu = styled.div`  display: flex;
  align-items: center;
  margin-right: -24px;
  /* Second Nav */
  /* margin-right: 24px; */
  /* Third Nav */
  /* width: 100vw;
white-space: nowrap; */
  @media screen and (max-width: 768px) {
    display: none;
  }`;

export const NavBtnLink = styled(Link)`  border-radius: 4px;
  background: #808080;
  padding: 10px 22px;
  color: #000000;
  outline: none;
  border: none;
  cursor: pointer;
  transition: all 0.2s ease-in-out;
  text-decoration: none;`;

Make changes to app.jsx
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

Add scrollToTop button

Add to app.css
.top-to-btm{
position: relative;
}
.icon-position{
position: fixed;
bottom: 40px;
right: 25px;
z-index: 20;
}
.icon-style{
background-color: #551B54;
border: 2px solid #fff;
border-radius: 50%;
height: 50px;
width: 50px;
color: #fff;
cursor: pointer;
animation: movebtn 3s ease-in-out infinite;
transition: all .5s ease-in-out;
}
.icon-style:hover{
animation: none;
background: #fff;
color: #551B54;
border: 2px solid #551B54;
}
@keyframes movebtn {
0%{
transform: translateY(0px);
}
25%{
transform: translateY(20px);
}
50%{
transform: translateY(0px);
}
75%{
transform: translateY(-20px);
}
100%{
transform: translateY(0px);
}
}
