"use client"
import React,{useState} from "react";

export default function Form(){

    const [fromData, setFromData]= useState({username:"",password:""});

    const handleSubmit = (event)=>{
        event.preventDefault();
        alert("From Submitted");

    }

    const handleInputChange =(event)=>{
        const {name, value}= event.target;
        setFormData({...fromData,[name]: value});
    }

    return(
        <div>
            <form onSubmit={handleSubmit}>
                <input 
                type="text"
                name="username"
                placeholder="username"
                value={fromData.username}
                onChange={handleInputChange}
                >
                </input>

                <input 
                type="password"
                name="password"
                placeholder="password"
                value={fromData.password}
                onChange={handleInputChange}
                >
                </input>

                <button type="submit">Summit</button>
            </form>
        </div>
    )
    
}