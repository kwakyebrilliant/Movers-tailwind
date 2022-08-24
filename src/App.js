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
import UserProperties from './Dashboard/Pages/UserProperties';
import Favorite from './Dashboard/Pages/Favorite';
import Chat from './Dashboard/Pages/Chat';
import ChatSingle from './Dashboard/Pages/ChatSingle';
import AdminPropertiesDetail from './Dashboard/Pages/AdminPropertiesDetail';
import AdminSummary from './Admin/Pages/AdminSummary'
import AdminChat from './Admin/Pages/AdminChat';
import AdminChatSingle from './Admin/Pages/AdminChatSingle';
import AdminBooked from './Admin/Pages/AdminBooked';


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
        <Route path='/userproperties' element={<UserProperties />} />
        <Route path='/favorite' element={<Favorite />} />
        <Route path='/chat' element={<Chat />} />
        <Route path='/chatsingle' element={<ChatSingle />} />
        <Route path='/adminpropertiesdetail' element={<AdminPropertiesDetail />} />
        <Route path='/adminsummary' element={<AdminSummary />} />
        <Route path='/adminchat' element={<AdminChat />} />
        <Route path='/adminchatsingle' element={<AdminChatSingle />} />
        <Route path='/adminbooked' element={<AdminBooked />} />
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
