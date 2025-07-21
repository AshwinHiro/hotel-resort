import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import { BrowserRouter, Routes, Route } from "react-router";
import Footer from './Components/Footer/Footer';
import Service from './Pages/Service';

function App() {
  return (
    <div className="App">
      <BrowserRouter>
      <Navbar />

      {/* <Home /> */}

      {/* <Service /> */}

      
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/services" element={<Service />} />
        </Routes>
      

      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
