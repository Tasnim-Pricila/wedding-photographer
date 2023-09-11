import {
  faEdit,
  faLocationDot,
  faTrashAlt,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useEffect, useState } from "react";
import { useGetBookingsQuery } from "../../../features/booking/bookingApi";
import moment from "moment/moment";

const UpcomingEvents = () => {
  const { data } = useGetBookingsQuery();
  const [upcoming, setUpcoming] = useState([]);

  useEffect(() => {
    let events = [];
    data?.data?.result?.forEach((d) => {
      d?.bookingDate?.forEach((element) => {
        if (new Date(element) > new Date()) {
          const exists = events.find((e) => e._id === d._id);
          if (!exists) {
            events.push(d);
          }
        }
      });
    });
    setUpcoming(events);
  }, [data]);

  console.log(upcoming);

  return (
    <>
      <div className="grid grid-cols-4 gap-4">
        {upcoming &&
          upcoming?.map((data) => (
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
                <div class="font-bold text-xl mb-2">
                  {data?.packageId?.title}
                </div>
                <p class="text-gray-700 text-base">
                  {data?.packageId?.description?.split(".").map((d) => (
                    <ul key={d}>
                      <li className="leading-7">{d}</li>
                    </ul>
                  ))}
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
    </>
  );
};

export default UpcomingEvents;
