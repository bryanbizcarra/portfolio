import './App.css'
import AboutMe from './components/AboutMe'
import Home from './components/Home'
import Nav from './components/Nav'
import Projects from './components/Projects'

function App() {
  return (
    <div className="App">
      <Nav></Nav>
      <Home></Home>
      <AboutMe></AboutMe>
      <Projects></Projects>
    </div>
  )
}

export default App
