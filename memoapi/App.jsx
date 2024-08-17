import { useState } from "react"
import ComplexLogic from "./components/ComplexLogic/ComplexLogic"

function App() {
    const [text, settext] = useState('')
    const [count, setcount] = useState(0);

    const inputHandler = (e) => {
        settext(e.target.value);
    }

    const clickHandler = () => {
        setcount(count + 1);
    }
  return (
    <>
        <ComplexLogic text={text}/>
        <input type="text" onChange={inputHandler} />
        <button onClick={clickHandler}>{count}</button>

    </>
  )
}

export default App