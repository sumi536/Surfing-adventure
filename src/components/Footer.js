import { useRef } from "react";
import { useGsapFooterHeadline } from "../hooks/gsap";

const Footer = () => {
  const footerRef = useRef(null);
  const footerHeadline = useRef(null);

  useGsapFooterHeadline(footerHeadline, footerRef);

  return (
    <section className="footer wrapper" ref={footerRef}>
      <h1 ref={footerHeadline}>Adventure</h1>
      <p>&copy; {new Date().getFullYear()} Surfing. Wonder of sea</p>
    </section>
  );
};

export default Footer;
