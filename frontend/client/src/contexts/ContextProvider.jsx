import React from 'react';
import { useState} from 'react'; 
import UseContext from './UseContext';
import axios from "axios";
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function ContextProvider({children}) {

    const [isAuthentication, setisAuthentication] = useState(false);
    const [allPosts, setAllPosts] = useState("");
    const [videoUrl, setVideoUrl] = useState("");
    const [password, setPaswrd] = useState("");
    const [message, setMessage] = useState("");
    const [username, setUname] = useState("");
    const [fullname, setFname] = useState("");
    const [imgUrl, setImgUrl] = useState("");
    const [topic, setTopic] = useState("");

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
            toast.error("registration failed");
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
            await axios.post("http://localhost:3000/logout");

            setisAuthentication(false)
            toast.success("Loged Out successfully.");
            res.redirect("/");
        }
        catch(error){
            toast.error("Internal Server Problem");
        }
    }

    const getAllPosts = async() => {
        const response = await axios.get("http://localhost:3000/api/post");
        getAllPosts(response.data);
    }
    
    const createPosts = async() => {
        const response = await axios.post("https://localhost:3000/api/post", {
            topic, imgUrl, videoUrl,
        })
        .then(() => {
            setAllPosts(newPost => {
                const newArray = [...allPosts, newPost];
                return  newArray;
            });
            setTopic("");
            setImgUrl("");
            setVideoUrl("");
        });
        windows.location = "/home"
    }

    const deletePosts  = (id) => {
        axios.delete(`https://localhost:3000/api/${id}`)
        .then(() => {
            setAllPosts(oldPosts => {
                const afterDelete = oldPosts.filter(post => post._id !== id);
                return afterDelete;
            })
        })
        .catch(error => {
            console.log(error)
        });
    };


    return(
        <UseContext.Provider value={{fullname, setFname, username, setUname, password, setPaswrd, imgUrl, setImgUrl, topic, setTopic, videoUrl, setVideoUrl, allPosts, setAllPosts, isAuthentication, setisAuthentication , handleRegister, handleLogin, handleLogout, getAllPosts, createPosts, deletePosts}}>
            {children}
        </UseContext.Provider>                                                                                                                               
    )
}

export default ContextProvider;