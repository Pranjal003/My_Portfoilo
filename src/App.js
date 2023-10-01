import './App.css';
import Navbar from './components/Navbar';
import AboutMe from './components/AboutMe';
import Home from './components/Home';
import Resume from './components/Resume';
import Services from './components/Services';
import Projects from './components/Projects';
import Contact from './components/Contact';
import ContactForm from './components/ContactForm';
import Footer from './components/Footer';

function App() {
  return (
    <>
    <Navbar />
    <Home />
    <AboutMe /> 
    <Resume /> 
    <Services />
    <Projects />
    <Contact />
    <ContactForm />
    <Footer />

    </>
  );
}

export default App;
