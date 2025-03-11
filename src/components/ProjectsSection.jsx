export default function ProjectsSection({ theme }) {
  let projectsList = [{
    name: "Pomodoro Timer",
    source:  "https://gianniorfini.github.io/pomodoro",
    description: "Aplicación web de productividad basada en la técnica Pomodoro, desarrollada por Francesco Cirillo en la década de 1980. Consiste en un timer de 25 minutos de productividad, seguidos de 5 minutos para un descanso corto. Esto se repetirá 4 veces y el usuario tendrá un descanso más largo, de 15 minutos. La aplicación tiene un toggle para cambiar el tema de claro a oscuro, además de tener un sonido para cuando los timers terminan. Si el usuario cierra la pestaña, el timer recordará en qué situación está.",
    image: "/portfolio/screenshots/pomodorolight.jpg",
    key: 1
  }];

  if (!theme) {
    projectsList = projectsList.map(project => ({
      ...project,
      image: project.image.slice(0, -9) + "dark.jpg"
    }));
  }

  function renderProjects() {
    return projectsList.map(project => (
      <div key={project.name} className="project-div">
        <a href={project.source}><img src={project.image} alt="" /></a>
        <div>
          <h3><a className="project-title" target="_blank" href={project.source}><span className="text">{project.name}</span><span className="arrow">&#8594;</span></a></h3>
          {/* <p>{project.description}</p>
          <div><button onClick={expandBox}>
          <svg width="125px" height="25px" viewBox="-2.4 -2.4 28.80 28.80" fill="none" 
              xmlns="http://www.w3.org/2000/svg"
              stroke="#000000" strokeWidth="0.00024">
              <g id="SVGRepo_iconCarrier">
                  <path d="M16.1795 3.26875C15.7889 2.87823 15.1558 2.87823 14.7652 3.26875L8.12078 9.91322C6.94952 11.0845 6.94916 12.9833 8.11996 14.155L14.6903 20.7304C15.0808 21.121 15.714 21.121 16.1045 20.7304C16.495 20.3399 16.495 19.7067 16.1045 19.3162L9.53246 12.7442C9.14194 12.3536 9.14194 11.7205 9.53246 11.33L16.1795 4.68297C16.57 4.29244 16.57 3.65928 16.1795 3.26875Z" 
                  fill="#b2bcc2" transform="rotate(90, 12, 12)"/>
              </g>
          </svg>
            </button></div>*/}
        </div>
      </div>
    ))
    
    function expandBox() {
      console.log("holi")
    }
  }

  return (
      <section className="projects-container" id="projects">
        <h2>Mis Proyectos</h2>
        {renderProjects()}
      </section>
  )
}