import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/Banner";
import { Skills } from "./components/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/Footer";
// import ProgressCircle from './components/ProgressCircle';
import { keepTheme} from "./utils/themes";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    keepTheme();
  })
  
  return (
    <div className="App" >
      {/* <ProgressCircle/> */}
      <NavBar />
      <Banner />
      <Skills />
      <Projects />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
