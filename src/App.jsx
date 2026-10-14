import Nav from "./component/Nav"
import Nav2 from "./component/Nav2"
import {Outlet} from "react-router-dom"
function App() {
  return (
    <div>
      
      <Nav/>
      <hr />
      <Nav2/>
      <hr />
      <Outlet/>
    </div>
  )
}

export default App