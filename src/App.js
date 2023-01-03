import { RouterProvider } from "react-router-dom";
import "./App.css";
import routes from "./routes/routes";
// new Date().toISOString();
// https://technicable-server.onrender.com

const App = () => {
  return (
    <div>
      <RouterProvider router={routes} />
    </div>
  );
};

export default App;
