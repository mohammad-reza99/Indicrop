import { useState } from "react";
import Header from "./components/Header";
import WhyChooseUs from "./components/WhyChooseUs";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <Header />
      <WhyChooseUs />
    </>
  );
}

export default App;
