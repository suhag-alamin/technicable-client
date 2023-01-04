import axios from "axios";
import { editBlog } from "../../actions/blogActions";

const editBlogData = (_id, blog) => {
  return async (dispatch, getState) => {
    const res = await axios.put(
      `https://technicable-server.onrender.com/blog/${_id}`,
      blog
    );
    const data = await res.data;
    if (data.modifiedCount > 0) {
      dispatch(editBlog(blog));
      alert("Blog edited successfully");
    }
  };
};

export default editBlogData;
