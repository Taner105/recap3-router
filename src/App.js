import MyNav from "./components/MyNav";
import Home from "./pages/Home"
import Contact from "./pages/Contact"
import About from "./pages/About"
import FullStack from "./pages/FullStack"
import Instructor from "./pages/Instructor"

import { BrowserRouter, Routes, Route } from "react-router-dom";
import Footer from "./components/Footer";
import InstructorDetail from "./pages/InstructorDetail";

function App() {
  return (
    <BrowserRouter>
      <MyNav/>
      <Routes>
        <Route path="/" element={<Home/>} />
        <Route path="/contact" element={<Contact/>} />
        <Route path="/about" element={<About/>} />
        <Route path="/developing" element={<FullStack/>} />
        <Route path="/data-science" element={<FullStack/>} />
        <Route path="/devops" element={<FullStack/>} />
        <Route path="/instructor" element={<Instructor/>} />

        {/* <Route path="/instructors" element={<Instructors />} /> */}
        <Route path="/instructors/:login" element={<InstructorDetail />} />

      </Routes>
      <Footer/>
    </BrowserRouter>
    
  );
}
export default App;
