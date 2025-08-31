
import React, { useState } from "react";
import { dataContext } from "./context/userContext";

import './App.css'
import About from './pages/About'
import Headercomp from './components/Headercomp'
import Contact from './pages/Contact'
import Faq from './pages/Faq'
import Home from './pages/Home'
import Review from './pages/Review'
import Offer from './pages/Offer'
import Footer from './pages/Footer'


const App = () => {
  const [activeLink, setActiveLink] = useState("HOME");

  const renderContent = () => {
    switch (activeLink) {
      case "HOME":
        return <Home />;
      case "ABOUT":
        return <About />;
      case "OFFER":
        return <Offer />;
      case "FAQ":
        return <Faq/>;
      case "REVIEW":
        return <Review />;
      case "CONTACT":
        return <Contact />;
      default:
        return <Home />;
    }
  };

  return (
    <dataContext.Provider value={{ showcart: false, setshowcart: () => {} }}>
      <div className="flex flex-col min-h-screen font-inter">
        <Headercomp activeLink={activeLink} setActiveLink={setActiveLink} />
        <main className="flex-grow">
          {renderContent()}
        </main>
        <Footer/>
      </div>
    </dataContext.Provider>
  );

};

export default App
