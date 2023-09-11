import { faCamera } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { gsap } from "gsap";
import React, { useEffect, useRef } from "react";

const Banner = () => {
  const app = useRef(null);

  useEffect(() => {
    let ctx = gsap.context(() => {
      gsap.set(".Button", {
        opacity: 0,
        x: "-100vw",
      });
      gsap.from(".title", {
        opacity: 0,
        y: 200,
        duration: 1.5,
        ease: "power3",
      });
      gsap.from(".smallTitle", {
        opacity: 0,
        y: 200,
        duration: 1.5,
        ease: "power3",
        onComplete: () => {
          gsap.fromTo(
            ".Button",
            {
              opacity: 0,
              x: "-100vw",
            },
            {
              opacity: 1,
              x: 0,
              ease: "elastic",
              duration: 1,
            }
          );
        },
      });
    }, app);
    return () => ctx.revert();
  }, []);
  
  const scrollToSection = (sectionId) => {
    const section = document.getElementById(sectionId);
    if (section) {
      window.scrollTo({
        top: section.offsetTop,
        behavior: 'smooth',
      });
    }
  };

  return (
    <div className="banner" ref={app}>
      <div className="text-white flex flex-col justify-center items-center h-full leading-10 z-50 max-w-full">
        <p className="text-4xl md:text-6xl capitalize my-4 mb-6 text-center title">
          make your Wedding event memorable
        </p>
        <p className="text-xl md:text-2xl capitalize md:tracking-widest tracking-wide smallTitle">
          Priceless Event of your life
        </p>
          <button onClick={() => scrollToSection('gallery')} className="border border-fuchsia-700 my-6 py-2 px-6 font-medium uppercase hover:bg-fuchsia-700 hover:text-white hover:transition hover:duration-500 tracking-widest Button">
            See Photos &nbsp;
            <FontAwesomeIcon
              icon={faCamera}
              style={{ fontSize: "20px" }}
            ></FontAwesomeIcon>
          </button>
      </div>
    </div>
  );
};

export default Banner;
