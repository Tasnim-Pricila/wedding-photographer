import React from "react";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import { useEffect } from "react";
import { useRef } from "react";

const Package = ({ packages }) => {
  const packageRef = useRef();
  const { img, title, description, price, _id } = packages;
  const navigate = useNavigate();
  const handleDetails = () => {
    navigate(`/details/${_id}`);
    window.scroll("top", 0);
  };
  gsap.registerPlugin(ScrollTrigger);

  useEffect(() => {
    if (window.innerWidth <= 768) {
      gsap.set(packageRef.current, {
        opacity: 0,
      });
      ScrollTrigger.create({
        trigger: packageRef.current,
        // markers: true,
        start: "top 60%",
        end: "center 10%",
        scrub: 1,
        onEnter: () => {
          gsap.fromTo(
            packageRef.current,
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
          gsap.to(packageRef.current, {
            y: -100,
            duration: 1,
            opacity: 0,
          });
        },
        onEnterBack: () => {
          gsap.to(packageRef.current, {
            y: 0,
            duration: 1,
            opacity: 1,
          });
        },
        onLeaveBack: () => {
          gsap.to(packageRef.current, {
            y: 100,
            duration: 1,
            opacity: 0,
          });
        },
      });
    }
  }, []);

  return (
    <div ref={packageRef}>
      <div className="flex flex-col text-center shadow-sm shadow-fuchsia-200 service">
        <img
          src={img}
          alt="package"
          className="p-2 cursor-pointer"
          onClick={() => handleDetails()}
        />
        <p className="text-xl font-semibold my-4">{title}</p>
        {description.split(".").map((d) => (
          <ul key={d}>
            <li className="leading-7">{d}</li>
          </ul>
        ))}
        <p className="text-2xl my-3 font-semibold"> $ {price} </p>
        <button
          className="border border-fuchsia-700 py-2 font-medium uppercase hover:bg-fuchsia-700 hover:text-white hover:transition hover:duration-500"
          onClick={handleDetails}
        >
          Book Order &nbsp;
          <FontAwesomeIcon
            icon={faShoppingBag}
            style={{ fontSize: "16px" }}
          ></FontAwesomeIcon>
        </button>
      </div>
    </div>
  );
};

export default Package;
