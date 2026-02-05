import { BrowserRouter, Routes, Route } from "react-router-dom";

import Navbar from "./Layout/Navbar";
import Footer from "./Layout/Footer";

import Home from "./Pages/Home";
import About from "./Pages/About";
import Activities from "./Pages/Activities";
import Gallery from "./Pages/Gallery";
import Album from "./Pages/Album"; // 👈 bagong page

export default function App() {
  return (
    <BrowserRouter>
      <div className="leading-[1.2] bg-gray-50">
        <Navbar />

        <Routes>
          {/* MAIN ONE-PAGE SITE */}
          <Route
            path="/"
            element={
              <>
                <Home />
                <About />
                <Activities />
                <Gallery />
              </>
            }
          />

          {/* GALLERY ALBUM PAGE */}
          <Route path="/gallery/:albumId" element={<Album />} />
        </Routes>

        <Footer />
      </div>
    </BrowserRouter>
  );
}
