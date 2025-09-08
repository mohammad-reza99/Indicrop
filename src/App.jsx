import { useState } from "react";
import Header from "./components/Header";
import WhyChooseUs from "./components/WhyChooseUs";
import TipsCards from "./components/TipsCards";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <WhyChooseUs />
      <TipsCards />
    </>
  );
}

export default App;
