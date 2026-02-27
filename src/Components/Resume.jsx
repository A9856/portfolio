// Fully Responsive Resume.jsx - Perfect All Screen Sizes
import React from 'react';
export default function Resume() {
  return (
    <section id="resume" className="resume-section">
      <div className="container">
        <div className="section-header" data-aos="fade-up">
          <h2 className="section-title">Resume</h2>
          <div className="section-subtitle">
            Full Stack Developer with hands-on experience in modern web technologies and real-world projects.
          </div>
        </div>

        <div className="resume-grid">
          <div className="resume-column left-column" data-aos="fade-right">
            <div className="resume-card personal-info">
              <div className="profile-avatar">
                <div className="avatar-placeholder">
                  <span>AK</span>
                </div>
              </div>
              <div className="personal-details">
                <h3 className="name">Adil Khan</h3>
                <p className="title">Full Stack Developer</p>
                <div className="contact-info">
                  <div className="contact-item">
                    <span className="icon">📍</span>
                    <span>Prayagraj, UP</span>
                  </div>
                  <div className="contact-item">
                    <span className="icon">📞</span>
                    <span>+91 9506640798</span>
                  </div>
                  <div className="contact-item">
                    <span className="icon">✉️</span>
                    <span>khana108992@gmail.com</span>
                  </div>
                </div>
              </div>
            </div>

            <div className="resume-card education">
              <h4 className="card-title">Education</h4>
              
              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h5>B.Com (Professional)</h5>
                  <span className="date">2022 - 2025</span>
                  <p className="education-text">
                    Rajendra Singh University<br/>Prayagraj, UP
                  </p>
                </div>
              </div>

              <div className="timeline-item">
                <div className="timeline-dot"></div>
                <div className="timeline-content">
                  <h5>Full Stack Web Dev</h5>
                  <span className="date">2024 - 2025</span>
                  <p className="education-text">
                    DUCAT IT Training School<br/>Noida Sector-16
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className="resume-column right-column" data-aos="fade-left">
            <div className="resume-card experience">
              <h4 className="card-title">Experience</h4>
              
              <div className="experience-item">
                <div className="exp-header">
                  <h5>Full Stack Developer</h5>
                  <span className="company">Shiwansh Solution Pvt Ltd</span>
                  <span className="date">2024 (6 Months)</span>
                </div>
                <div className="project-highlight">
                  <span className="project-link">🔗 <a href="https://hrdashfront.vercel.app" target="_blank" rel="noopener noreferrer">HR Dashboard</a></span>
                </div>
                <ul className="exp-bullets">
                  <li>Developed comprehensive HR Dashboard with React.js, Tailwind CSS & Node.js backend</li>
                  <li>Implemented employee management, attendance tracking, payroll processing features</li>
                  <li>Integrated real-time notifications, role-based authentication & responsive UI design</li>
                  <li>Optimized database queries reducing load time by 40% using MongoDB & REST APIs</li>
                </ul>
              </div>

              <div className="experience-item">
                <div className="exp-header">
                  <h5>Full Stack Developer</h5>
                  <span className="company">S O Infotech (P) LTD</span>
                  <span className="date">2023-2024 (6 Months)</span>
                </div>
                <div className="project-highlight">
                  <span className="project-link">🔗 <a href="https://genious-ivxi.onrender.com" target="_blank" rel="noopener noreferrer">Ecommerce Platform</a></span>
                </div>
                <ul className="exp-bullets">
                  <li>Built full-stack Ecommerce website using React.js, Express.js, MongoDB (MERN)</li>
                  <li>Developed product catalog, cart management, payment integration & order tracking</li>
                  <li>Implemented advanced search, filtering, user authentication & admin dashboard</li>
                  <li>Deployed on Render with CI/CD pipeline ensuring 99.9% uptime & scalability</li>
                </ul>
              </div>

              {/* <div className="experience-item">
                <div className="exp-header">
                  <h5>Web Development Intern</h5>
                  <span className="company">Unified Mentor, Gurgaon</span>
                  <span className="date">2023 (6 Months)</span>
                </div>
                <ul className="exp-bullets">
                  <li>Developed responsive websites using React.js, Next.js, Redux, Express.js & MongoDB</li>
                  <li>Integrated RESTful APIs and optimized frontend performance</li>
                  <li>Delivered 4+ functional web modules monthly using Agile methodology</li>
                </ul>
              </div>*/}
            </div> 

            <div className="resume-card skills">
              <h4 className="card-title">Skills</h4>
              <div className="skills-grid">
                <span className="skill-tag primary">React.js</span>
                <span className="skill-tag primary">Next.js</span>
                <span className="skill-tag primary">Redux</span>
                <span className="skill-tag primary">Node.js</span>
                <span className="skill-tag primary">Express.js</span>
                <span className="skill-tag primary">MongoDB</span>
                <span className="skill-tag">Tailwind CSS</span>
                <span className="skill-tag">JavaScript</span>
                <span className="skill-tag secondary">MERN Stack</span>
                <span className="skill-tag secondary">REST APIs</span>
                <span className="skill-tag">Git</span>
                <span className="skill-tag">Vercel</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

// import React from 'react'

// export default function Resume() {
//   console.log("Resume")
//   return (
//     <>
//       <section id="resume" className="resume section">
//         <div className="container section-title" data-aos="fade-up">
//           <h2 className="resume-title">Resume</h2>
//           <p>Career Objective
//             A hardworking and dedicated Full Stack Developer with strong expertise in frontend and backend technologies (HTML, CSS, JavaScript, React.js, Express.js, MongoDB, FastAPI). Experienced in developing efficient web applications using OOPs concepts, Context API, Redux, Reducer, and ChatGPT. Seeking to be part of a dynamic team where I can maximize my skills.
//           </p>
//         </div>
//         <div className="container">
//           <div className="row">
//             <div className="col-lg-6" data-aos="fade-up" data-aos-delay="100">
//               <h3 className="resume-title">Summary</h3>
//               <div className="resume-item pb-0">
//                 <h5>Adil Khan</h5>
//                 <p><em>Passionate and detail-oriented Web Developer with 6 months of hands-on internship experience in designing and developing responsive, user-centric web applications. Proficient in front-end technologies and capable of transforming ideas into fully functional digital solutions. Strong understanding of design principles with a focus on performance and user experience.</em></p>
//                 <ul>
//                   <li>📍 Prayagraj</li>
//                   <li>📞 9506640798</li>
//                   <li>✉️ khaana108992@gmail.com</li>
//                 </ul>
//               </div>
//               <h3 className="resume-title">Education</h3>
//               <div className="resume-item">
//                 <h5>2024 - 2025</h5>
//                 <p><em>🏫 Institute: DUCAT IT Training School, Noida Sector-16, Delhi</em></p>
//               </div>
//               <div className="resume-item">
//                 <h4>Graduation</h4>
//                 <h5>2022 - 2025</h5>
//                 <p><em>🎓 B.Com (Professional) – Rajendra Singh (Rajju Bhaiya) University, Prayagraj (Formerly Allahabad State
//                   University, Allahabad) | 2025
//                 </em></p>

//               </div>
//             </div>
//             <div className="col-lg-6" data-aos="fade-up" data-aos-delay="200">
//               <h3 className="resume-title">Professional Experience</h3>
//               <div className="resume-item">
//                 <h4>💼 Lab Assistant | [APCS College Of IT And Management] | 6 Months </h4>
//                 <h5>2023</h5>
//                 <p><em>•	[Key responsibilities such as data management, system monitoring, etc.]<br />
//                   •	[Mention any specific achievements if applicable]
//                 </em></p>

//               </div>
//               <div className="resume-item">
//                 <h4>Web Development Specialist (Internship)</h4>
//                 <h4>Intern (6 Months)
//                   Unified Mentor Company, Gurgaon, Haryana</h4>
//                 <h5>2023 – 2024</h5>

//                 <ul>
//                   <li><em>Assisted in developing and maintaining responsive websites using HTML, CSS,Bootstrap,MaterialUI,JavaScript,React.JS,Redux,Next.JS,Express.JS,MangoDB.</em></li>
//                   <li><em>Collaborated with senior developers to debug and optimize front-end code for improved performance.</em></li>
//                   <li><em>Worked on integrating APIs and dynamic data using RESTful services in real-world projects.</em></li>
//                   <li><em>Participated in daily stand-up meetings and sprint planning as part of the Agile team.</em></li>
//                   <li><em>Developed 4+ functional web modules and components each month based on client requirements.</em></li>
//                 </ul>
//               </div>
//             </div>
//           </div>
//         </div>
//       </section>
//     </>
//   )
// }
