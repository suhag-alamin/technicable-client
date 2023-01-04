import axios from "axios";
import { deleteBlog } from "../../actions/blogActions";

const deleteBlogData = (_id) => {
  const confirmDelete = window.confirm(
    "Are you sure you want to delete this blog?"
  );
  if (confirmDelete) {
    return async (dispatch, getState) => {
      const res = await axios.delete(
        `https://technicable-server.onrender.com/blog/${_id}`
      );
      const data = await res.data;
      if (data.acknowledged === true) {
        alert("Blog deleted successfully");
        dispatch(deleteBlog(_id));
      }
    };
  } else {
    return null;
  }
};

export default deleteBlogData;
