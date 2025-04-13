import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import {CardHoverEffectDemo} from "./components/hoverEffect/CardHoverEffectDemo";
import Footer from "./components/footer/Footer";
import Compiler from "./components/compiler/Compiler";
import Navbar from "./components/navbar/Navbar";
import {PlaceholdersAndVanishInputDemo} from "./components/placeholders/PlaceholdersAndVanishInputDemo";
import {TextRevealCardPreview} from "./components/card/TextRevealCardPreview";
import Home from "./components/home/Home"


function App() {
  return (
    <>  
      <Router>
      <Navbar />
      <div className="bg-black">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<CardHoverEffectDemo />} />
          <Route path="/compiler" element={<Compiler />} />
          <Route path="/gpt" element={<PlaceholdersAndVanishInputDemo />} />
          <Route path="/about" element={<TextRevealCardPreview />} />
        </Routes>
      </div>
      <Footer />
    </Router>
    </>
  )
}

export default App
