import React from 'react';
import { useState } from 'react'; 
import UseContext from "./context";
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function UseContextProvider({children}) {

    const [isAuthentication, setisAuthentication] = useState(false);
    const [fullname, setFullname] = useState("");
    const [username, setusername] = useState("");
    const [password, setPassword] = useState("");

    const handleRegister = async(req, res) => {
        try{
            const response = await axios.post("http://localhost:8080/register",{
               fullname, username, password
            });
            setisAuthentication(true);
            toast.success(response.data.message);
            window.location = "/profile";
        }
        catch(error){
            toast.error("Internal Server Error");
        }
    }

    const handleLogin = async() => {
        try{
            const response = await axios.post("http://localhost:8080/login",{
                username, password
            });
            toast.success("Login successful");
            window.location("/profile");
        }
        catch(error){
            toast.error("Invalid Username or Password");
        }
    }

    const handleLogout = async() => {
        try{
            const response = await axios.post("http://localhost:8080/logout",{
            })
            setisAuthentication(false)
            toast.success("Loged Out successfully.")
            res.redirect("/register");
        }
        catch(error){
            toast.error("Internal Server Problem");
        }
    }

    return(
        <UseContext.Provider value={{fullname, setFullname, username, setusername, password, setPassword, isAuthentication, setisAuthentication}}>
            {children}
        </UseContext.Provider>
    )

}