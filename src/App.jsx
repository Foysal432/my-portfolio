
import './App.css'
import About from './Components/About'
import Banner from './Components/Banner'
import Contact from './Components/Contact'
import Education from './Components/Education'
import Experience from './Components/Experience'
import Home from './Components/Home'
import Skill from './Components/Skill'

function App() {
  return (
    <>
      <div className='max-w-5xl mx-auto'>
      <Home></Home>
      <Banner></Banner>
      <About></About>
      <Experience></Experience>
      <Skill></Skill>
      <Education></Education>
      <Contact></Contact>
      </div>
    </>
  )
}

export default App
