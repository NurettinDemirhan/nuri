import './App.css';
import "./Navbar.css";
import About from './components/about/About';
import Contact from './components/contact/Contact';

import { Link, animateScroll as scroll } from "react-scroll";
import Projects from './components/projects/Projects';

scroll.scrollToTop();

function App() {

  return (
    

    <div className="app">

      <nav>
        <section className='nav-buttons'>
        <Link
          to="about"
          spy={true}
          smooth={true}
          duration={500}
        >
          <button class="about-button">About</button>
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
        >
          <button class="my-work-button">Projects</button>
        </Link>
        <Link
          to="contact"
          spy={true}
          smooth={true}
          duration={500}
        >
          <button class="contact-button">Contact</button>
        </Link>
        </section>
      </nav>

      <div id='about' className='main-container'>
        <About/>
        <Projects/>
        <Contact/>
      </div>
      

    </div>
  );
}

export default App;
