import axios from "axios";
import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import React from "react";
import { AiOutlineArrowRight, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { toggleTagFilter } from "../../redux/actions/filterActions";

const SingleBlog = () => {
  const dispatch = useDispatch();
  const { id } = useParams();
  const [blog, setBlog] = useState({});

  useEffect(() => {
    const loadBlog = async () => {
      const res = await axios.get(
        `https://technicable-server.onrender.com/blogs/${id}`
      );
      setBlog(res.data);
    };
    loadBlog();
  }, [id]);
  return (
    <div className="py-4">
      <div class="h-full ">
        <img
          class="lg:h-96 md:h-60 w-full object-cover object-center"
          src={blog?.img}
          alt={blog?.title}
        />
        <div class="p-6">
          <h2 class="tracking-widest text-xs title-font font-bold text-technicableTeriary mb-1">
            {blog?.category}
          </h2>
          <h1 class="title-font text-lg font-medium text-technicablePrimary mb-3">
            {blog?.title}
          </h1>
          {/* author  */}
          <div class="flex items-center flex-wrap ">
            <h4 class="text-technicableSecondary inline-flex items-center md:mb-2 lg:mb-3">
              Author: {blog?.author}
            </h4>
          </div>
          <p class="leading-relaxed text-technicableSecondary mb-3">
            {blog?.description}
          </p>
          <div className="flex flex-wrap gap-2 my-2">
            {blog?.tags?.map((tag) => (
              <button
                key={tag}
                class="text-technicableSecondary bg-technicableTeriary bg-opacity-10 border border-technicableTeriary border-opacity-20 rounded-full py-1 px-3 text-xs "
              >
                {tag}
              </button>
            ))}
          </div>
          <div class="flex items-center flex-wrap ">
            <a
              href={blog?.creditLink}
              target="_blank"
              rel="noreferrer"
              class="text-technicableSecondary inline-flex items-center md:mb-2 lg:mb-0"
            >
              Main Credit
              <AiOutlineArrowRight className="ml-2 text-technicablePrimary" />
            </a>
            <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
              <AiOutlineHeart className="text-technicableRed mx-1" />
              {blog?.likes}
            </span>
            <span class="text-gray-400 inline-flex items-center leading-none text-sm">
              <FaRegComment className="text-technicablePrimary mx-1" />6
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SingleBlog;
