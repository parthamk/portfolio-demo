import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import { NavBar } from "./components/NavBar";
import { Banner } from "./components/banner/Banner";
import { Skills } from "./components/skills/Skills";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Footer } from "./components/footer/Footer";
import { keepTheme} from "./utils/themes";
import { useEffect } from 'react';

function App() {

  useEffect(() => {
    keepTheme();
  })
  
  return (
    <div className="App" >
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
