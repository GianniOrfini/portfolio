import { useRef, useEffect } from "react";
export default function Home() {
    const textRef = useRef(null);
    

    useEffect(() => {
        if (textRef.current) {
        const computedWidth = textRef.current.scrollWidth;
        textRef.current.style.width = `${computedWidth}px`;
        }
    }, []);
    return (
        <section id="home" className="home-section" href="home">
          <section className="left-section">
            <div className="blank-space"></div>
            <div className="hello-container">
              <h1>
                <span className="first-line">Hola!</span><br />
                <span className="second-line-non-animated">Soy Gianni Orfini, desarrollador web.</span>
              </h1>
              <div className="animated-container"><h1 ref={textRef} className="animated-text">&lt;&nbsp;desarrollador web&nbsp;/&gt;&nbsp;</h1></div>
            </div>
            <div className="about-me-container">
              <p>Programador autodidacta que encontró su pasión en los lenguajes de programación y está constantemente investigando y ampliando sus conocimientos para perfeccionarse en el área.</p>
            </div>
          </section>
          <section className="right-section">
            <div className="image-container">
              <img alt="gianni-orfini-headshot" src="./mifoto.jpeg" />
            </div>
            <div className="contact-me-container">
              <p>Contactame!</p>
              <a href="mailto:gianlucaorfini@gmail.com"><img src="./icons/mail.svg" alt="mail-icon" /></a>
              <a href=""><img src="./icons/github.svg" alt="github-icon" /></a>
              <a href=""><img src="./icons/linkedin.svg" alt="linkedin-icon" /></a>
            </div>
          </section>
        </section>
    )
}