// Page imports
import Home from "./pages/Home"
import Result from "./pages/Result"
import BuyCredit from "./pages/BuyCredit"

// Component imports
import Navbar from "./components/Navbar"
import LogIn from "./components/LogIn"


// React Router imports
import { Routes, Route } from "react-router-dom"
import Footer from "./components/Footer"

// Context
import { useContext } from "react"
import AppContext from "./context/AppContext"

// Toast  
import { ToastContainer } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function App() {

  const { open } = useContext(AppContext);

  return (
    <div className="px-4 sm:px-10 md:px-14 lg:px-28 min-h-screen bg-gradient-to-b from-teal-50 to-orange-50">
      <ToastContainer position="bottom-right" autoClose={5000} />
      <Navbar />
        {open && <LogIn/>}
          <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/result" element={<Result />} />
              <Route path="/buy-credit" element={<BuyCredit />} />
          </Routes>
      <Footer />
    </div>
  )
}

export default App
