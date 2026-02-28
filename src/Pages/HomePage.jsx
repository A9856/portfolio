// Enhanced HomePage.jsx - Impressive Colors & Interactive Animations
import  { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import AOS from 'aos';
import 'aos/dist/aos.css';
import About from '../Components/About';
import Resume from '../Components/Resume';
import Skills from '../Components/Skills';
import ContactUsPage from './ContactUsPage';
import Project from '../Components/Project';
import Education from '../Components/Education';
import { Link } from 'react-router-dom';
import adil1 from "../assests/img/adil1.jpeg";
import resume from "../assests/img/resume1.jpeg";
import Certificates from '../Components/Certificate';

export default function HomePage() {
  const typedRef = useRef(null);

  useEffect(() => {
    AOS.init({
      duration: 1200,
      easing: 'ease-out-cubic',
      once: false,
      offset: 100,
      disable: 'mobile'
    });

    const typed = new Typed(typedRef.current, {
      strings: [
        'Full Stack Developer^1000',
        'MERN Stack Expert^1000',
        'React.js Specialist^1000',
        'Web Application Developer^1000'
      ],
      typeSpeed: 60,
      backSpeed: 30,
      backDelay: 1500,
      loop: true,
      showCursor: true,
      cursorChar: '|'
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      {/* Enhanced Hero Section */}
      <section id="hero" className="hero-section">
        <div className="hero-container">

          {/* Visual part first on mobile (image + tech icons) */}
          <div className="hero-visual" data-aos="fade-up" data-aos-duration="1400">
            <div className="image-wrapper">
              <img
                src={adil1}
                alt="Adil Khan - Developer"
                className="profile-img"
                loading="lazy"
              />
            </div>

            {/* Tech stack always below the image */}
            <div className="tech-stack-glow">
              <div className="tech-icons floating">
                <i className="fab fa-react tech-icon react-glow"></i>
                <i className="fab fa-node-js tech-icon node-glow"></i>
                <i className="fab fa-js-square tech-icon js-glow"></i>
                <i className="fas fa-database tech-icon db-glow"></i>
              </div>
            </div>
          </div>

          {/* Text content */}
          <div className="hero-content" data-aos="fade-right" data-aos-duration="1500">
            <div className="greeting-badge">
              <span>👋 Hello</span>
            </div>
            <h1 className="hero-title">
              I'm <span className="gradient-text">Adil Khan</span>
            </h1>
            <p className="hero-subtitle">
              Skilled <strong className="highlight">MERN Full Stack Developer</strong> 
              crafting scalable web applications with modern technologies
            </p>
            <p className="hero-typed">
              I'm a passionate <span ref={typedRef}></span>
            </p>

            <div className="hero-buttons">
              <a
                href={resume}
                target="_blank"
                rel="noopener noreferrer"
                className="btn btn-primary gradient-hover"
                data-aos="zoom-in"
                data-aos-delay="200"
              >
                <span className="btn-text">Download Resume</span>
                <span className="btn-icon">📄</span>
              </a>
              <Link
                to="/project"
                className="btn btn-secondary glass-hover"
                data-aos="zoom-in"
                data-aos-delay="400"
              >
                View My Work
              </Link>
            </div>

            <div className="social-links" data-aos="fade-up" data-aos-delay="600">
              <a href="https://github.com/a9856" target="_blank" rel="noopener noreferrer" className="social-link github">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/adil-khan-01b96627b" target="_blank" rel="noopener noreferrer" className="social-link linkedin">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://x.com/AdilKha38643869" target="_blank" rel="noopener noreferrer" className="social-link twitter">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

        </div>

        {/* Animated Background Particles */}
        <div className="particles-bg">
          <div className="particle particle-1"></div>
          <div className="particle particle-2"></div>
          <div className="particle particle-3"></div>
          <div className="particle particle-4"></div>
          <div className="particle particle-5"></div>
        </div>
      </section>

      <About />
      <Skills />
      <Resume />
      <Project />
      <Certificates/>
      <Education />
      <ContactUsPage />
    </>
  );
}
// import React, { useEffect, useRef } from 'react';
// import Typed from 'typed.js';
// import AOS from 'aos';
// import 'aos/dist/aos.css';
// import About from '../Components/About';
// import Resume from '../Components/Resume';
// import Skills from '../Components/Skills';
// import ContactUsPage from './ContactUsPage';
// import Project from '../Components/Project';
// import Education from '../Components/Education';
// import { Link } from 'react-router-dom';
// import bike1 from "../assests/img/bike1.webp"
// import resume from "../assests/img/Resume.jpeg"
// export default function HomePage() {
//   const typedRef = useRef(null);
//   useEffect(() => {

//     AOS.init({
//       duration: 1000,
//       easing: 'ease-in-out',
//       once: true,
//       mirror: false,
//     });

//     const typed = new Typed(typedRef.current, {
//       strings: ['Designer', 'Developer', 'Freelancer', 'Photographer'],
//       typeSpeed: 50,
//       backSpeed: 25,
//       loop: true,
//     });


//     return () => {
//       typed.destroy();
//     };
//   }, []);

//   return (
//     <>

//       <section id="hero" className="hero">
//         <div className="container1">
//           <div className="hero-content">
//             <h2>Hello, I'm <br /><span>Adil Khan</span></h2>
//             <p>I'm a skilled <strong>Mern Full Stack Developer</strong> with expertise in building scalable web applications using Java and Spring Boot.</p>
//             <p className="text-light">
//               I'm <span ref={typedRef}></span>
//             </p>
//             <div className="hero-buttons">
//               <a href={resume} target="_blank" rel="noopener noreferrer"className="btn btn-primary">Download Resume</a>
//               <Link to="https://github.com/" className="btn btn-secondary">View Projects</Link>
//             </div>
//             <div className="social-links">
//               <Link to="https://github.com/" target="_blank" rel="noopener noreferrer" aria-label="GitHub">
//                 <i className="fab fa-github"></i>
//               </Link>
//               <Link to="https://www.linkedin.com/in/adil-khan-01b96627b?utm_source=share&utm_campaign=share_via&utm_content=profile&utm_medium=android_app" target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
//                 <i className="fab fa-linkedin"></i>
//               </Link>
//               <Link to="https://x.com/AdilKha38643869?t=-zxImUYht3ZD-g15cI94_g&s=09" target="_blank" rel="noopener noreferrer" aria-label="Twitter">
//                 <i className="fab fa-twitter"></i>
//               </Link>
//             </div>
//           </div>
//           <div className="hero-image">
//             <img src={bike1} alt="Adil" />
//             <div className="tech-icons">
//               <i className="fab fa-node-js"></i>
//               <i className="fab fa-js"></i>
//               <i className="fab fa-react"></i>
//             </div>
//           </div>
//         </div>
//       </section>
//       <About />
//       <Skills />
//       <Resume />
//       <Project />
//       <Education />
//       <ContactUsPage />
//     </>
//   );
// }

