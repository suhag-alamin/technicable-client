import React from "react";
import { AiFillDelete } from "react-icons/ai";
import { FaPen } from "react-icons/fa";
import { useDispatch, useSelector } from "react-redux";

const BlogList = () => {
  const blogs = useSelector((state) => state.blog.blogs);
  const dispatch = useDispatch();
  return (
    <div>
      <div class="flex flex-col justify-center items-center h-full w-full ">
        <div class="w-full max-w-7xl mx-auto rounded-lg bg-technicableWhite shadow-lg border border-technicablePrimary">
          <header class="px-5 py-4 border-b-2 border-technicableTeriary">
            <div class="font-semibold text-gray-800">All Blogs</div>
          </header>

          <div class="overflow-x-auto p-3">
            <table class="table-auto w-full">
              <thead class="text-xs font-semibold uppercase text-technicableSecondary bg-technicablePrimary bg-opacity-30">
                <tr>
                  <th class="p-2">
                    <h3 class="font-semibold text-left">Blog Name</h3>
                  </th>
                  <th class="p-2">
                    <h3 class="font-semibold text-left">Author</h3>
                  </th>
                  <th class="p-2">
                    <h3 class="font-semibold text-left">Category</h3>
                  </th>
                  <th class="p-2">
                    <h3 class="font-semibold text-left">Credit</h3>
                  </th>
                  <th class="p-2">
                    <h3 class="font-semibold text-center">Action</h3>
                  </th>
                </tr>
              </thead>

              <tbody class="text-sm divide-y divide-technicablePrimary">
                {blogs?.map(({ title, author, creditLink, category, _id }) => (
                  <tr>
                    <td class="p-2">
                      <h4 class="font-bold text-technicablePrimary text-sm">
                        {title?.slice(0, 20)}...
                      </h4>
                    </td>
                    <td class="p-2">
                      <h5 class="text-left capitalize text-technicableTeriary text-sm">
                        {author}
                      </h5>
                    </td>
                    <td class="p-2">
                      <p class="text-left text-technicableSecondary">
                        {category}
                      </p>
                    </td>
                    <td class="p-2">
                      <div class="text-left font-medium text-technicableRed">
                        <a
                          href={creditLink}
                          target="_blank"
                          rel="noopener noreferrer"
                        >
                          Credit
                        </a>
                      </div>
                    </td>
                    <td class="p-2">
                      <div class="flex justify-center items-center gap-2">
                        <button className="bg-technicablePrimary text-technicableWhite w-8 h-8 p-2 rounded-lg text-center flex justify-center items-center text-2xl ">
                          <FaPen />
                        </button>
                        <button className="bg-technicableRed text-technicableWhite w-8 h-8 p-2 rounded-lg text-center flex justify-center items-center text-2xl ">
                          <AiFillDelete />
                        </button>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogList;
