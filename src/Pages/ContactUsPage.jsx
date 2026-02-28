import { useState } from 'react';
import { Link } from 'react-router-dom';
import FormValidator from '../Validator/FormValidator';
import { createContactUs } from "../Redux/ActionCreators/ContactusActionCreator";
import { useDispatch } from 'react-redux';

export default function ContactUsPage() {
  let [data, setData] = useState({});
  let [errorMessage, setErrorMessage] = useState({});

  let [show, setShow] = useState(false);
  let [message, setMessage] = useState("");

  let dispatch = useDispatch();

  function getInputData(e) {
    let { name, value } = e.target;

    setErrorMessage((old) => ({
      ...old,
      [name]: FormValidator(e)
    }));

    setData((old) => ({
      ...old,
      [name]: value
    }));
  }

  function postData(e) {
    e.preventDefault();
    let error = Object.values(errorMessage).find(x => x !== "");
    if (error) {
      setShow(true);
    } else {
      dispatch(createContactUs({ ...data, active: true, date: new Date() }));
      setData({});
      setErrorMessage({
        name: "Name Field is Mandatory",
        email: "Email Field is Mandatory",
        phone: "Phone Field is Mandatory",
        subject: "Subject Field is Mandatory",
        message: "Message Field is Mandatory",
      });
      setMessage("Thanks To Share Your Query With Us... Our Team Will Contact You Soon");
    }
  }

  return (
    <section id="adil-contact-dark-hero" className="adil-contact-dark-section">
      <div className="adil-container">
        <h2 className="adil-section-title">Contact Us</h2>

        <div className="adil-contact-wrapper">
          {/* Left - Info Cards */}
          <div className="adil-info-column">
            <div className="adil-info-grid">
              <div className="adil-info-card adil-slide-in-left">
                <i className="bi bi-geo-alt adil-info-icon"></i>
                <h3>Address</h3>
                <p>{process.env.REACT_APP_ADDRESS || "Your Address Here"}</p>
              </div>

              <div className="adil-info-card adil-slide-in-left" style={{ animationDelay: '0.1s' }}>
                <i className="bi bi-telephone adil-info-icon"></i>
                <h3>Call Us</h3>
                <Link to={`tel:${process.env.REACT_APP_PHONE}`} target="_blank" rel="noreferrer">
                  {process.env.REACT_APP_PHONE || "+91 XXXXX XXXXX"}
                </Link>
              </div>

              <div className="adil-info-card adil-slide-in-left" style={{ animationDelay: '0.2s' }}>
                <i className="bi bi-envelope adil-info-icon"></i>
                <h3>Email Us</h3>
                <Link to={`mailto:${process.env.REACT_APP_EMAIL}`} target="_blank" rel="noreferrer">
                  {process.env.REACT_APP_EMAIL || "contact@yourdomain.com"}
                </Link>
              </div>

              <div className="adil-info-card adil-slide-in-left" style={{ animationDelay: '0.3s' }}>
                <i className="bi bi-whatsapp adil-info-icon"></i>
                <h3>WhatsApp</h3>
                <Link to={`https://wa.me/${process.env.REACT_APP_WHATSAPP}`} target="_blank" rel="noreferrer">
                  {process.env.REACT_APP_WHATSAPP || "+91 XXXXX XXXXX"}
                </Link>
              </div>
            </div>

            <div className="adil-social-icons">
              <a href="https://github.com/" target="_blank" rel="noreferrer" className="adil-social-link">
                <i className="fab fa-github"></i>
              </a>
              <a href="https://www.linkedin.com/in/adil-khan" target="_blank" rel="noreferrer" className="adil-social-link">
                <i className="fab fa-linkedin"></i>
              </a>
              <a href="https://x.com/AdilKha38643869" target="_blank" rel="noreferrer" className="adil-social-link">
                <i className="fab fa-twitter"></i>
              </a>
            </div>
          </div>

          {/* Right - Form */}
          <div className="adil-form-column">
            <div className="adil-form-card adil-fade-in">
              <p className="adil-form-heading">
                {message || "Have any questions? Feel free to reach out!"}
              </p>

              <form onSubmit={postData} className="adil-contact-form">
                <div className="adil-form-row">
                  <div className="adil-form-group full">
                    <input
                      type="text"
                      name="name"
                      value={data.name || ''}
                      onChange={getInputData}
                      className={`adil-input ${show && errorMessage.name ? 'adil-error' : ''}`}
                      placeholder="Your Name *"
                    />
                    {show && errorMessage.name && <span className="adil-error-msg">{errorMessage.name}</span>}
                  </div>

                  <div className="adil-form-group half">
                    <input
                      type="email"
                      name="email"
                      value={data.email || ''}
                      onChange={getInputData}
                      className={`adil-input ${show && errorMessage.email ? 'adil-error' : ''}`}
                      placeholder="Your Email *"
                    />
                    {show && errorMessage.email && <span className="adil-error-msg">{errorMessage.email}</span>}
                  </div>

                  <div className="adil-form-group half">
                    <input
                      type="text"
                      name="phone"
                      value={data.phone || ''}
                      onChange={getInputData}
                      className={`adil-input ${show && errorMessage.phone ? 'adil-error' : ''}`}
                      placeholder="Phone Number *"
                    />
                    {show && errorMessage.phone && <span className="adil-error-msg">{errorMessage.phone}</span>}
                  </div>

                  <div className="adil-form-group full">
                    <input
                      type="text"
                      name="subject"
                      value={data.subject || ''}
                      onChange={getInputData}
                      className={`adil-input ${show && errorMessage.subject ? 'adil-error' : ''}`}
                      placeholder="Subject *"
                    />
                    {show && errorMessage.subject && <span className="adil-error-msg">{errorMessage.subject}</span>}
                  </div>

                  <div className="adil-form-group full">
                    <textarea
                      name="message"
                      value={data.message || ''}
                      onChange={getInputData}
                      className={`adil-textarea ${show && errorMessage.message ? 'adil-error' : ''}`}
                      rows="5"
                      placeholder="Your Message *"
                    ></textarea>
                    {show && errorMessage.message && <span className="adil-error-msg">{errorMessage.message}</span>}
                  </div>

                  <div className="adil-form-group full text-center">
                    <button type="submit" className="adil-submit-btn">Send Message</button>
                  </div>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
// import  { useState } from 'react'
// import { Link } from 'react-router-dom'
// import FormValidator from '../Validator/FormValidator'
// import { createContactUs } from "../Redux/ActionCreators/ContactusActionCreator"
// import { useDispatch } from 'react-redux'
// export default function ContactUsPage() {
//   let [data, setData] = useState("")
//   let [errorMessage, setErrorMessage] = useState("")

//   let [show, setShow] = useState(false)
//   let [message, setMessage] = useState("")

//   let dispatch = useDispatch()

//   function getInputData(e) {
//     let { name, value } = e.target

//     setErrorMessage((old) => {
//       return {
//         ...old,
//         [name]: FormValidator(e)
//       }
//     })
//     setData((old) => {
//       return {
//         ...old,
//         [name]: value
//       }
//     })
//   }
//   function postData(e) {
//     e.preventDefault()
//     let error = Object.values(errorMessage).find(x => x !== "")
//     if (error)
//       setShow(true)
//     else {
//       dispatch(createContactUs({ ...data, active: true, date: new Date()}))
//       setData({
//         name: "",
//         email: "",
//         phone: "",
//         subject: "",
//         message: ""
//       })
//      setErrorMessage({
//         name: "Name Fiels is Mendatory",
//         email: "Email Fiels is Mendatory",
//         phone: "Phone Fiels is Mendatory",
//         subject: "Subject  Fiels is Mendatory",
//         message: "Message Fiels is Mendatory",
//       })
//       setMessage("Thanks To Share Your Query With Us... Out Team Will Contact You Soon")
//     }
//   }
//   return (
//     <>
//       <section id="contact" className="contact section c">

//         <div className="container section-title" data-aos="fade-up">

//           <p className='text-center a'>Contact Us</p>
//         </div>

//         <div className="container" data-aos="fade-up" data-aos-delay="100">

//           <div className="row gy-4 rw">

//             <div className="col-lg-6">

//               <div className="row gy-4">
//                 <div className="col-md-6">
//                   <div className="info-item text-center" data-aos="fade" data-aos-delay="200">
//                     <i className="bi bi-geo-alt"></i>
//                     <h3>Address</h3>
//                     <p>{process.env.REACT_APP_ADDRESS}</p>

//                   </div>
//                 </div>

//                 <div className="col-md-6">
//                   <div className="info-item text-center" data-aos="fade" data-aos-delay="300">
//                     <i className="bi bi-telephone"></i>
//                     <h3>Call Us</h3>
//                     <Link to={`${process.env.REACT_APP_PHONE}`} target="_blank" rel='noreferrer'>{process.env.REACT_APP_PHONE}</Link>

//                   </div>
//                 </div>

//                 <div className="col-md-6">
//                   <div className="info-item text-center" data-aos="fade" data-aos-delay="400">
//                     <i className="bi bi-envelope"></i>
//                     <h3>Email Us</h3>
//                     <Link to={`${process.env.REACT_APP_EMAIL}`} target="_blank" rel='noreferrer'>{process.env.REACT_APP_EMAIL}</Link>
//                   </div>
//                 </div>

//                 <div className="col-md-6">
//                   <div className="info-item text-center" data-aos="fade" data-aos-delay="500">
//                     <i className="bi bi-clock"></i>
//                     <h3>Whatsapp</h3>
//                     <Link to={`https://wa.me/${process.env.REACT_APP_WHATSAPP}`} target="_blank" rel='noreferrer'>{process.env.REACT_APP_WHATSAPP}</Link>
//                   </div>
//                 </div>
//                 <div className="contact-social">
//                         <a href="https://github.com/"><i class="fab fa-github"></i></a>
//                         <a href="https://www.linkedin.com/in/adil-khan"><i class="fab fa-linkedin"></i></a>
//                         <a href="https://x.com/AdilKha38643869?t=1EwY4p7BIEJWyM6kTYaXNA&s=08"><i class="fab fa-twitter"></i></a>
//                     </div>


//               </div>

//             </div>

//             <div className="col-lg-6">
//               <div className="info-item">
               
//                 <form onSubmit={postData} cntc>
//                 <p className='text-center mb-3'>{message ? message : "Do you have any query? Please write to Us "}</p>
//                   <div className="row gy-4 ">

//                     <div className="col-12 frm">
//                       <input type="text" name="name" value={data.name} onChange={getInputData} className={`form-control ${show && errorMessage.name ? "border-danger" : ""}`} placeholder="Your Name" />
//                       {show && errorMessage.name ? <p>{errorMessage.name}</p> : null}
//                     </div>

//                     <div className="col-md-6 frm">
//                       <input type="email" value={data.email} className={`form-control ${show && errorMessage.email ? "border-danger" : ""}`} onChange={getInputData}  name="email" placeholder="Your Email" />
//                       {show && errorMessage.email ? <p>{errorMessage.email}</p> : null}
//                     </div>

//                     <div className="col-md-6 frm">
//                       <input type="text" value={data.phone} onChange={getInputData}  className={`form-control ${show && errorMessage.phone ? "border-danger" : ""}`} name="phone" placeholder="Your Phone Number" />
//                       {show && errorMessage.phone ? <p>{errorMessage.phone}</p> : null}
//                     </div>

//                     <div className="col-12 frm">
//                       <input type="text" value={data.subject}onChange={getInputData}  className={`form-control ${show && errorMessage.subject ? "border-danger" : ""}`} name="subject" placeholder="Subject" />
//                       {show && errorMessage.subject ? <p>{errorMessage.subject}</p> : null}
//                     </div>

//                     <div className="col-12 frm">
//                       <textarea className={`form-control ${show && errorMessage.message ? "border-danger" : ""}`} onChange={getInputData}  name="message" value={data.message} rows="5" placeholder="Message" ></textarea>
//                       {show && errorMessage.message ? <p>{errorMessage.message}</p> : null}
//                     </div>

//                     <div className="col-12 text-center">
//                       <button type="submit" className='btn btn-dark'>Send Message</button>
//                     </div>

//                   </div>
//                 </form>
//               </div>
//             </div>

//           </div>

//         </div>

//         {/* <div className="w-100">
//           <iframe width="100%" height="300" id="gmap_canvas" src="https://maps.google.com/maps?q=Civil%20Line%20Prayagraz&t=&z=13&ie=UTF8&iwloc=&output=embed" frameborder="0" scrolling="no" marginheight="0" marginwidth="0"></iframe>
//         </div> */}
//       </section>
//     </>
//   )
// }


