import './App.css'
import AboutMe from './components/AboutMe'
import ContactForm from './components/ContactForm'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
import Certifications from './components/Certifications'
import Skills from './components/Skills'
import Start from './components/Start'

function App() {

  return (
    <>
      <Header></Header>
      <Start></Start>
      <AboutMe></AboutMe>
      <Education></Education>
      <Experience></Experience>
      <Projects></Projects>
      <Certifications></Certifications>
      <Skills></Skills>
      <ContactForm></ContactForm>
      <Footer></Footer>
    </>
  )
}

export default App
