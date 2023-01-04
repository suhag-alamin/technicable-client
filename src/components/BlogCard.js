import { AiOutlineArrowRight, AiOutlineHeart } from "react-icons/ai";
import { FaRegComment } from "react-icons/fa";
import { useDispatch } from "react-redux";
import { Link } from "react-router-dom";
import { addToReadingHistory } from "../redux/actions/blogActions";
import { toggleTagFilter } from "../redux/actions/filterActions";

const BlogCard = ({ blog }) => {
  const dispatch = useDispatch();
  return (
    <div>
      <div class="p-4 h-full">
        <div class="h-full border-2 border-technicableTeriary border-opacity-10 shadow-sm rounded-lg overflow-hidden">
          <img
            class="lg:h-48 md:h-36 w-full object-cover object-center"
            src={blog.img}
            alt={blog.title}
          />
          <div class="p-6">
            {/* time to read  */}
            <div class="flex items-center flex-wrap ">
              <span class="text-xs text-technicableRed inline-flex items-center mb-2">
                {blog.timeToRead} min read
              </span>
            </div>
            <h2 class="tracking-widest text-xs title-font font-bold text-technicableTeriary mb-1">
              {blog.category}
            </h2>
            <h1 class="title-font text-lg font-medium text-technicablePrimary mb-3">
              {blog.title.padEnd(63, " ,,")}
            </h1>
            <p class="leading-relaxed text-technicableSecondary mb-3">
              {blog.description.slice(0, 100)} ...
            </p>
            <div className="flex flex-wrap gap-2 my-2">
              {blog.tags.map((tag) => (
                <button
                  onClick={() => dispatch(toggleTagFilter(tag))}
                  key={tag}
                  class="text-technicableSecondary bg-technicableTeriary bg-opacity-10 border border-technicableTeriary border-opacity-20 rounded-full py-1 px-3 text-xs "
                >
                  {tag}
                </button>
              ))}
            </div>
            <div class="flex items-center flex-wrap ">
              <Link
                to={`/blog/${blog._id}`}
                class="text-technicableSecondary inline-flex items-center md:mb-2 lg:mb-0"
                onClick={() => dispatch(addToReadingHistory(blog))}
              >
                Learn More
                <AiOutlineArrowRight className="ml-2 text-technicablePrimary" />
              </Link>
              <span class="text-gray-400 mr-3 inline-flex items-center lg:ml-auto md:ml-0 ml-auto leading-none text-sm pr-3 py-1 border-r-2 border-gray-200">
                <AiOutlineHeart className="text-technicableRed mx-1" />
                {blog.likes}
              </span>
              <span class="text-gray-400 inline-flex items-center leading-none text-sm">
                <FaRegComment className="text-technicablePrimary mx-1" />6
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogCard;
