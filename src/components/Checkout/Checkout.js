import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useLocation, useNavigate, useParams } from "react-router-dom";
import { toast, ToastContainer } from "react-toastify";
import { useCreateBookingMutation } from "../../features/booking/bookingApi";
import { useGetPackageByIdQuery } from "../../features/package/packageApi";
import Loading from "../Loading/Loading";

const Checkout = () => {
  const { packageId } = useParams();
  const { data, isLoading: getPackageIdLoading } =
    useGetPackageByIdQuery(packageId);
  const [createBooking, { isLoading, isError, isSuccess, error }] =
    useCreateBookingMutation();
  const { id: userId, email } = useSelector((state) => state.auth);
  const found = data?.data;
  const location = useLocation();
  const navigate = useNavigate();
  console.log(userId, email);

  useEffect(() => {
    if (isSuccess) {
      toast.success("Booking Successfull!!!.Thank You For The Booking", {
        theme: "dark",
      });
      navigate("/");
    }
    if (isError) {
      toast.success(error?.data?.error, {
        theme: "dark",
      });
    }
  }, [isSuccess, isError, error]);

  const handleSubmit = (e) => {
    e.preventDefault();
    const booking = {
      packageId,
      bookingDate: location.state.selected,
      userId,
      name: e.target.name.value,
      phone: e.target.phone.value,
      address: e.target.address.value,
    };
    createBooking(booking);
  };

  if (isLoading || getPackageIdLoading) {
    return <Loading />;
  }

  return (
    <>
      <div className="md:w-1/3 w-full mx-auto my-20">
        <div className="flex justify-around items-center">
          <img
            src={found?.img}
            alt=""
            className="w-[100px] h-[100px] border rounded-[50%] object-cover"
          />
          <p className="text-xl">{found?.title}</p>
          <p className="text-xl font-semibold">$ {found?.price}</p>
        </div>
        <div className="mt-7 mb-4">
          <div className="flex justify-around md:w-1/4 w-1/2 mx-auto">
            <p>SubTotal:</p>
            <p>$ {found?.price}</p>
          </div>
        </div>

        <form
          onSubmit={handleSubmit}
          className="flex flex-col leading-10 max-w-full px-2"
        >
          <input
            type="text"
            name="name"
            id="name"
            placeholder="Name"
            required
            className="px-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400 mb-3"
          />

          <input
            type="email"
            name="email"
            id="email"
            disabled
            placeholder="Email"
            value={email}
            className="px-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400 mb-3"
            required
          />

          <input
            type="number"
            name="phone"
            id="phone"
            placeholder="Phome Number"
            required
            className="px-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400 mb-3"
          />

          <textarea
            rows="3"
            cols="2"
            placeholder="Address Here..."
            name="address"
            className="px-3 bg-white border border-slate-300 rounded-md shadow-sm placeholder-slate-400 focus:outline-fuchsia-400 "
          />

          <button
            type="submit"
            className="border font-medium uppercase bg-fuchsia-300 hover:bg-fuchsia-700 hover:text-white hover:transition hover:duration-500 mt-6 text-base py-2"
          >
            {" "}
            Place Order{" "}
          </button>
        </form>
      </div>

      <ToastContainer />
    </>
  );
};

export default Checkout;
