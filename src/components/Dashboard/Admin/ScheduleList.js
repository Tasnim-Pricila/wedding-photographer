import { faLocationDot } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React from "react";
import { useGetBookingsQuery } from "../../../features/booking/bookingApi";
import moment from "moment/moment";

const ScheduleList = () => {
  const { data } = useGetBookingsQuery();

  data?.data?.result?.filter(
    (d) =>
      d?.bookingDate?.map((date) =>
        console.log(moment(date).format("Do MMM YYYY"))
      )
    // console.log(d?.bookingDate.toString())
  );
  return (
    <>
      {data?.data?.result?.map((data) => (
        <div class="m-4 lg:flex border-2 rounded">
          <div class="flex content-center items-center m-5 text-2xl w-52  flex-wrap">
            {data?.bookingDate.map((date, i) => (
              <>
                {data?.bookingDate?.length > 1
                  ? data?.bookingDate?.length !== i + 1
                    ? moment(date).format("Do MMM YYYY") + " "
                    : moment(date).format("Do MMM YYYY")
                  : moment(date).format("Do MMM YYYY")}
              </>
            ))}
          </div>
          <div class="border-l border-black m-4 my-6 pl-6 flex flex-col justify-center content-center leading-normal w-full">
            <div class="text-gray-900 font-bold text-xl mb-2">
              {data?.packageId?.title}
            </div>
            <p class="text-gray-700">
              <FontAwesomeIcon
                icon={faLocationDot}
                className="mr-2"
              ></FontAwesomeIcon>
              {data?.address}
            </p>
          </div>
        </div>
      ))}
    </>
  );
};

export default ScheduleList;
