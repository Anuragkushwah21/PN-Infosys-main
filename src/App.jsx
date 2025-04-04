import React from "react";
import { Routes, Route } from "react-router-dom";
import "./assets/font-awesome.min.css";
import "./assets/style.css";
import Nav from "./components/Layouts/Nav";
import Home from "./components/Home/Home";
import Footer from "./components/Layouts/Footer";
import About from "./components/About_Us/About";
import OurServices from "./components/OurServices/OurServices";
import Training from "./components/Training/Training";
import ContactUs from "./components/ContactUs/ContactUs";
import BentChair from "./components/WorkShop/BentChair";
import MPCT from "./components/WorkShop/MPCT";
import RJIT from "./components/WorkShop/RJIT";
import Xiaomi_Mi_Company from "./components/WorkShop/Xiaomi_Mi_Company";
import PlacementDesk from "./components/Placement/PlacementDesk";
import PlacementGallery from "./components/Placement/PlacementGallery";
import Birthday from "./components/Events/Birthday";
import Aniversary from "./components/Events/Aniversary";
import Tours from "./components/Events/Tours";
import { Toaster } from "react-hot-toast";
import AddEvent from "./components/Events/AddEvent";
import Placement from "./components/Placement/Placement";
import AddTechnology from "./components/Technologies/AddTechnology";
import AddPortfolio from "./components/Portfolio/AddPortfolio";
import AddOurTeam from "./components/OurTeam/AddOurTeam";
import Login from "./components/Auth/Login";
import Register from "./components/Auth/Register";
import Prestige from "./components/WorkShop/Prestige";
import Message from "./components/Message/Message";
import NotFound from "./components/NotFound/NotFound";
import Notice from "./components/Notice/Notice";
import StudentRegister from "./components/StudentRegistration/StudentRegister";
import StudentDisplay from "./components/StudentRegistration/StudentDisplay";


function App() {
  
  return (
    <>
      <Nav />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/loginAdmin" element={<Login />} />
        <Route path="/registerAdmin" element={<Register />} />
        <Route path="/about" element={<About />} />
        <Route path="/service" element={<OurServices />} />
        <Route path="/training" element={<Training />} />
        <Route path="/bentchair" element={<BentChair />} />
        <Route path="/mpct" element={<MPCT />} />
        <Route path="/rjit" element={<RJIT />} />
        <Route path="/xiaomi" element={<Xiaomi_Mi_Company />} />
        <Route path="/placement_desk" element={<PlacementDesk />} />
        <Route path="/placement_gallery" element={<PlacementGallery />} />
        <Route path="/birthday" element={<Birthday />} />
        <Route path="/tour" element={<Tours />} />
        <Route path="/aniversary" element={<Aniversary />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/Prestige" element={<Prestige/>} />
        <Route path="/notFound" element={<NotFound/>} />
        <Route path="/studentRegister" element={<StudentRegister/>} />
        {/* Admin */}
        <Route path="/addEvent" element={<AddEvent />} />
        <Route path="/addPlacement" element={<Placement />} />
        <Route path="/addTechnology" element={<AddTechnology />} />
        <Route path="/addPortfolio" element={<AddPortfolio />} />
        <Route path="/addOurTeam" element={<AddOurTeam />} />
        <Route path="/addNotice" element={<Notice />} />
        <Route path="/message" element={<Message />} />
        <Route path="/students" element={<StudentDisplay />} />
      </Routes>
      <Footer />
      <Toaster />
    </>
  );
}

export default App;
