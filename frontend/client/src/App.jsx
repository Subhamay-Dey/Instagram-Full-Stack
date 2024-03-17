import {Routes, Route} from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";

function App() {

  return (
    <>
      <Routes>
        <Route path="/login" element={<Login/>}/>
        <Route path="/register" element={<SignUp/>}/>
      </Routes>
    </>
  )
}

export default App
