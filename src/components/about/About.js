import "./about.css";


export default function About(){


    return(
        <div className="about-container">
            
                <header>
                    <img src="https://cdn-icons-png.flaticon.com/512/3135/3135715.png" alt="profile-pic"/>
                    <article>
                        <h1>Hello. I'm Nurettin Demirhan</h1>
                        <p>
                        I am a Full Stack Web Developer. I have a huge passion for Web Development. 
                        I'm used to be very focused, proactive and meticulous on my work. 
                        I am also very positive about communicating with 
                        people thanks to my team project experiences.
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
                            <img src="https://sass-lang.com/assets/img/styleguide/seal-color-aef0354c.png" alt="sass image"/>
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