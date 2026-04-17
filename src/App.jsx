import './App.css'
import AboutMe from './components/AboutMe'
import Education from './components/Education'
import Experience from './components/Experience'
import Footer from './components/Footer'
import Header from './components/Header'
import Projects from './components/Projects'
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
      <Skills></Skills>
      <Footer></Footer>
    </>
  )
}

export default App
