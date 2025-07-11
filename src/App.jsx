import gsap from "gsap";
import { ScrollTrigger, SplitText } from "gsap/all";
import NavBar from "./components/NavBar";
import Hero from "./components/Hero";
import Cocktails from "./components/Cocktails";

gsap.registerPlugin(ScrollTrigger, SplitText);
const App = () => {
  return (
    <div>
      <NavBar />
      <Hero />
      <Cocktails />
    </div>
  );
};

export default App;
