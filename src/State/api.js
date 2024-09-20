import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react";

export const api =createApi({
    baseQuery:fetchBaseQuery({baseUrl:"http://localhost:5001"}),
    reducerPath:"adminApi",
    tagTypes:["Blogs","User"],
    headers: {
        'Content-Type': 'application/json',
        Accept: 'application/json',
        'Access-Control-Allow-Origin': 'http://localhost:5001',
    },
    endpoints:(build)=>({
        getBlogs: build.query({
            query: ()=>"/blog/readBlog",
            providesTags: ["Blogs"], 
        }),
        postBlogs: build.mutation({
            query: (blogdata)=>({
                url:"/blog/addBlog",
                method: "POST",
                body: blogdata,
            }),
            providesTags: ["Blogs"], 
        }),
    })
})

export const{
    useGetBlogsQuery,
    usePostBlogsMutation,
}=api;