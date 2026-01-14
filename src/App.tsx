import Sidebar from "./Components/Sidebar"
import HomePage from "./Components/HomePage"
import Skills from "./Components/Skills"
import Works from "./Components/Works"
import Contact from "./Components/Contact"
const App = () => {
  return (
    <div className="bg-stone-300 font-serif ">
      <Sidebar/>
      <HomePage/>
      <Skills/>
      <Works/>
      <Contact/>
    </div>
  )
}

export default App
