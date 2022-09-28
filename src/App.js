import Experience from "./componenets/Experience";
import Home from "./componenets/Home";
import NavBar from "./componenets/NavBar";
import SocialLinks from "./componenets/SocialLinks";


function App() {
  return (
    <div className="App">
      <NavBar />
      <Home/>
      <Experience />

      <SocialLinks  />
    </div>
  );
}

export default App;
