import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Dashboard from "./components/dashboard/Dashboard";
import {CardHoverEffectDemo} from "./components/hoverEffect/CardHoverEffectDemo";
import Footer from "./components/footer/Footer";
import Compiler from "./components/compiler/Compiler";

function App() {
  return (
    <>  
      <Router>
        <div className="bg-[#94a3b8] min-h-screen">
          <Routes>
            <Route path="/" element={<Dashboard />} />
            <Route path="/projects" element={<CardHoverEffectDemo />} />
            <Route path="/compiler" element={<Compiler />} />
          </Routes>
        </div>
        <Footer />
      </Router>
    </>
  )
}

export default App
