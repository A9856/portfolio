import React, { useEffect, useRef } from 'react';
import ric from "../assests/img/ric.jpg";
import ric1 from "../assests/img/ric.jpg";
import apcs from "../assests/img/apcs.jpeg";
import PG from "../assests/img/PGclg.jpg";

export default function Education() {
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('adil-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    itemsRef.current.forEach((item) => {
      if (item) observer.observe(item);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <section id="adil-education-dark-hero" className="adil-education-dark-section">
      <div className="adil-container-max">
        <h2 className="adil-section-heading">Education</h2>

        <div className="adil-timeline-wrapper">
          <div className="adil-timeline-vertical-line"></div>

          {[
            { year: "2015 - 2017", img: ric1, alt: "RIC 10th", title: "Rastriya Intermediate College", desc: "10th Grade - 75%" },
            { year: "2017 - 2019", img: ric, alt: "RIC 12th", title: "Rastriya Intermediate College", desc: "12th Grade - 60%" },
            { year: "2021 - 2022", img: apcs, alt: "NIELIT", title: "APCS College Of IT & Management", desc: "O'Level Diploma (NIELIT)" },
            { year: "2022 - 2025", img: PG, alt: "Allahabad Univ", title: "Allahabad University", desc: "Bachelor Of Commerce" },
            { year: "2025 - Present", img: PG, alt: "Allahabad Univ", title: "Allahabad University", desc: "MBA in Information Technology (IT)" }
          ].map((edu, idx) => (
            <div
              key={idx}
              className={`adil-timeline-single-item ${idx % 2 === 0 ? 'adil-from-left' : 'adil-from-right'}`}
              ref={(el) => (itemsRef.current[idx] = el)}
            >
              <div className="adil-timeline-year-badge">{edu.year}</div>

              <div className="adil-timeline-card-content">
                <div className="adil-education-img-container">
                  <img
                    src={edu.img}
                    alt={edu.alt}
                    className="adil-education-img"
                    loading="lazy"
                  />
                </div>
                <h3 className="adil-card-institute-name">{edu.title}</h3>
                <p className="adil-card-detail">{edu.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

// import React from 'react'
// import ric from "../assests/img/ric.jpg"
// import ric1 from "../assests/img/ric.jpg"
// import apcs from "../assests/img/apcs.jpeg"
// import PG from "../assests/img/PGclg.jpg"
// export default function Education() {
//   return (
//    <>
//      <section id="education" className="education">
//         <div className="container">
//             <h2>Education</h2>
//             <div className="timeline">
//                 <div className="timeline-item">
//                     <div className="timeline-date">2015 - 2017</div>
//                     <div className="timeline-content">
//                         <img src={ric1} alt="Rastriya Intermediate College" className="education-img" loading="lazy"/>
//                         <h3>Rastriya Intermediate College</h3>
//                         <p>10th Grade - 75%</p>
//                     </div>
//                 </div>
//                 <div className="timeline-item">
//                     <div className="timeline-date">2017 - 2019</div>
//                     <div className="timeline-content">
//                         <img src={ric} alt="Rastriya Intermediate College" className="education-img" loading="lazy"/>
//                         <h3>Rastriya Intermediate College</h3>
//                         <p>12th Grade - 60%</p>
//                     </div>
//                 </div>

//                 <div className="timeline-item">
//                     <div className="timeline-date">2021 - 2022</div>
//                     <div className="timeline-content">
//                         <img src={apcs} alt="NIELIT" className="education-img" loading="lazy"/>
//                         <h3> APCS College Of IT & Management (NIELIT) </h3>
//                         <p>O'Level Diploma</p>
//                     </div>
//                 </div>

//                 <div className="timeline-item">
//                     <div className="timeline-date">2022 - 2025</div>
//                     <div className="timeline-content">
//                         <img src={PG} alt="Allahabad University" className="education-img" loading="lazy"/>
//                         <h3>Allahabad University</h3>
//                         <p>Bachelor Of Commerce</p>
//                     </div>
//                 </div>

//                 <div className="timeline-item">
//                     <div className="timeline-date">2025 - Persent</div>
//                     <div className="timeline-content">
//                         <img src={PG} alt="Allahabad University" className="education-img" loading="lazy"/>
//                         <h3>Allahabad University</h3>
//                         <p>MBA in Information Technology (IT)</p>
//                     </div>
//                 </div>
//             </div>
//         </div>
//     </section>
//    </>
//   )
// }
