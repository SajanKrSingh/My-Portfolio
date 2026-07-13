import React, { useState } from "react";
import { Helmet } from "react-helmet";
import Contact from "./components/contact/Contact";
import Experience from "./components/experience/Experience";
import Footer from "./components/footer/Footer";
import Header from "./components/header/Header";
import Intro from "./components/intro/Intro";
import Portfolio from "./components/portfolio/Portfolio";
import Testimonials from "./components/testimonials/Testimonials";
import Topbar from "./components/topbar/Topbar";
import Navbar from "./components/navbar/Navbar";
import Preloader from "./components/common/Preloader";
import ParticleField from "./components/common/ParticleField";
import useIsDesktop from "./components/common/useIsDesktop";

const App = () => {
  const [loading, setLoading] = useState(true);
  const isDesktop = useIsDesktop(768);

  return (
    <>
      {/* SEO Meta Tags */}
      <Helmet>
        <title>Sajan Kumar Singh — Full Stack Developer | Next.js & MERN</title>
        <meta
          name="description"
          content="Portfolio of Sajan Kumar Singh — Full Stack Developer specializing in Next.js and the MERN stack. Building enterprise CRM/HRMS platforms and AI-powered web applications."
        />
        <meta
          name="keywords"
          content="Sajan Kumar Singh, Full Stack Developer, Next.js Developer, MERN Stack, React Developer, Node.js, Web Developer India, Portfolio"
        />
        <meta name="author" content="Sajan Kumar Singh" />
        <meta property="og:title" content="Sajan Kumar Singh — Full Stack Developer" />
        <meta
          property="og:description"
          content="Full Stack Developer building enterprise CRM/HRMS platforms and AI-powered products with Next.js, React, Node.js and Firebase."
        />
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://sajansingh-portfolio.vercel.app" />
        <meta
          property="og:image"
          content="https://sajansingh-portfolio.vercel.app/preview.jpg"
        />
        <meta name="robots" content="index, follow" />
      </Helmet>

      <Preloader onComplete={() => setLoading(false)} />

      {!loading && (
        <>
          {/* Ambient 3D particle background (desktop only for performance) */}
          <div className="site-bg" aria-hidden="true">
            {isDesktop && <ParticleField />}
          </div>

          <Navbar />
          <main className="site-content">
            <Header />
            <Intro />
            <Experience />
            <Portfolio />
            <Testimonials />
            <Contact />
          </main>
          <Footer />
          <Topbar />
        </>
      )}
    </>
  );
};

export default App;
