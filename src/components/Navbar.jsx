export default function Navbar() {
    return (
        <header>
            <div className="header-sections">
                <p><a href="#home">INICIO</a></p>
                <p><a href="#projects">PROYECTOS</a></p>
                <p><a href="#about-me-expanded">SOBRE MI</a></p>
                <button className="dropdown-menu">V</button>
            </div>
            <div className="header-icons">
                <img src="/file-text.svg" alt="download-resume-pdf" />
                <img src="/sun.svg" alt="toggle-dark-mode" />
            </div>
        </header>
    )
}