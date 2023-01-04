import axios from "axios";
import { getBlog } from "../../actions/blogActions";

const getBlogData = () => {
  return async (dispatch) => {
    const res = await axios.get(
      "https://technicable-server.onrender.com/blogs"
    );
    const data = await res.data;
    if (data.length) {
      dispatch(getBlog(data));
    }
  };
};
export default getBlogData;
