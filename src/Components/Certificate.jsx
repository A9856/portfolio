import React, { useState, useEffect, useRef } from 'react';

export default function Certificates() {
  const [selectedCert, setSelectedCert] = useState(null);
  const itemsRef = useRef([]);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('cert-visible');
          }
        });
      },
      { threshold: 0.15 }
    );

    itemsRef.current.forEach((el) => {
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const certificates = Array.from({ length: 12 }, (_, i) => ({
    id: i + 1,
    src: require(`../assests/img/c${i + 1}.jpeg`),
    alt: `Certificate ${i + 1}`
  }));

  const openModal = (cert) => {
    setSelectedCert(cert);
    document.body.style.overflow = 'hidden';
  };

  const closeModal = () => {
    setSelectedCert(null);
    document.body.style.overflow = 'auto';
  };

  useEffect(() => {
    const handleEsc = (e) => {
      if (e.key === 'Escape') closeModal();
    };
    window.addEventListener('keydown', handleEsc);
    return () => window.removeEventListener('keydown', handleEsc);
  }, []);

  return (
    <section id="adil-certificates-section" className="adil-certificates">
      <div className="adil-container">
        <h2 className="adil-section-title">
          Certificates
          <span className="adil-title-underline"></span>
        </h2>

        <div className="adil-cert-grid">
          {certificates.map((cert, index) => (
            <div
              key={cert.id}
              className="adil-cert-item"
              ref={(el) => (itemsRef.current[index] = el)}
              onClick={() => openModal(cert)}
            >
              <div className="adil-cert-card">
                <img
                  src={cert.src}
                  alt={cert.alt}
                  className="adil-cert-image"
                  loading="lazy"
                />
                <div className="adil-cert-overlay">
                  <span className="adil-cert-number">Cert #{cert.id}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* Full Image Modal on Click */}
      {selectedCert && (
        <div className="adil-fullscreen-modal" onClick={closeModal}>
          <div className="adil-modal-inner" onClick={(e) => e.stopPropagation()}>
            <button className="adil-close-btn-right" onClick={closeModal}>
              ×
            </button>

            <img
              src={selectedCert.src}
              alt={selectedCert.alt}
              className="adil-fullscreen-image"
            />

            <div className="adil-modal-footer">
              Certificate #{selectedCert.id}
            </div>
          </div>
        </div>
      )}
    </section>
  );
}
// import React, { useEffect, useRef } from 'react';

// export default function Certificates() {
//   const itemsRef = useRef([]);

//   useEffect(() => {
//     const observer = new IntersectionObserver(
//       (entries) => {
//         entries.forEach((entry) => {
//           if (entry.isIntersecting) {
//             entry.target.classList.add('cert-visible');
//           }
//         });
//       },
//       { threshold: 0.15 }
//     );

//     itemsRef.current.forEach((el) => {
//       if (el) observer.observe(el);
//     });

//     return () => observer.disconnect();
//   }, []);

//   // Array of certificate images (c1 to c12)
//   const certificates = Array.from({ length: 12 }, (_, i) => ({
//     id: i + 1,
//     src: require(`../assests/img/c${i + 1}.jpeg`),
//     alt: `Certificate ${i + 1}`
//   }));

//   return (
//     <section id="adil-certificates-section" className="adil-certificates">
//       <div className="adil-container">
//         <h2 className="adil-section-title">Certificates</h2>

//         <div className="adil-cert-grid">
//           {certificates.map((cert, index) => (
//             <div
//               key={cert.id}
//               className="adil-cert-item"
//               ref={(el) => (itemsRef.current[index] = el)}
//             >
//               <div className="adil-cert-card">
//                 <img
//                   src={cert.src}
//                   alt={cert.alt}
//                   className="adil-cert-image"
//                   loading="lazy"
//                 />
//                 <div className="adil-cert-overlay">
//                   <span className="adil-cert-number">Cert #{cert.id}</span>
//                 </div>
//               </div>
//             </div>
//           ))}
//         </div>
//       </div>
//     </section>
//   );
// }