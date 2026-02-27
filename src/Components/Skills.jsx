import React, { useEffect, useRef } from "react";


export default function Skills() {
  const sectionRef = useRef(null);

  useEffect(() => {
    const bars = document.querySelectorAll(".progress-bar");

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            bars.forEach((bar) => {
              const width = bar.getAttribute("data-width");
              bar.style.width = width;
            });
          }
        });
      },
      { threshold: 0.4 }
    );

    if (sectionRef.current) {
      observer.observe(sectionRef.current);
    }
  }, []);

  const frontendSkills = [
    { name: "HTML5", icon: "fab fa-html5", percent: "90%" },
    { name: "CSS3", icon: "fab fa-css3-alt", percent: "85%" },
    { name: "Bootstrap", icon: "fab fa-bootstrap", percent: "80%" },
    { name: "JavaScript", icon: "fab fa-js", percent: "85%" },
    { name: "TypeScript", icon: "devicon-typescript-plain", percent: "70%" },
    { name: "React.js", icon: "fab fa-react", percent: "80%" },
    { name: "Next.js", icon: "devicon-nextjs-original", percent: "75%" },
    { name: "Redux", icon: "devicon-redux-original", percent: "75%" },
    { name: "Tailwind CSS", icon: "devicon-tailwindcss-plain", percent: "85%" },
    { name: "Material UI", icon: "devicon-materialui-plain", percent: "70%" },
    { name: "Vite", icon: "devicon-vitejs-plain", percent: "80%" },
    { name: "ShadCN UI", icon: "fas fa-palette", percent: "75%" },
  ];

  const backendSkills = [
    { name: "Node.js", icon: "fab fa-node-js", percent: "75%" },
    { name: "Express.js", icon: "fas fa-server", percent: "70%" },
    { name: "MongoDB", icon: "devicon-mongodb-plain", percent: "80%" },
    { name: "REST APIs", icon: "fas fa-network-wired", percent: "75%" },
    { name: "Python", icon: "fab fa-python", percent: "65%" },
  { name: "C", icon: "devicon-c-plain", percent: "70%" },
  { name: "C++", icon: "devicon-cplusplus-plain", percent: "70%" },
  { name: "C#", icon: "devicon-csharp-plain", percent: "65%" },
  { name: ".NET", icon: "devicon-dotnetcore-plain", percent: "65%" },
  ];
  const toolsSkills = [
    { name: "Git", icon: "fab fa-git-alt", percent: "80%" },
    { name: "GitHub", icon: "fab fa-github", percent: "85%" },
    { name: "JSON Server", icon: "fas fa-database", percent: "70%" },
    { name: "Vercel", icon: "fas fa-cloud", percent: "75%" },
    { name: "Render", icon: "fas fa-server", percent: "70%" },
    { name: "Postman", icon: "fas fa-paper-plane", percent: "75%" },
    { name: "NPM", icon: "fab fa-npm", percent: "80%" },
    { name: "ShadCN UI", icon: "fas fa-palette", percent: "70%" },
    { name: "VS Code", icon: "devicon-vscode-plain", percent: "90%" },
  ];

  const renderSkills = (skills) =>
    skills.map((skill, index) => (
      <li key={index}>
        <div className="skill-header">
          <span>
            <i className={skill.icon}></i> {skill.name}
          </span>
          <span className="val">{skill.percent}</span>
        </div>
        <div className="progress-bar-wrap">
          <div
            className="progress-bar"
            data-width={skill.percent}
          ></div>
        </div>
      </li>
    ));

  return (
    <section id="skills" className="skills" ref={sectionRef}>
      <div className="container">
        <h2 className="section-title">My Skills</h2>

        <div className="skills-container">
          <div className="skill-category">
            <h3>Frontend</h3>
            <ul>{renderSkills(frontendSkills)}</ul>
          </div>

          <div className="skill-category">
            <h3>Backend</h3>
            <ul>{renderSkills(backendSkills)}</ul>
          </div>
          {/* <div className="skill-category">
            <h3>Programming</h3>
            <ul>{renderSkills(programmingSkills)}</ul>
          </div> */}
          <div className="skill-category">
            <h3>Tools</h3>
            <ul>{renderSkills(toolsSkills)}</ul>
          </div>
        </div>
      </div>
    </section>
  );
}

// import React from 'react'

// export default function Skills() {
//   return (
//     <>
//       <section id="skills" className="skills">
//         <div className="container">
//           <h2>Skills</h2>
//           <div className="skills-container">

//             {/* Frontend */}
//             <div className="skill-category">
//               <h3>Frontend</h3>
//               <ul>
//                 <li data-percent="90">
//                   <i className="fab fa-html5"></i> HTML
//                   <div className="progress-bar-wrap">
//                     <div className="progress-bar" style={{ width: "90%" }}></div>
//                   </div>
//                   <span classNameName="val text-light">90%</span>
//                 </li>
//                 <li data-percent="85">
//                   <i className="fab fa-css3-alt"></i> CSS
//                   <div className="progress-bar-wrap">
//                     <div className="progress-bar" style={{ width: "85%" }}></div>
//                   </div>
//                   <span classNameName="val text-light">85%</span>
//                 </li>
//                 <li data-percent="80">
//                   <i className="fab fa-js"></i> JavaScript
//                   <div className="progress-bar-wrap">
//                     <div className="progress-bar" style={{ width: "70%" }}></div>
//                   </div>
//                   <span classNameName="val text-light">70%</span>
//                 </li>
//                 <li data-percent="50">
//                   <i className="fab fa-react"></i> ReactJs
//                   <div className="progress-bar-wrap">
//                     <div className="progress-bar" style={{ width: "50%" }}></div>
//                     <span classNameName="val text-light">50%</span>
//                   </div>
//                   <span classNameName="val text-light">50%</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Backend */}
//             <div className="skill-category">
//               <h3>Backend</h3>
//               <ul>
//                 <li data-percent="85">
//                   <i className="devicon-mongodb-plain"></i> MongoDB
//                   <div className="progress-bar-wrap">
//                     <div className="progress-bar" style={{ width: "60%" }}></div>
//                   </div>
//                   <span classNameName="val text-light">60%</span>
//                 </li>
//                 <li data-percent="80">
//                   <i className="fas fa-leaf"></i> Express Js
//                   <div className="progress-bar-wrap">
//                     <div className="progress-bar" style={{ width: "50%" }}></div>
//                   </div>
//                   <span classNameName="val text-light">50%</span>
//                 </li>
//                 <li data-percent="75">
//                   <i className="fab fa-node-js"></i> NodeJs
//                   <div className="progress-bar-wrap">
//                     <div className="progress-bar" style={{ width: "50%" }}></div>
//                   </div>
//                   <span classNameName="val text-light">50%</span>
//                 </li>
//               </ul>
//             </div>

//             {/* Other */}
//             <div className="skill-category">
//               <h3>Other</h3>
//               <ul>

//                 <li data-percent="70">
//                   <i className="fab fa-git-alt"></i> Git
//                   <div className="progress-bar-wrap">
//                     <div className="progress-bar" style={{ width: "70%" }}></div>
//                   </div>
//                   <span classNameName="val text-light">70%</span>
//                 </li>
//                 <li data-percent="75">
//                   <i className="fas fa-server"></i> REST APIs
//                   <div className="progress-bar-wrap">
//                     <div className="progress-bar" style={{ width: "75%" }}></div>
//                   </div>
//                   <span classNameName="val text-light">75%</span>
//                 </li>

//               </ul>
//             </div>

//           </div>
//         </div>
//       </section>
//     </>
//   )
// }
