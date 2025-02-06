import { useState } from "react"
import Homepage from "./components/homepage/Homepage"
import NameForm from "./components/nameForm/NameForm"
import Structure from "./components/structure/Structure"

function App() {
  const [userName, setUserName] = useState("kjb");
  return (
    <div>
     <Structure /> 
     {userName == "" ? <NameForm /> : <Homepage />}
    </div>
  )
}

export default App