import {
  BrowserRouter,
  Route,
  Routes,
} from "react-router-dom";
import ScrollToTop from "./components/ScrollToTop";
import Home from "./pages/Home";
import AboutUs from "./pages/AboutUs";
import PaEmploymentBased from "./pages/PaEmploymentBased";
import PaEmploymentConsult from "./pages/PaEmploymentConsult";
import PaTax from "./pages/PaTax";
import PaBusiness from "./pages/PaBusiness";
import PaEstate from "./pages/PaEstate";
import PaNotarization from "./pages/PaNotarization";
import Faqs from "./pages/Faqs";
import Contact from "./pages/Contact";
import Template from "./pages/Template";
import DownloadTemplate from "./pages/DownloadTemplate";

function App() {

  return (
    <BrowserRouter>
      <ScrollToTop/>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/pa-employment-based" element={<PaEmploymentBased />} />
        <Route path="/pa-employment-consult" element={<PaEmploymentConsult />} />
        <Route path="/pa-tax" element={<PaTax />} />
        <Route path="/pa-business" element={<PaBusiness />} />
        <Route path="/pa-estate" element={<PaEstate />} />
        <Route path="/pa-notarization" element={<PaNotarization />} />
        <Route path="/faqs" element={<Faqs />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/template" element={<Template />} />
        <Route path="/get-template" element={<DownloadTemplate />} />

      </Routes>
    </BrowserRouter>
    
  )
}

export default App
