import React from "react"
export default function AboutSection() {

    const [textVisibility, setTextVisibility] = React.useState("hidden")

    function handleClick() {
        if (textVisibility === "hidden") { 
            setTextVisibility("visible")
        } else {
            console.log("eyyy")
            setTextVisibility("hidden")
        }
    }

    

    

    return (
        <section className="about-container" id="about-me-expanded">
            <h2>Sobre Mí</h2>

            <div>
                <div className="grid-container">
                    <div>
                        <p>
                            Soy Gianluca Orfini, nacido en Buenos Aires, Argentina. 
                            Desde chico siempre fui un apasionado por la tecnología 
                            y las computadoras. Hace unos años decidí aprender a 
                            programar, una actividad que me encanta y en la que puedo 
                            estar horas y horas escribiendo código, perfeccionándolo y 
                            explorando nuevas tecnologías, al igual que reforzando 
                            conocimientos ya adquiridos.
                        </p>
                    </div>
                    <img alt="gianni-orfini-headshot" src="src/assets/mifoto.webp" />
                </div>
                <span id="additional-text" className={textVisibility}>
                    <p>
                        Además de las computadoras, mis padres me inculcaron el 
                        estudio del ingles desde muy chico. Luego de muchos años 
                        de estudio en institutos y, en niveles avanzados, 
                        autodidacta, pude rendir el Proficiency in English de 
                        Cambridge con una A. Esto me permite combinar dos de mis 
                        pasiones estudiando y comunicándome en español y en inglés 
                        en simultáneo.
                    </p>
                    <p>
                        En cuanto a la programación, me considero una persona muy 
                        detallista, con un enfoque en el diseño y la practicidad. 
                        Mi objetivo es hacer que mis proyectos se vean modernos, 
                        se adapten a los usuarios y puedan ser utilizados a diario 
                        con funciones oportunas para servirle y serle útiles a 
                        aquellos que los elijan.
                    </p>
                    <p>
                        Actualmente estoy estudiando ingeniería industrial en la Universidad 
                        Tecnológica Nacional (UTN). Esta carrera me permite tener conocimientos 
                        sobre una amplia variedad de temas y combinar mi afinidad con las 
                        ciencias exactas, gestión y empresas; sin dejar atrás mi pasión con 
                        la tecnología en general.
                    </p>
                    <p>
                        Entre mis otros pasatiempos, me encanta la música, la fotografía e 
                        ir al gimnasio. También gusto de estar conectado con la naturaleza, 
                        por lo que siempre busco oportunidades para caminar y descubrir nuevos 
                        lugares. Más abajo podrás encontrar algunas de mis playlists favoritas 
                        que uso para programar!
                    </p>
                </span>
                <span className="read-more">
                    <button id="read-more-btn" onClick={handleClick}>Leer {textVisibility === "hidden" ? "Más" : "Menos"}...</button>
                </span>
            </div>
            <div>
            </div>
        </section>
    )
}