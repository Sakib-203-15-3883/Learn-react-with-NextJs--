"use client";
import React, { useState } from "react";
import Sum from "./components/com";
import { Sub } from "./components/com";
import UserInfo from "./components/userInfo";
import { App } from "./components/Conditional_Rendering";
import Interactivity from "./components/interactivity";
import Form from "./components/form";

import Header from "./components/Header";
import MainSection from "./components/MainSection";
import Footer from "./components/Footer";

import cardData from "./components/cardData";

import Card from "./components/card";
console.log(Card);

import {user,initialItems} from "./components/data";
import UserProfile from "./components/UserProfile";
import ShoppingCartPage from "./components/ShoppingCartPage";

// console.log(cardData);

const Home = () => {
  return (
    <div>
      <Header />
      <MainSection />

      {/* Displaying Cards */}

      <div className="flex flex-wrap gap-12">
        {cardData.map((card) => (
          <Card
            title1={card.title1}
            title2={card.title2}
            imageUrl={card.imageUrl}
          />
        ))}
      </div>

      {/* Displaying Cards End  */}

    {/* Displaying User Information Conditionally with Click Event */}

    <UserProfile user ={user}/>

    {/* ShoppingCart Component */}

    <ShoppingCartPage initialItems ={initialItems} />

      <Footer />
    </div>
  );
};

export default Home;
