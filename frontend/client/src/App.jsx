import {Routes, Route} from "react-router-dom";
import SignUp from "./components/SignUp";
import Login from "./components/Login";
import Home from "./components/Home";
import ContextProvider from "./contexts/ContextProvider";

function App() {

  return (
    <ContextProvider>
      <Routes>
        <Route path="/register" element={<SignUp/>}/>
        <Route path="/" element={<Login/>}/>
        <Route path="/home" element={<Home/>}/>
      </Routes>
    </ContextProvider>
  )
}

export default App
