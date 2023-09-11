import React from "react";
import {
  faEdit,
  faLocationDot,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useGetBookingByUserIdQuery } from "../../../features/booking/bookingApi";
import { useSelector } from "react-redux";
import moment from "moment";

const Bookings = () => {
  const { id: userId, email } = useSelector((state) => state.auth);
  const { data } = useGetBookingByUserIdQuery(userId);
  // console.log(userId, email);
  // console.log(data?.data);
  return (
    <div className="grid grid-cols-4 gap-4">
      {data?.data?.map((data) => (
        <div class="rounded overflow-hidden shadow-lg px-4 py-4 bg-slate-300 pb-10 border-b-8 border-t-2 border-l-2 border-r-2 border-b-purple-500 hover:border-t-2 hover:border-l-2 hover:border-r-2 hover:border-purple-500 hover:duration-1000">
          <div className="flex justify-between items-center gap-4 h-20">
            <div className="text-2xl font-semibold text-purple-500">
              {data?.bookingDate.map((date, i) => (
                <>
                  {data?.bookingDate?.length > 1
                    ? data?.bookingDate?.length !== i + 1
                      ? moment(date).format("Do MMM YYYY") + ", "
                      : moment(date).format("Do MMM YYYY")
                    : moment(date).format("Do MMM YYYY")}
                </>
              ))}
            </div>
            <div className="flex">
              <FontAwesomeIcon
                icon={faEdit}
                className="mr-4 bg-slate-700 p-2 text-white rounded cursor-pointer"
              ></FontAwesomeIcon>
              <FontAwesomeIcon
                icon={faTrashAlt}
                className="bg-slate-700 p-2 text-white rounded cursor-pointer"
              ></FontAwesomeIcon>
            </div>
          </div>
          <div class="pt-6">
            <div class="font-bold text-xl mb-2">{data?.packageId?.title}</div>
            <p class="text-gray-700 text-base">
              Lorem ipsum dolor sit amet, consectetur adipisicing elit.
              Voluptatibus quia, nulla! Maiores et perferendis eaque,
              exercitationem praesentium nihil.
            </p>
          </div>
          <p class="text-gray-700 pt-4">
            <FontAwesomeIcon
              icon={faLocationDot}
              className="mr-2"
            ></FontAwesomeIcon>
            {data?.address}
          </p>
        </div>
      ))}
    </div>
  );
};

export default Bookings;
