import React from "react";
import "./index.css";
import About from "./Components/About";
import CombinedLogin from "./Components/CombinedLogin";
import {BrowserRouter, Routes,Route } from "react-router-dom";
import Page from "./Components/Page";
import Contact from "./Components/Contact";
import ErrorBoundary from "./Components/ErrorBoundary";
import Navbar from "./Components/Navbar";
import Ai from "./Components/Ai";

import News from "./Components/News";
import Product from "./Components/Product";

import Profile from "./Components/Profile";


function App  () {
  return (
    <>
    <div className="App">

      

      <ErrorBoundary>
       <Routes>
       <Route path="/my-app" element={<CombinedLogin/>}/>
       <Route path="/my-app/farmer" element={<Page/>}/>
       <Route path="/my-app/login" element={<CombinedLogin/>}/>
       <Route path="/my-app/about" element={<About/>}/>

       <Route path="/my-app/contact" element={<Contact/>}/>
       <Route path="/my-app/profile" element={<Profile/>}/>

       <Route path="/my-app/ai-assistance" element={<Ai/>}/>
       <Route path="/my-app/news" element={<News/>}/>
       <Route path="/my-app/products" element={<Product/>}/>
      
       </Routes>

       </ErrorBoundary>

      </div>
    </>
  
  );
};

export default App;