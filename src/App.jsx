import { useState } from "react";
import Header from "./components/Header";
import WhyChooseUs from "./components/WhyChooseUs";
import TipsCards from "./components/TipsCards";
import About from "./components/About";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <WhyChooseUs />
      <TipsCards />
      <About />
    </>
  );
}

export default App;
