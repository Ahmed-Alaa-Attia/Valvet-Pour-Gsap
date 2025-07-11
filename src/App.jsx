import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";
import About from "./components/About";

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Cocktails />
      <About />
    </div>
  );
};

export default App;
