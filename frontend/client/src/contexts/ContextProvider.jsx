import React from 'react';
import { useState} from 'react'; 
import UseContext from './UseContext';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContextProvider({children}) {

    const [isAuthentication, setisAuthentication] = useState(false);
    const [fullname, setFname] = useState("");
    const [username, setUname] = useState("");
    const [password, setPaswrd] = useState("");
    const [message, setMessage] = useState("");

    const handleRegister = async() => {
        try{
            const response = await axios.post("http://localhost:3000/register",{
                fullname, username, password
            });
            setisAuthentication(true);
            toast.success(response.data.message);
            window.location = "/home";
        }
        catch(error){
            toast.error("voer mai re chudi");
        }
    }

    const handleLogin = async() => {
        try{
            const response = await axios.post("http://localhost:3000/login",{
                username, password,
            });
            setMessage(response.data.message)
            toast.success("Login successful");
            window.location = "/home";
        }
        catch(error){
            toast.error("Invalid Username or Password");
        }
        
    }

    const handleLogout = async() => {
        try{
            const response = await axios.post("http://localhost:3000/logout",{
            })
            setisAuthentication(false)
            toast.success("Loged Out successfully.")
            res.redirect("/");
        }
        catch(error){
            toast.error("Internal Server Problem");
        }
    }

    return(
        <UseContext.Provider value={{fullname, setFname, username, setUname, password, setPaswrd, isAuthentication, setisAuthentication , handleRegister, handleLogin}}>
            {children}
        </UseContext.Provider>
    )
}

export default ContextProvider;