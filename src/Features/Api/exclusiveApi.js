import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

// Define a service using a base URL and expected endpoints
export const exclusiveApi = createApi({
  reducerPath: "exclusive",
  baseQuery: fetchBaseQuery({ baseUrl: import.meta.env.VITE_BACKEND_URL }),

  tagTypes: ["banner", "category"],
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
    UpdateBanner: builder.mutation({
      query: ({ data, id }) => ({
        url: `banner/${id}`,
        method: "PUT",
        body: data,
      }),
      invalidatesTags: ["banner"],
    }),

    uploadCategory: builder.mutation({
      query: (data) => ({
        url: `category`,
        method: "post",
        body: data,
      }),
      invalidatesTags: ["category"],
    }),
    GetAllCategory: builder.query({
      query: () => `category`,
      providesTags: ["category"],
    }),
    DeleteCategory: builder.mutation({
      query: (id) => ({
        url: `category/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["category"],
    }),
    GetSingleCategory: builder.query({
      query: (id) => `category/${id}`,
      providesTags: ["category"],
    }),
    updateCategory: builder.mutation({
      query: (data) => ({
        url: `category/${data.id}`,
        method: "put",
        body: {
          name: data.name,
          description: data.description,
        },
      }),
      invalidatesTags: ["category"],
    }),
  }),
});

// Export hooks for usage in functional components, which are
// auto-generated based on the defined endpoints
export const {
  useUploadBannerMutation,
  useGetAllBannerQuery,
  useUpdateBannerMutation,
  useUploadCategoryMutation,
  useGetAllCategoryQuery,
  useDeleteCategoryMutation,
  useGetSingleCategoryQuery,
  useUpdateCategoryMutation,
} = exclusiveApi;
