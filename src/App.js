import { useState } from "react"
import Multiselect from "./Components/Multiselect"


const options = [
  { label: "Apple", value: "apple" },
  { label: "Banana", value: "banana" },
  { label: "Watermelon", value: "watermelon" },
  { label: "Grapes", value: "grapes" },
  { label: "Orange", value: "orange" }
]

function App() {
  const [value1, setValue1] = useState([options[0]])
  

  return (
    <>
      <Multiselect
        multiple
        options={options}
        value={value1}
        onChange={e => setValue1(e)}
      />
      <br />
      
    </>
  )
}

export default App
