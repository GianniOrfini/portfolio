export default function TechnologyChips() {

    const chipList = [{
        name: "HTML",
        img: "/html-logo.png",
        altText: "html-logo",
        backgroundColor: "#352620"
    }, {
        name: "CSS",
        img: "/css-logo.png",
        altText: "css-logo",
        backgroundColor: "#18263A"
    }, {
        name: "JavaScript",
        img: "/js-logo.png",
        altText: "javascript-logo",
        backgroundColor: "#393A25"
    }, {
        name: "React",
        img: "/react-logo.png",
        altText: "react-logo",
        backgroundColor: "#1C3433"
    }, {
        name: "Vite",
        img: "/vite-logo.svg",
        altText: "vite-logo",
        backgroundColor: "#3f233d"
    }, {
        name: "SASS",
        img: "/vite-logo.svg",
        altText: "vite-logo",
        backgroundColor: "#3f233d"
    }, {
        name: "WordPress",
        img: "/wp-logo.png",
        altText: "wordpress-logo",
        backgroundColor: "#3f233d"
    }, {
        name: "SQL",
        img: "/wp-logo.png",
        altText: "wordpress-logo",
        backgroundColor: "#3f233d"
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