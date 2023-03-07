import apiSlice from "../api/apiSlice";

const queryApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        postQuery: builder.mutation({
            query: (data) =>  ({
                method: 'POST',
                url: '/queries',
                body: data
            }),
            invalidatesTags: ['Question']
        }),
        getQueryById: builder.query({
            query: (id) => ({
                url: `/queries/${id}`,
            }),
        }),
        updateQuery: builder.mutation({
            query: ({ id, data }) =>  ({
                url: `/queries/${id}`,
                method: 'PATCH',
                body: data
            }),
            invalidatesTags: ['Question']
        })
    })
})

export const { usePostQueryMutation, useGetQueryByIdQuery, useUpdateQueryMutation } = queryApi;