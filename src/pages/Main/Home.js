import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard";
import getBlogData from "../../redux/thunk/getBlogData";

const Home = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);

  useEffect(() => {
    dispatch(getBlogData());
  }, [dispatch]);
  return (
    <div>
      <div className="grid grid-cols-3">
        {blogs.map((blog) => (
          <BlogCard key={blog._id} blog={blog} />
        ))}
      </div>
    </div>
  );
};

export default Home;
