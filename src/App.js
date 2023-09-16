import About from "./Pages/About";
import Contact from "./Pages/Contact";
import Home from "./Pages/Home";
import Services from "./Pages/Services";
import {Route, Routes, BrowserRouter} from 'react-router-dom'
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import Projects from "./Pages/Projects";
import ServiceDetails from "./Pages/ServiceDetails";
import ProjectDetails from "./Pages/ProjectDetails";


function App() {
  return (
    <div>
      <BrowserRouter>
     <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/services" element={<Services />} />
        <Route path="/services/:id" element={<ServiceDetails />} />
        <Route path="/about" element={<About />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/projects" element={<Projects />} />
        <Route path="/projects/:id" element={<ProjectDetails />} />
      </Routes>
      <Footer />
      </BrowserRouter>
    </div>
  );
}

export default App;
