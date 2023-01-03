import { createBrowserRouter } from "react-router-dom";
import Error from "../components/Error";
import Main from "../layout/Main/Main";
import Home from "../pages/Main/Home";

const routes = createBrowserRouter([
  {
    path: "/",
    element: <Main />,
    children: [{ path: "/", element: <Home /> }],
  },
  {
    path: "*",
    element: <Error />,
  },
]);

export default routes;
