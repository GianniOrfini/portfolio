import React from "react"
import ThemeToggle from "./ThemeToggle";
export default function Navbar({ onThemeChange }) {
    const [isHidden, setIsHidden] = React.useState(true);
    const [theme, setTheme] = React.useState("");
    function handleClick() {
        setIsHidden(!isHidden);
        console.log(isHidden);
    }

    let icon = ["/portfolio/icons/arrow-right.svg", "/portfolio/icons/arrow-left.svg", "/portfolio/icons/globe.svg", "/portfolio/icons/resume.svg"];

    if (theme) {
        icon = icon.map(ico => ico.slice(0, -4) + `-dark.svg`);
    }
    React.useEffect(() => {
        onThemeChange(theme);
    }, [theme]);
    
    return (
        <header>
            <nav>
                <ul className={`header-sections-${isHidden}`}>
                    <div className="nav-left-container">
                        <li><a href="#home">INICIO</a></li>
                        <li><a href="#projects">PROYECTOS</a></li>
                        <li><a href="#about-me-expanded">SOBRE MI</a></li>
                    </div>
                    <div className="nav-right-container">
                        <li><button onClick={handleClick} className="dropdown-button"><img src={isHidden ? icon[0] : icon[1]} alt="" /></button></li>
                    </div>                    
                </ul>
                <ul className={`header-icons-${isHidden}`}>
                    <li><button>
                        <img src={icon[2]} alt="change-languaje" />
                    </button></li>
                    <li><button>
                        <img src={icon[3]} alt="download-resume-pdf" />
                    </button></li>
                    <li>
                        <ThemeToggle onThemeChange={setTheme}/>
                    </li>
                </ul>
            </nav>
        </header>
    )
}