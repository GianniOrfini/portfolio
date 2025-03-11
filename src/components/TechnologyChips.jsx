export default function TechnologyChips() {

    const chipList = [{
        name: "HTML",
        img: "/portfolio/html-logo.png",
        altText: "html-logo",
        backgroundColor: "#352620"
    }, {
        name: "CSS",
        img: "/portfolio/css-logo.png",
        altText: "css-logo",
        backgroundColor: "#18263A"
    }, {
        name: "JavaScript",
        img: "/portfolio/js-logo.png",
        altText: "javascript-logo",
        backgroundColor: "#393A25"
    }, {
        name: "React",
        img: "/portfolio/react-logo.png",
        altText: "react-logo",
        backgroundColor: "#1C3433"
    }, {
        name: "Vite",
        img: "/portfolio/vite-logo.svg",
        altText: "vite-logo",
        backgroundColor: "#3f233d"
    }, {
        name: "SASS",
        img: "/portfolio/sass-logo.png",
        altText: "sass-logo",
        backgroundColor: "#452842"
    }, {
        name: "WordPress",
        img: "/portfolio/wp-logo.png",
        altText: "wordpress-logo",
        backgroundColor: "#1d2836"
    }, {
        name: "SQL",
        img: "/portfolio/sql-logo.svg",
        altText: "sql-logo",
        backgroundColor: "#1d2836"
    }]

    function renderChips() {
        return chipList.map((technology) => (
            <div key={technology.name} className="technology-chip">
                <div style={{backgroundColor: technology.backgroundColor}}>
                    <img src={technology.img} alt={technology.altText}/>
                </div>
                <p>{technology.name}</p>
            </div>
        ));
    }
    
    return (
        <section className="technologies-section">
            {renderChips()}
        </section> 
    )
}