import axios from "axios";
import { addBlog } from "../../actions/blogActions";

const addBlogData = (blog) => {
  return async (dispatch) => {
    const res = await axios.post(
      "https://technicable-server.onrender.com/blog",
      blog
    );
    const data = await res.data;
    if (data.acknowledged === true) {
      alert("Blog added successfully");
      dispatch(
        addBlog({
          _id: data.insertedId,
          ...blog,
        })
      );
    }
  };
};

export default addBlogData;
