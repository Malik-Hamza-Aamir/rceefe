import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";
import { FromRegistration } from "@/lib/types";

export const usersApi = createApi({
  reducerPath: "usersapi",
  baseQuery: fetchBaseQuery({ baseUrl: process.env.NEXT_PUBLIC_API_URL }),
  tagTypes: ["user"],
  endpoints: (builder) => ({
    registerUser: builder.mutation({
      query: (user: FromRegistration) => ({
        url: "/user/registration",
        method: "POST",
        body: user,
      }),
    }),

    // getChats: builder.query<Chat[], void>({
    //   query: () => "/chat",
    //   providesTags: ["user"],
    // }),

    // getMessages: builder.mutation({
    //   query: (id: number) => ({
    //     url: `/chat/${id}`,
    //     method: "GET",
    //   }),
    //   invalidatesTags: ["user"],
    // }),

    // deleteChat: builder.mutation({
    //   query: (id) => ({
    //     url: `/chat/${id}`,
    //     method: "DELETE",
    //     body: id,
    //   }),
    //   invalidatesTags: ["user"],
    // }),

    // deleteAllChats: builder.mutation({
    //   query: () => ({
    //     url: "/chat",
    //     method: "DELETE",
    //   }),
    //   invalidatesTags: ["user"],
    // })
  }),
});

export const { useRegisterUserMutation } = usersApi;
