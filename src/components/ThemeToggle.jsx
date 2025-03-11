import React from "react"
export default function ThemeToggle({ onThemeChange }) {
    const [darkModeEnabled, setDarkModeEnabled] = React.useState(
        window.matchMedia("(prefers-color-scheme: dark)").matches
    );

    function handleClick() {
        setDarkModeEnabled(darkModeEnabled => !darkModeEnabled);
    }

    const html = document.querySelector("html")
    React.useEffect(() => {
        onThemeChange(darkModeEnabled);
        if (darkModeEnabled) {
          html.classList.add('dark');
        } else {
          html.classList.remove('dark');
        }
    }, [darkModeEnabled]); 

    return (
        <button onClick={handleClick}>
            <img src={darkModeEnabled ? "/portfolio/icons/sun.svg" : "/portfolio/icons/moon.svg"} alt="toggle-dark-mode" />
        </button>
    )
}