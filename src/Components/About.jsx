import adil1 from "../assests/img/code.jpeg"
export default function About() {

    return (
        <>
            <section id="about" className="about">
                <div className="container">
                    <h2>About Me</h2>
                    <div className="about-content">
                        <div className="about-text">
                            <p>Pursuing an MBA in Information Technology (IT) from Allahabad University (AU), aimed at building a career in the computer and technology sector,I specialize in many programming languages such as  HTML5 CSS Bootstrap5 JavaScript Reactjs(Framework) Redux  and BackEnd Nodejs Expressjs Database MangoDB Mern Stack development.</p>
                            <p>I'm passionate about creating efficient, scalable web applications with clean code and intuitive user interfaces.</p>
                            <div className="experience">
                                <div className="exp-item">
                                    <h3>1</h3>
                                    <p>Years of Experience</p>
                                </div>
                                <div className="exp-item">
                                    <h3>6+</h3>
                                    <p>Projects Completed</p>
                                </div>
                            </div>
                        </div>
                        <div className="about-image">
                            <img src={adil1} alt="About Me" />
                        </div>
                    </div>
                </div>
            </section>
        </>
    )
}
