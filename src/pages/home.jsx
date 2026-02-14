import React from "react";
import "./home.css";
import Header from "../components/header";
import Body from "../components/body";
import Footer from "../components/footer";

function Home(){
  return(
    <>
      <div className="parent">
        <Header/>
        <Body/>
        <Footer/>
      </div>
    </>
  )
}

export default Home;