import React, { useEffect, useRef } from "react";
import { useGetPackagesQuery } from "../../features/package/packageApi";
import Package from "./Package";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const Packages = () => {
  const app = useRef();
  const cardRef = useRef();

  const { data } = useGetPackagesQuery();
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    gsap.set(cardRef.current, {
      opacity: 0,
    });
    ScrollTrigger.create({
      trigger: app.current,
      // markers: true,
      start: "top 60%",
      end: "center 10%",
      scrub: 1,
      onEnter: () => {
        gsap.fromTo(
          cardRef.current,
          {
            y: 100,
            opacity: 0,
          },
          {
            y: 0,
            duration: 1,
            opacity: 1,
          }
        );
      },
      onLeave: () => {
        gsap.to(cardRef.current, {
          y: -100,
          duration: 1,
          opacity: 0,
        });
      },
      onEnterBack: () => {
        gsap.to(cardRef.current, {
          y: 0,
          duration: 1,
          opacity: 1,
        });
      },
      onLeaveBack: () => {
        gsap.to(cardRef.current, {
          y: 100,
          duration: 1,
          opacity: 0,
        });
      },
    });
  }, []);

  return (
    <div ref={app}>
      <div className="services my-12 px-12 pt-8">
        <h2 className="text-3xl text-center uppercase tracking-wider">
          My Services
        </h2>
        <p className="text-base text-center text-fuchsia-700 mt-2 mb-8 font-semibold tracking-wide">
          What I Love Doing...
        </p>
        <div
          ref={cardRef}
          className="flex gap-10 flex-wrap md:flex-nowrap packages"
        >
          {data?.data?.result?.map((packages) => (
            <Package key={packages._id} packages={packages} />
          ))}
        </div>
      </div>
    </div>
  );
};

export default Packages;
