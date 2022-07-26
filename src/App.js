import './App.css';
// import Support from './components/Support';
// import About from './components/About';
// import Banner from './components/Banner';
import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Properties from './components/Properties';
import SinglePage from './components/SinglePage';

function App() {
  return (
    <div>
      <Router>
        <Navbar />
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path='/properties' element={<Properties /> } />
        <Route path='/single' element={<SinglePage /> } />
        </Routes>
      </Router>
     
      {/* <Banner />
      <About />
      <Support />
      <Footer /> */}
      
    </div>
  );
}

export default App;
