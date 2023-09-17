"use client"
import React ,{useState}from "react";
import Sum from "./components/com";
import { Sub } from "./components/com";
import UserInfo from "./components/userInfo";
import {App} from "./components/Conditional_Rendering"
import Interactivity from "./components/interactivity";
import Form from "./components/form";

import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";


const Home = () => {
  return (

    <div>
    <Header />
    <MainSection />
    <Footer />
    </div>
    
  );
};

export default Home;



