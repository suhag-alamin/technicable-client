import { useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard";

const ReadingHistory = () => {
  const readingHistory = useSelector((state) => state.blog.readingHistory);
  let content;
  if (readingHistory.length > 0) {
    content = (
      <div className="grid md:grid-cols-2 xl:grid-cols-3">
        {readingHistory
          .sort((a, b) => a.historyCount - b.historyCount)
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      </div>
    );
  } else {
    content = (
      <div className="py-4">
        <p className="text-technicableRed text-2xl text-center">
          Your Reading History is Empty. Please Read Some Blogs.
        </p>
      </div>
    );
  }
  return <div>{content}</div>;
};

export default ReadingHistory;
