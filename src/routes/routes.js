import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error";
import Dashboard from "../layout/Dashboard/Dashboard";
import Main from "../layout/Main/Main";
import BlogList from "../pages/Dashboard/BlogList";
import Home from "../pages/Main/Home";
import ReadingHistory from "../pages/Main/ReadingHistory";
import SingleBlog from "../pages/Main/SingleBlog";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [
      { path: "/", element: <Home /> },
      {
        path: "/blog/:id",
        element: <SingleBlog />,
      },
      {
        path: "/reading-history",
        element: <ReadingHistory />,
      },
    ],
  },
  {
    path: "/dashboard",
    element: <Dashboard />,
    children: [{ path: "/dashboard", element: <BlogList /> }],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default routes;
