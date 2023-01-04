import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard";
import {
  clearTagFilter,
  toggleFilter,
} from "../../redux/actions/filterActions";

import { HiXMark } from "react-icons/hi2";
import getBlogData from "../../redux/thunk/blogs/getBlogData";

const Home = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);
  const uploadFilter = useSelector((state) => state.filter.uploadFilter);
  const tagFilter = useSelector((state) => state.filter.tagFilter);

  useEffect(() => {
    dispatch(getBlogData());
  }, [dispatch]);

  let content;

  if (blogs.length > 0) {
    content = (
      <div className="grid md:grid-cols-2 xl:grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    );
  }
  if (blogs.length === 0) {
    content = (
      <div className="py-4">
        <p className="text-technicableRed text-2xl text-center">
          No Blog Found
        </p>
      </div>
    );
  }
  if (blogs.length > 0 && uploadFilter !== "all") {
    content = (
      <div className="grid md:grid-cols-2 xl:grid-cols-3">
        {blogs
          .sort((a, b) => {
            if (uploadFilter === "sort-by-last-upload") {
              return new Date(b.createdDate) - new Date(a.createdDate);
            }
            if (uploadFilter === "sort-by-first-upload") {
              return new Date(a.createdDate) - new Date(b.createdDate);
            } else {
              return new Date(b.createdDate) - new Date(a.createdDate);
            }
          })
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      </div>
    );
  }
  if (blogs.length > 0 && tagFilter) {
    content = (
      <>
        <div className="flex justify-center items-center gap-2">
          <p className="text-technicablePrimary text-xl text-center">
            Shows Blogs with tag: {tagFilter}
          </p>
          <button
            onClick={() => dispatch(clearTagFilter())}
            className="flex items-center gap-1 bg-technicableRed border text-technicableWhite border-technicableRed px-2 py-1 rounded"
          >
            <HiXMark /> Clear Filter
          </button>
        </div>
        <div className="grid md:grid-cols-2 xl:grid-cols-3">
          {blogs
            .filter((blog) => {
              if (tagFilter) {
                return blog.tags.includes(tagFilter);
              }
              return blog;
            })
            .map((blog) => (
              <BlogCard key={blog._id} blog={blog} />
            ))}
        </div>
      </>
    );
  }

  return (
    <div>
      <div className="mb-10 flex justify-end gap-5">
        <select
          className="border border-technicablePrimary p-2 rounded-md outline-none text-base"
          name=""
          id=""
          onChange={(e) => dispatch(toggleFilter(e.target.value))}
        >
          <option value="all" selected>
            Sort Blog
          </option>
          <option
            value="sort-by-last-upload
          "
          >
            Sort by Last Upload
          </option>
          <option value="sort-by-first-upload">Sort by First Upload</option>
        </select>
      </div>

      {content}
    </div>
  );
};

export default Home;
