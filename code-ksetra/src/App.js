import React from "react";
import "./index.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { LanguageProvider } from "./LanguageContext";  // Import Language Context
import Navbar from "./Components/Navbar";
import Page from "./Components/Page";
import About from "./Components/About";
import Contact from "./Components/Contact";
import Profile from "./Components/Profile";
import BuyersPortal from "./Components2/Orders";
import Market from "./Components2/Market";
import Contacts2 from "./Components2/Contacts2";
import Page2 from "./Components2/Page2";
import News from "./Components/News";
import News2 from "./Components2/News2";
import Ai from "./Components/Ai";
import Product from "./Components/Product";
import ErrorBoundary from "./Components/ErrorBoundary";
import LanguageSelector from "./Components/LanguageSelector";  // Import Language Selector
import CombinedLogin from "./Components/CombinedLogin";

function App() {
  return (
    <>
    <LanguageProvider>
      {/* < CombinedLogin/> */}
      
      <div className="App">
        
        <LanguageSelector />  {/* Add Language Selector */}
        <ErrorBoundary>
          <Routes>
          <Route path="/my-app" element={<CombinedLogin/>} />
            <Route path="/my-app/farmer" element={<Page />} />
            <Route path="/my-app/about" element={<About />} />
            <Route path="/my-app/contact" element={<Contact />} />
            <Route path="/my-app/profile" element={<Profile />} />
            <Route path="/my-app/orders" element={<BuyersPortal />} />
            <Route path="/my-app/contact2" element={<Contacts2 />} />
            <Route path="/my-app/market" element={<Market />} />
            <Route path="/my-app/buyer-dashboard" element={<Page2 />} />
            <Route path="/my-app/news" element={<News />} />
            <Route path="/my-app/news2" element={<News2 />} />
            <Route path="/my-app/ai-assistance" element={<Ai />} />
            <Route path="/my-app/products" element={<Product />} />
          </Routes>
        </ErrorBoundary>
      </div>
    </LanguageProvider>
    </>
  );
}

export default App;
