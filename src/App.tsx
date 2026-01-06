import Sidebar from "./Components/Sidebar"
import HomePage from "./Components/HomePage"
import Skills from "./Components/Skills"
const App = () => {
  return (
    <div className="bg-stone-300 ">
      <Sidebar/>
      <HomePage/>
      <Skills/>
    </div>
  )
}

export default App
