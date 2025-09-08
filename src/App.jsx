import { useState } from "react";
import Header from "./components/Header";
import WhyChooseUs from "./components/WhyChooseUs";
import TipsCards from "./components/TipsCards";
import About from "./components/About";
import Brands from "./components/Brands";
import About2 from "./components/About2";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <WhyChooseUs />
      <TipsCards />
      <About />
      <Brands />
      <About2 />
    </>
  );
}

export default App;
