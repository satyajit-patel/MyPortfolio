import Navbar from "./components/navbar/NavBar";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import {CardHoverEffectDemo} from "./components/hoverEffect/CardHoverEffectDemo";
import Footer from "./components/footer/Footer";

function App() {
  return (
    <>  
      <Router>
        <Navbar />
        <div className="bg-[#94a3b8] min-h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<CardHoverEffectDemo />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
