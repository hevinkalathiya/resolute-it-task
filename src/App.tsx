import "./App.css";
import Description from "./components/Description";
import { Features } from "./components/Features";
import Footer from "./components/Footer";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="max-w-[1500px] mx-auto">
      <Navbar />
      <Hero />
      <Description />
      <Features />
      <Footer />
    </div>
  );
}

export default App;
