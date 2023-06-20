import './App.css';
import "./Navbar.css";
import About from './components/about/About';



function App() {
  return (
    <div className="app">

      <nav>
        <section className='nav-buttons'>
          <button class="about-button">About</button>
          <button class="my-work-button">My Work</button>
          <button class="contact-button">Contact</button>
        </section>
      </nav>

      <div className='main-container'>
        <About/>
      </div>
      

    </div>
  );
}

export default App;
