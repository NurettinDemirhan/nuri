import "./about.css";
import pic from "./pp.jpeg";

export default function About(){


    return(
        <div className="about-container">
            
                <header>
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile-pic"/>
                    <article>
                        <h1>Hello. I'm Nurettin Demirhan</h1>
                        <p>
                        Highly motivated and dedicated Junior Full-Stack Developer 
                        with a passion for creating innovative and user-friendly web
                        applications. Proficient in both front-end and back-end development,
                        </p>
                        <p>
                        I possess a solid foundation in various programming languages, frameworks,
                        and technologies. Equipped with strong problem-solving skills and a keen 
                        eye for detail, I thrive in collaborative environments while continuously 
                        seeking opportunities to expand my knowledge and grow as a developer.
                        </p>
                    </article>
                </header>
                <section className="tech-container">
                    <h2>THE TECHNOLOGIES I USE</h2>
                    <div className="tech-list">
                        <div className="one-tech">
                            <label>HTML5</label>
                            <img src="https://play-lh.googleusercontent.com/hlVINopH_JDLbn9qCnQ9XrkAlePGgTi2o26tr0lUmcDpsW-x9xzFw5MZ_E1kq64yUg" alt="html image"/>
                        </div>
                        <div className="one-tech">
                            <label>CSS3</label>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/62/CSS3_logo.svg/240px-CSS3_logo.svg.png" alt="css image"/>
                        </div>
                        <div className="one-tech">
                            <label>SASS</label>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/96/Sass_Logo_Color.svg/2560px-Sass_Logo_Color.svg.png" alt="sass image"/>
                        </div>
                        <div className="one-tech">
                            <label>TYPESCRIPT</label>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/4/4c/Typescript_logo_2020.svg/2048px-Typescript_logo_2020.svg.png" alt="ts image"/>
                        </div>
                        <div className="one-tech">
                            <label>JAVASCRIPT</label>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/6/6a/JavaScript-logo.png/800px-JavaScript-logo.png" alt="js image"/>
                        </div>
                        <div className="one-tech">
                            <label>REACT.JS</label>
                            <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/a/a7/React-icon.svg/2300px-React-icon.svg.png" alt="react image"/>
                        </div>
                        <div className="one-tech">
                            <label>NODE.JS</label>
                            <img src="https://p7.hiclipart.com/preview/306/37/167/node-js-javascript-web-application-express-js-computer-software-others.jpg" alt="node.js image"/>
                        </div>
                        <div className="one-tech">
                            <label>GIT</label>
                            <img src="https://git-scm.com/images/logos/downloads/Git-Icon-1788C.png" alt="git image"/>
                        </div>
                        
                    </div>
                </section>
            
            
        </div>
    )
}