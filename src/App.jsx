import { useState } from "react";
import Header from "./components/Header";
import WhyChooseUs from "./components/WhyChooseUs";
import TipsCards from "./components/TipsCards";
import About from "./components/About";
import Brands from "./components/Brands";
import About2 from "./components/About2";
<<<<<<< HEAD

=======
import Footer from "./components/Footer";
>>>>>>> 64f3df1 (feat: add Footer component to enhance site navigation and information)
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
<<<<<<< HEAD
=======
      <Footer />
>>>>>>> 64f3df1 (feat: add Footer component to enhance site navigation and information)
    </>
  );
}

export default App;
