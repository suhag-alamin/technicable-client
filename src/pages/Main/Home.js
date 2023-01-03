import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import getBlogData from "../../redux/thunk/getBlogData";

const Home = () => {
  const dispatch = useDispatch();
  const blogs = useSelector((state) => state.blog.blogs);

  useEffect(() => {
    dispatch(getBlogData());
  }, [dispatch]);
  return <div>This is home{blogs.length}</div>;
};

export default Home;
