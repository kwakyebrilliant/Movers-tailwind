import './App.css';
// import Support from './components/Support';
// import About from './components/About';
// import Banner from './components/Banner';
// import Navbar from './components/Navbar';
// import Footer from './components/Footer';
import Home from './components/Home';
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Properties from './components/Properties';
import SinglePage from './components/SinglePage';
import Faq from './components/Faq';
import Layout from './Dashboard/Partial/Layout';
import Summary from './Dashboard/Pages/Summary';
import Booked from './Dashboard/Pages/Booked';
import AdminProperties from './Dashboard/Pages/AdminProperties';

function App() {
  return (
    <div>
      <Router>
        {/* <Navbar /> */}
        <Routes>
        <Route path="/" exact element={<Home />} />
        <Route path='/properties' element={<Properties /> } />
        <Route path='/single' element={<SinglePage /> } />
        <Route path='/faq' element={<Faq />} />
        <Route path='/layout' element={<Layout />} />
        <Route path='/summary' element={<Summary />} />
        <Route path='/booked' element={<Booked />} />
        <Route path='/adminproperties' element={<AdminProperties />} />
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
