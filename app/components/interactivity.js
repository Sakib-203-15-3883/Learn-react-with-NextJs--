// handling click event 
"use client"

import React,{useState} from "react";

export default function Interactivity(){

    const isButtonClicked = ()=>{
        alert("button clicked")
    };

    return(
        <div>
            <button onClick={isButtonClicked} >
                Click Here 
            </button>
        </div>
    )
}