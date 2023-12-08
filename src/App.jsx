import { Routes, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import KelasPage from "./pages/KelasPage";
import TestimonialPage from "./pages/TestimonialPage";
import FaqPage from "./pages/FaqPage";
import SyaratPage from "./pages/SyaratPage";

// Impor komponen navbar dab footer
import NavbarComponent from "./components/NavbarComponent";
import FooterComponent from "./components/FooterComponent";
// import FooterComponent from "./components/FooterComponent";

// Animasi bagaimana caranya 
import "animate.css";
import VideoPage from "./pages/VideoPage";


function App() {
  return (
    <div>
      <NavbarComponent />

      <Routes>
        <Route path="/" Component={HomePage} />
        <Route path="/kelas" Component={KelasPage} />
        <Route path="/testimonial" Component={TestimonialPage} />
        <Route path="/faq" Component={FaqPage} />
        <Route path="/syaratketentuan" Component={SyaratPage} />
        <Route path="/videopage" Component={VideoPage} />
      </Routes>

      <FooterComponent />
    </div>
  );
}

export default App;
