import './App.css';
import Support from './components/Support';
import About from './components/About';
import Banner from './components/Banner';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

function App() {
  return (
    <div>
      <Navbar />
      <Banner />
      <About />
      <Support />
      <Footer />
    </div>
  );
}

export default App;
