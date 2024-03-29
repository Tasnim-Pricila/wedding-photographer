import {
  faArrowRight,
  faReply,
  faReplyAll,
  faShoppingBag,
} from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import React, { useState } from "react";
import { DayPicker } from "react-day-picker";
import { toast } from "react-hot-toast";
import { useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { useGetBookingsQuery } from "../../features/booking/bookingApi";
import { useGetPackageByIdQuery } from "../../features/package/packageApi";
import {
  usePostQueryMutation,
  useUpdateQueryMutation,
} from "../../features/query/queryApi";
import Loading from "../Loading/Loading";

const SinglePackage = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const { id: userId, email } = useSelector((state) => state.auth);
  const { data } = useGetPackageByIdQuery(id);
  const { data: bookingsData } = useGetBookingsQuery();
  const [open, setOpen] = useState(false);
  const initialDays = [];
  const [selected, setSelected] = useState(initialDays);
  const [queryId, setQueryId] = useState("");
  const [postQuery] = usePostQueryMutation();
  const [updateQuery, { isLoading }] = useUpdateQueryMutation();
  const found = data?.data;
  const listedDescription = found?.description?.split(".");
  const replyDate = new Date().toISOString();
  const today = new Date();
  const tomorrow = new Date(today);
  tomorrow.setDate(tomorrow.getDate() + 1);
  // console.log(tomorrow)

  let disabledDays = [{ before: today }, today, tomorrow];

  bookingsData?.data?.result?.filter((d) =>
    d?.bookingDate.filter((date) => disabledDays.push(new Date(date)))
  );

  const handleSubmit = (e) => {
    e.preventDefault();
    const data = {
      packageId: id,
      userId: userId,
      userEmail: email,
      question: e.target.question.value,
    };
    postQuery(data);
    e.target.reset();
  };

  const handleReply = (e, id) => {
    e.preventDefault();
    const data = {
      userId: userId,
      userEmail: email,
      answer: e.target.reply.value,
      replyDate,
    };
    updateQuery({ id, data });
    e.target.reset();
  };

  const handleOpen = (id) => {
    setQueryId(id);
    setOpen(true);
  };
  if (isLoading) {
    return <Loading />;
  }

  const footer =
    selected && selected.length > 0 ? (
      <p className="text-green-500 mt-2">
        You selected {selected.length} day(s).
      </p>
    ) : (
      <p className="text-red-400 mt-2">Please pick one or more days.</p>
    );

  const navigateService = () => {
    if (selected) {
      navigate(`/checkout/${id}`, { state: { selected } });
      window.scroll("top", 0);
    } else {
      toast.error("Please select a day");
    }
  };

  return (
    <div className="my-10 mx-10">
      <div className="grid grid-cols-2">
        <div>
          <img src={found?.img} alt="" className="p-2 w-1/2 h-1/2" />
          <p className="text-xl font-semibold my-4">{found?.title}</p>
          <p className="text-2xl my-3 font-semibold"> $ {found?.price} </p>
          {listedDescription?.map((d) => (
            <ul key={d}>
              <li className="leading-7">{d}</li>
            </ul>
          ))}
        </div>
        <div>
          <DayPicker
            mode="multiple"
            captionLayout="dropdown"
            selected={selected}
            onSelect={setSelected}
            footer={footer}
            disabled={disabledDays}
            modifiersStyles={{
              disabled: { fontSize: "85%" },
              today: {
                fontWeight: "bold",
                fontSize: "140%",
                color: "violet",
                opacity: 0.9,
              },
            }}
          />

          <div className="flex justify-center w-full mt-8">
            <button
              type="button"
              className={`  ${
                !selected.length
                  ? " bg-gray-300 px-4 py-2 rounded-md cursor-not-allowed opacity-50"
                  : "border border-fuchsia-700 py-2 px-6 font-medium uppercase hover:bg-fuchsia-700 hover:text-white hover:transition hover:duration-500"
              }`}
              onClick={() => navigateService()}
              disabled={!selected.length}
            >
              Checkout &nbsp;
              <FontAwesomeIcon
                icon={faShoppingBag}
                style={{ fontSize: "16px" }}
              ></FontAwesomeIcon>
            </button>
          </div>
        </div>
      </div>

      <h1 className="text-4xl mt-16 mb-6">Question Answer Section:</h1>
      <form
        onSubmit={handleSubmit}
        className="flex justify-start items-center gap-6 flex-wrap"
      >
        <input
          type="text"
          name="question"
          id="question"
          placeholder="Ask your question..."
          required
          className="px-3 py-2 bg-white border border-fuchsia-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400 w-full sm:w-2/3 "
        />

        <button
          type="submit"
          className="border font-medium uppercase border-fuchsia-300 hover:bg-fuchsia-700 hover:text-white hover:transition hover:duration-500 
                py-2 px-4 rounded-full flex justify-end"
        >
          <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
        </button>
      </form>

      {found?.queries?.length > 0 ? (
        found?.queries?.map((query) => (
          <div key={query._id}>
            {/* Question  */}
            <div className="bg-slate-200 px-4 py-2 mt-4 border rounded ">
              <div className="flex gap-4 items-end">
                <p className="font-bold text-sm"> {query?.userEmail} </p>
                <p className="text-xs"> {query?.createdAt?.slice(0, 10)} </p>
                <p className="text-xs"> {query?.createdAt?.slice(11, 16)} </p>
              </div>
              <p className="mt-1 text-lg"> {query?.question} </p>
            </div>

            {/* Reply  */}
            <small
              className="hover:cursor-pointer text-blue-400"
              onClick={() => handleOpen(query._id)}
            >
              Reply
              <FontAwesomeIcon
                icon={faReply}
                className="ml-2 align-sub"
              ></FontAwesomeIcon>
            </small>
            {query?.reply?.map((reply, i) => (
              <div
                className="mt-4 flex content-start items-center ml-10 gap-6"
                key={i}
              >
                <FontAwesomeIcon
                  icon={faReplyAll}
                  className="ml-2 align-sub rotate-180"
                ></FontAwesomeIcon>
                <div className="bg-slate-200 px-4 py-2 border rounded">
                  <div className="flex gap-4 items-end">
                    <p className="font-bold text-sm"> {reply?.userEmail} </p>
                    <p className="text-xs">
                      {" "}
                      {reply?.replyDate?.slice(0, 10)}{" "}
                    </p>
                    <p className="text-xs">
                      {reply?.replyDate?.slice(11, 16)}{" "}
                    </p>
                  </div>
                  <p> {reply?.answer} </p>
                </div>
              </div>
            ))}

            {open && queryId === query._id && (
              <form
                onSubmit={(e) => handleReply(e, query?._id)}
                className="flex justify-start items-center gap-6 flex-wrap ml-10 mt-4"
              >
                <input
                  type="text"
                  name="reply"
                  id="reply"
                  placeholder="Reply..."
                  required
                  className="px-3 py-2 bg-white border border-fuchsia-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400 w-full sm:w-2/3 "
                />

                <button
                  type="submit"
                  className="border font-medium uppercase border-fuchsia-300 hover:bg-fuchsia-700 hover:text-white hover:transition hover:duration-500 py-2 px-4 rounded-full flex justify-end"
                >
                  <FontAwesomeIcon icon={faArrowRight}></FontAwesomeIcon>
                </button>
              </form>
            )}
          </div>
        ))
      ) : (
        <p> No Questions Yet </p>
      )}
    </div>
  );
};

export default SinglePackage;
