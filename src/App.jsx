import Navbar from "./Layout/Navbar";
import Home from "./Pages/Home";
import About from "./Pages/About";
import Activities from "./Pages/Activities";
import Gallery from "./Pages/Gallery";
import Footer from "./Layout/Footer";

export default function App() {
  return(
    <>
    <div className="leading-1.2">
      <Navbar />
      <Home />
      <About />
      <Activities />
      <Gallery />
      <Footer />
    </div>

    </>
  )
}

