import Header from "./components/Header";
import UseEffect from "./components/useEffect/UseEffect";
import { Outlet } from "react-router-dom";

function App() {
  return (
    <>
      <Header />
      {/* <UseEffect /> */}
      <div id="detail">
        <Outlet />
      </div>
    </>
  )
}

export default App