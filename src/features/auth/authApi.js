import apiSlice from "../api/apiSlice";
import { getUser } from "./authSlice";

const authApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        register: builder.mutation({
            query: (data) => ({
                method: 'POST',
                url: '/users/register',
                body: data
            }),
            async onQueryStarted(data, { dispatch, queryFulfilled }) {
                try {
                    const res = await queryFulfilled;
                    dispatch(getUser(data?.email))
                } catch (error) {
                    //nothing right now
                }
            }
        }),
        getUserById: builder.query({
            query: (id) => ({
                url: `/user/${id}`,
            }),
        }),
    })
});

export const { useRegisterMutation, useGetUserByIdQuery } = authApi;