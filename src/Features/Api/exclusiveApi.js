import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const exclusiveApi = createApi({
  reducerPath: "exclusive",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),
  tagTypes: ["banner"],
  endpoints: (builder) => ({
    UploadBanner: builder.mutation({
      query: (data) => ({
        url: `banner`,
        method: "POST",
        body: data,
      }),
      invalidatesTags: ["banner"],
    }),
    GetAllBanner: builder.query({
      query: () => `banner`,
      providesTags: ["banner"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const { useUploadBannerMutation, useGetAllBannerQuery } = exclusiveApi;
