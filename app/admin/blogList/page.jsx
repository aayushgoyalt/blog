"use client";
import BlogTableItem from "@/components/adminComponents/BlogTableItem";
import axios from "axios";
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";

const page = () => {
  const [blogs, setBlogs] = useState([]);

  const fetchBlogs = async () => {
    const res = await axios.get("/api/blog");
    setBlogs(res.data.blogs);
  };

  const deleteBlog = async (mongoId) => {
    try {
      const res = await axios.delete("/api/blog", {
        params: {
          id: mongoId,
        },
      });
      toast.success(res.data.message);
    } catch (error) {
      console.log(error);
      toast.error("Failed to delete blog" + error);
    }
    fetchBlogs();
  };

  useEffect(() => {
    fetchBlogs();
  }, []); // Add params.id as a dependency

  return (
    <div className="flex-1 pt-5 px-5 sm:pt-12 sm:pl-16">
      <h1>All Blogs</h1>
      {/* {JSON.stringify(blogs)} */}
      <div className=" relative h-[80vh] max-w-[950px] overflow-x-auto mt-4 border border-gray-400 scrollbar-hide">
        <table className=" w-full text-sm text-gray-500">
          <thead className=" text-sm text-gray-700 text-left uppercase bg-gray-50">
            <tr>
              <th scope="col" className="hidden sm:block px-6 py-3">
                Author Name
              </th>
              <th scope="col" className=" px-6 py-3">
                Blog Title
              </th>
              <th scope="col" className=" px-6 py-3">
                Date
              </th>
              <th scope="col" className=" px-6 py-3">
                Action
              </th>
            </tr>
          </thead>
          <tbody>
            {blogs.map((blog, index) => {
              return (
                <BlogTableItem
                  deleteBlog={deleteBlog}
                  mongoId={blog._id}
                  date={blog.date}
                  author={blog.author}
                  authorImg={blog.authorImg}
                  title={blog.title}
                  key={index}
                />
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default page;
