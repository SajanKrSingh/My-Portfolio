import React from "react";
import { Helmet } from "react-helmet";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import logo from "./assets/myLogo.png";

const App = () => {
  return (
    <>
      {/* ✅ SEO Meta Tags */}
      <Helmet>
        <title>Sajan Kumar Singh |Portfolio</title>
        <meta
          name="description"
          content="Hi, I'm Sajan Kumar Singh, a passionate MERN Stack developer. Here's my personal portfolio with projects, experience, and contact info."
        />
        <meta
          name="keywords"
          content="Sajan Kumar, Sajan Kumar Singh, MERN Stack Developer,Sajan Portfolio, Web Developer , React Developer, React.js, JavaScript, Frontend Developer, Portfolio"
        />
        <meta name="author" content="Sajan Kumar Singh" />
        <meta property="og:title" content="Sajan Kumar Singh Portfolio" />
        <meta
          property="og:description"
          content="MERN Stack Developer Portfolio of Sajan Kumar Singh"
        />
        <meta property="og:type" content="website" />
        <meta
          property="og:url"
          content="https://sajansingh-portfolio.vercel.app"
        />
        <meta
          property="og:image"
          content="https://sajansingh-portfolio.vercel.app/preview.jpg"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      {/* ✅ Main Application Components */}
      <div className="logo1">
        <img src={logo} id="myLogo" alt="Sajan Kumar Singh Logo" />
      </div>
      <Header />
      <Topbar />
      <Intro />
      <Experience />
      <Portfolio />
      <Testimonials />
      <Contact />
      <Footer />
    </>
  );
};

export default App;
