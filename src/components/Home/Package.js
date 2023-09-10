import React from "react";
import { faShoppingBag } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useNavigate } from "react-router-dom";

const Package = ({ packages }) => {

  const { img, title, description, price, _id } = packages;
  const listedDescription = description.split(".", 4);

  const navigate = useNavigate();
  const navigateService = () => {
    navigate(`/checkout/${_id}`);
    window.scroll("top", 0);
  };
  const handleDetails = (id) => {
    navigate(`/details/${_id}`);
    window.scroll("top", 0);
  };

  return (
    <div>
      <div className="flex flex-col text-center shadow-sm shadow-fuchsia-200 service">
        <img
          src={img}
          alt="package"
          className="p-2 cursor-pointer"
          onClick={() => handleDetails()}
        />
        <p className="text-xl font-semibold my-4">{title}</p>
        {listedDescription.map((d) => (
          <ul key={d}>
            <li className="leading-7">{d}</li>
          </ul>
        ))}
        <p className="text-2xl my-3 font-semibold"> $ {price} </p>
        <button
          className="border border-fuchsia-700 py-2 font-medium uppercase hover:bg-fuchsia-700 hover:text-white hover:transition hover:duration-500"
          onClick={() => navigateService()}
        >
          Checkout &nbsp;
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
