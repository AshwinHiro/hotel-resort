import logo from './logo.svg';
import './App.css';
import Navbar from './Components/Navbar/Navbar';
import Home from './Pages/Home';
import Footer from './Components/Footer/Footer';
import Service from './Pages/Service';

function App() {
  return (
    <div className="App">
      <Navbar />

      <Home />

      {/* <Service /> */}

      <Footer />
    </div>
  );
}

export default App;
