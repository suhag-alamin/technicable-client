import React from "react";
import { Link } from "react-router-dom";
import {
  AiOutlineArrowRight,
  AiOutlineHeart,
  AiFillHeart,
} from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";

const BlogCard = ({ blog }) => {
  return (
    <div>
      <div class="p-4">
        <div class="h-full border-2 border-technibleTeriary border-opacity-10 shadow-sm rounded-lg overflow-hidden">
          <img
            class="lg:h-48 md:h-36 w-full object-cover object-center"
            src={blog.img}
            alt={blog.title}
          />
          <div class="p-6">
            <h2 class="tracking-widest text-xs title-font font-bold text-technibleTeriary mb-1">
              {blog.category}
            </h2>
            <h1 class="title-font text-lg font-medium text-techniblePrimary mb-3">
              {blog.title.padEnd(63, " ,,")}
            </h1>
            <p class="leading-relaxed text-technibleSecondary mb-3">
              {blog.description.slice(0, 100)} ...
            </p>
            <div class="flex items-center flex-wrap ">
              <Link
                to="/"
                class="text-technibleSecondary inline-flex items-center md:mb-2 lg:mb-0"
              >
                Learn More
                <AiOutlineArrowRight className="ml-2 text-techniblePrimary" />
              </Link>
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <AiOutlineHeart className="text-technibleRed mx-1" />
                1.2K
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <FaRegComment className="text-techniblePrimary mx-1" />6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
