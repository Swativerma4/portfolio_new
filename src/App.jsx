import React, { useEffect, useState } from 'react';
import './App.css';
import Header from './components/header/Header';
import { Home } from './components/home/Home'; // Import named export Home
import About from './components/about/About'; // Import default export About   -l 
import Skills from "./components/Skills" 
import Mess from "./components/Contact/contact"
import Project from './components/Project/Project';
import 'bootstrap/dist/css/bootstrap.min.css';



function App() {
  const [showLoader, setShowLoader] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoader(false);
    }, 5000);

    return () => clearTimeout(timer);
  }, []);


  return (
    <>
      
      <Header />
      <main className='main'>
        <Home />
        <About />

        <Skills/>
        <Project/>
        <Mess/>
       
      
      </main>
    </>
  );
}

export default App;
