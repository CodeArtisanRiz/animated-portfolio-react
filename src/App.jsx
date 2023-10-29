import "./app.scss"
import "./index.css"
import Navbar2 from "./components/navbar/Navbar2";
import Navbar from "./components/navbar/Navbar";
import Hero from "./components/hero/Hero";
import About from "./components/about/About";
// import Hero3D from "./components/hero/Hero3D";
import Parallax from "./components/parallax/Parallax";
import Services from "./components/services/Services";
import Portfolio from "./components/portfolio/Portfolio";
import Contact from "./components/contact/Contact";
import Contact2 from "./components/contact/Contact2";
import StarsCanvas from "./components/canvas/Stars";
import Cursor from "./components/cursor/Cursor";
import Works from "./components/works/Works";
// import Experience from './components/experience/Experience';

// import Feedbacks from "./components/Feedbacks";



const App = () => {
  return <div>

    <Cursor/>
    
    <section id="Homepage" className="section">
      <div>
      <Navbar2/>
      <Hero/>
      <StarsCanvas />
      </div>
      
    </section>
    {/* <Hero3D/> */}
    <section><About/></section>
    <section id="Services"className="section"><Parallax type="services"/></section>
    
    <section className="section"><Services/></section>
    <section id="Portfolio" className="section"><Parallax type="portfolio"/></section>
    <Portfolio />
    {/* <section id="Contact"><Contact/></section> */}
    {/* <section> */}

    <Works />
      {/* <Experience/>
    <Feedbacks className="section"/> */}



    <div id="Contact" className="relative z-0">
        <Contact2 className="section"/>
        <StarsCanvas />
    </div>
    {/* </section> */}
  </div>;
};

export default App;
