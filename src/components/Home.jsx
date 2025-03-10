export default function Home({ theme }) {
  let icon = ["public/mail.svg", "src/assets/icons/github.svg", "src/assets/icons/linkedin.svg"]

  if (theme) {
    icon = icon.map(ico => ico.slice(0, -4) + `-dark.svg`);
  }
  
  return (
      <section id="home" className="home-section" href="home">
        <section className="left-section">
          <div className="hello-container">
            <h1>
              <span className="first-line">¡Hola!</span><br />
              <span className="second-line">Soy Gianni Orfini, <br />desarrollador web.</span>
            </h1>
          </div>
          <div className="about-me-container">
            <p>Programador autodidacta que encontró su pasión en los lenguajes de programación y está constantemente investigando y ampliando sus conocimientos para perfeccionarse en el área.</p>
          </div>
        </section>
        <section className="right-section">
          <div className="image-container">
            <img alt="gianni-orfini-headshot" src="/portfolio/mifoto.webp" />
          </div>
          <div className="contact-me-container">
            <h4>Contactame!</h4>
            <a href="mailto:gianlucaorfini@gmail.com"><img src={icon[0]} alt="mail-icon" /></a>
            <a href="https://github.com/GianniOrfini" target="_blank"><img src={icon[1]} alt="github-icon" /></a>
            <a href="https://www.linkedin.com/in/gianluca-orfini-275954165/" target="_blank"><img src={icon[2]} alt="linkedin-icon" /></a>
          </div>
        </section>
      </section>
      
  )
}