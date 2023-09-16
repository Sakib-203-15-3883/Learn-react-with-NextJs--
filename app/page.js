import React from "react";
import Sum from "./components/com";
import { Sub } from "./components/com";
import UserInfo from "./components/userInfo";
import {App} from "./components/Conditional_Rendering"

export default function Homemade() {
  return (
    
      <div 
        
      >
        <div style={{
          textAlign: "center",
          color: "black",
          backgroundColor: "whiteSmoke",
          height: "400px",
          width: "70%",
          margin:"5% ",
          display:"grid",
          placeContent:"center"
        }}>
        <h1>Hello react </h1>
        <Sum />
        <Sub />

        </div>
        
        
        <div style={{
          margin:"10%",
          background:"green",
          height:"300px"
        }}>
        <UserInfo />
        </div>

        <div>
        <App/>

      </div>
       
      
      </div>

    

     
   
  );
}
