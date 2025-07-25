import { useGSAP } from "@gsap/react";
import { navLinks } from "../../Constants";
import gsap from "gsap";

const NavBar = () => {
  useGSAP(() => {
    const navTween = gsap.timeline({
      scrollTrigger: {
        trigger: "nav",
        start: "bottom top",
        scrub: true,
      },
    });

    navTween.fromTo(
      "nav",
      { backgroundColor: "transparent" },
      {
        backgroundColor: "#00000050",
        backdgroundFilter: "blur(10px)",
        duration: 1,
        ease: "back.inOut",
      }
    );
  });
  return (
    <nav>
      <div>
        <a href="home" className="flex items-center gap-2">
          <img src="/images/logo.png" alt="logo" />
          <p>Velvet Pour</p>
        </a>

        <ul>
          {navLinks.map((link) => (
            <li key={link.id}>
              <a href={`#${link.id}`}>{link.title}</a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
};

export default NavBar;
