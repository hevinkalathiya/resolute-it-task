<<<<<<< HEAD
import { useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);

  return <></>;
=======
import "./App.css";
import Hero from "./components/Hero";
import { Navbar } from "./components/Navbar";

function App() {
  return (
    <div className="max-w-[1500px] mx-auto">
      <Navbar />
      <Hero />
    </div>
  );
>>>>>>> 03d48ce (Feat: Navbar Created)
}

export default App;
