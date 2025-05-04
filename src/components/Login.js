import React from 'react'
import { getAuth, createUserWithEmailAndPassword,signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase-config'
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
function Login( {setIsAuth}) {

    let navigate=useNavigate()
    const auth = getAuth();
    
    const [email, setemail]=useState("");
    const [password, setpassword]=useState("");

    const signup=()=>{
        signInWithEmailAndPassword(auth, email, password)
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            localStorage.setItem("isAuth",true)
            setIsAuth(true)
            navigate("/createblogadmin")
            // console.log(user)
            // alert("Suueessfull login")
            // ...
          })
          .catch((error) => {
            const errorCode = error.code;
            alert(errorCode)
          });
        }

    
    return (
        <div className='container'>
        <input type="email" placeholder='Enter email' onChange={(e)=>setemail(e.target.value)}></input>
        <input type="password" placeholder='Enter password' onChange={(e)=>setpassword(e.target.value)}></input>
        <button type='submit' onClick={signup}> Login</button>
        </div>
    )
}

export default Login
