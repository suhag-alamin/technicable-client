import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error";
import Main from "../layout/Main/Main";
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
    path: "*",
    element: <Error />,
  },
]);

export default routes;
