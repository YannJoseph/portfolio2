import About from "./componenets/About";
import Contact from "./componenets/Contact";
import Experience from "./componenets/Experience";
import Home from "./componenets/Home";
import NavBar from "./componenets/NavBar";
import Portfolio from "./componenets/Portfolio";
import SocialLinks from "./componenets/SocialLinks";


function App() {
  return (
    <div >
      <NavBar />
      <Home/>
      <About />
      <Portfolio />
      <Experience />
      
      <Contact />

      <SocialLinks  />
    </div>
  );
}

export default App;
