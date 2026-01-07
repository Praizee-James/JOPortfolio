import Sidebar from "./Components/Sidebar"
import HomePage from "./Components/HomePage"
import Skills from "./Components/Skills"
import Works from "./Components/Works"
const App = () => {
  return (
    <div className="bg-stone-300 ">
      <Sidebar/>
      <HomePage/>
      <Skills/>
      <Works/>
    </div>
  )
}

export default App
