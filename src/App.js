import { BrowserRouter, Route, Routes } from "react-router-dom"
import Feed from "./Components/Feed"
import Login from "./Components/Register/Login"
import Register from './Components/Register/Register'
const App = () =>{
  return (


    <div>


      <BrowserRouter>
      
      <Routes>
        <Route path="/" element={<Register />}/>
        <Route path="/login" element={<Login />} />
        <Route path="/news" element={<Feed />} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}



export default App