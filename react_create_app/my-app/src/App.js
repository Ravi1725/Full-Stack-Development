
import { useState } from 'react';
import AboutUs from './aboutUs';
import './App.css';
import Home from './home';
import Pricing from './pricing';

function App() {
  //this is hook function is used seting value in functional components
  const[pageView, setPageView]=useState("Home");

  const changeToPricingPage=()=>{
    setPageView("Pricing")
  }
  const backToHomePage=()=>{
    setPageView("Home")
  }
  return (
    <div className="App">
     this is my first app application
     {
       pageView==="Home" && (
        <Home changeToPricingPage={changeToPricingPage}/>
       )
     }
     {
       pageView==="Pricing" &&(
        <Pricing backToHomePage={backToHomePage}/>
       )
     }
     {
       pageView==="AboutUs" &&(
         <AboutUs />
       )
     }
     
     
    </div>
  );
}

export default App;
