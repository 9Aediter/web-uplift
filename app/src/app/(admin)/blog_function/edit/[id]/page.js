"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import { useRouter } from "next/navigation";

const Edit = ({ params }) => {
  const [title, setTitle] = useState("");
  const [content, setContent] = useState("");
  const router = useRouter();
  const { id } = params;

  const fetchPost = async (id) => {
    try {
      const res = await axios.get(`/api/posts/${id}`);
      setTitle(res.data.title);
      setContent(res.data.content);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (id) {
      fetchPost(parseInt(id));
    }
  }, [id]);

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(`/api/posts/${id}`, {
        title,
        content,
      });
      router.push("/");
    } catch (error) {
      console.error(error);
    }
  };

  return (
    <div className="max-w-4xl px-4 py-8 mx-auto">
      <h1 className="mb-6 text-2xl font-semibold">Edit Post {id}</h1>
      <form onSubmit={handleSubmit} className="space-y-6">
        <div>
          <label
            htmlFor="title"
            className="block text-sm font-medium text-gray-700"
          >
            Title
          </label>
          <input
            type="text"
            name="title"
            id="title"
            required
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          />
        </div>
        <div>
          <label
            htmlFor="content"
            className="block text-sm font-medium text-gray-700"
          >
            Content
          </label>
          <textarea
            name="content"
            id="content"
            required
            rows={4}
            value={content}
            onChange={(e) => setContent(e.target.value)}
            className="block w-full mt-1 border-gray-300 rounded-md shadow-sm focus:border-indigo-500 focus:ring-indigo-500 sm:text-sm"
          ></textarea>
        </div>
        <div>
          <button
            type="submit"
            className="inline-flex justify-center px-4 py-2 text-sm font-medium text-white bg-indigo-600 border border-transparent rounded-md shadow-sm hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
          >
            Update
          </button>
        </div>
      </form>
    </div>
  );
};

export default Edit;