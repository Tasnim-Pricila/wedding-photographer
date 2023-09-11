import apiSlice from "../api/apiSlice";

const bookingApi = apiSlice.injectEndpoints({
  endpoints: (builder) => ({
    createBooking: builder.mutation({
      query: (data) => ({
        method: "POST",
        url: "/booking",
        body: data,
      }),
      invalidatesTags: ["Booking"],
    }),
    getBookings: builder.query({
      query: () => ({
        url: "/booking",
      }),
      providesTags: ["Booking"],
    }),
    getBookingById: builder.query({
      query: (id) => ({
        url: `/booking/${id}`,
      }),
    }),
    getBookingByPackageId: builder.query({
      query: (packageId) => ({
        url: `/booking/package/${packageId}`,
      }),
    }),
    getBookingByUserId: builder.query({
      query: (userId) => ({
        url: `/booking/user/${userId}`,
      }),
      providesTags: ["Booking"],
    }),
    updateBooking: builder.mutation({
      query: ({ id, data }) => ({
        method: "PATCH",
        url: `/booking/${id}`,
        body: data,
      }),
    }),
  }),
});

export const {
  useCreateBookingMutation,
  useGetBookingByIdQuery,
  useGetBookingsQuery,
  useGetBookingByPackageIdQuery,
  useUpdateBookingMutation,
  useGetBookingByUserIdQuery,
} = bookingApi;
