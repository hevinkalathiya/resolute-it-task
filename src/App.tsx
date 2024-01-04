
import "./App.css";
import Description from "./components/Description";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="max-w-[1500px] mx-auto">
      <Navbar />
      <Hero />
      <Description />
    </div>
  );
}

export default App;
