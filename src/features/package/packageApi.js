import apiSlice from "../api/apiSlice";

const packageApi = apiSlice.injectEndpoints({
    endpoints: (builder) => ({
        addPackage: builder.mutation({
            query: (data) => ({
                method: 'POST',
                url: '/package',
                body: data
            })
        }),
        getPackages: builder.query({
            query: () => ({
                url: '/packages',
            })
        }),
        getPackageById: builder.query({
            query: (id) => ({
                url: `/package/${id}`,
            }),
            providesTags: ['Question']
        })
    })
})

export const { useAddPackageMutation, useGetPackagesQuery, useGetPackageByIdQuery } = packageApi;