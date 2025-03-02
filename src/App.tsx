import { useState } from "react"
import Homepage from "./components/homepage/Homepage"
import NameForm from "./components/nameForm/NameForm"
import Structure from "./components/structure/Structure"
import { useGSAP } from "@gsap/react"

function App() {
// localStorage.clear()
// useGSAP(() => {

// })
  const [userName, setUserName] = useState("");
  if(localStorage.length == 0){
    localStorage.setItem("user", "")
  }
  return (
    <div>
     <Structure /> 
     {localStorage.getItem("user") == "" ? <NameForm username={userName} setUsername={setUserName} /> : <Homepage />}
    </div>
  )
}

export default App