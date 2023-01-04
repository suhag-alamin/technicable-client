import React from "react";
import { useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard";

const ReadingHistory = () => {
  const readingHistory = useSelector((state) => state.blog.readingHistory);
  let content;
  if (readingHistory.length) {
    content = (
      <div className="grid md:grid-cols-2 xl:grid-cols-3">
        {readingHistory
          .sort((a, b) => a.historyCount - b.historyCount)
          .map((blog) => (
            <BlogCard key={blog._id} blog={blog} />
          ))}
      </div>
    );
  }
  return <div>{content}</div>;
};

export default ReadingHistory;
