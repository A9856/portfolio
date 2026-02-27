import { NavLink } from "react-router-dom";
import { useState, useEffect } from "react";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`custom-navbar ${scrolled ? "scrolled" : ""}`}>
      <div className="container nav-container">
        <a href="/" className="logo">
          Adil Khan
        </a>

        {/* Hamburger */}
        <div 
          className={`hamburger ${menuOpen ? "active" : ""}`}
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span></span>
          <span></span>
          <span></span>
        </div>

        {/* Nav Links */}
        <ul className={`nav-links ${menuOpen ? "open" : ""}`}>
          <li><NavLink to="/" end onClick={() => setMenuOpen(false)}>Home</NavLink></li>
          <li><NavLink to="/about" onClick={() => setMenuOpen(false)}>About</NavLink></li>
          <li><NavLink to="/skills" onClick={() => setMenuOpen(false)}>Skills</NavLink></li>
          <li><NavLink to="/project" onClick={() => setMenuOpen(false)}>Projects</NavLink></li>
          <li><NavLink to="/education" onClick={() => setMenuOpen(false)}>Education</NavLink></li>
          <li><NavLink to="/contact" onClick={() => setMenuOpen(false)}>Contact</NavLink></li>
        </ul>
      </div>
    </nav>
  );
}
// import { NavLink } from 'react-router-dom';
// export default function Navbar() {
//   return (
//     <nav className="navbar navbar-expand-lg bg-body-tertiary sticky-top">
//       <div className="container">
//         <a href="#hero" className="logo navbar-brand">Adil Khan</a>

//         <button 
//           className="navbar-toggler" 
//           type="button" 
//           data-bs-toggle="collapse" 
//           data-bs-target="#navbarSupportedContent" 
//           aria-controls="navbarSupportedContent" 
//           aria-expanded="false" 
//           aria-label="Toggle navigation"
//         >
//           <span className="navbar-toggler-icon"></span>
//         </button>

//         <div className="collapse navbar-collapse" id="navbarSupportedContent">
//           <ul className="navbar-nav ms-auto mb-2 mb-lg-0">
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/">Home</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/about">About</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/skills">Skills</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/project">Project</NavLink>
//             </li>
           
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/education">Education</NavLink>
//             </li>
//             <li className="nav-item">
//               <NavLink className="nav-link" to="/contact">Contact</NavLink>
//             </li>
//           </ul>
//         </div>
//       </div>
//     </nav>
//   );
// }





