import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Routers from "../Routers/Routers";
import AddCoffee from "../Pages/AddCoffee";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Routers,
    children: [
      {
        index: true, Component: Home,
      },
      {
        path: '/addCoffee',
        Component: AddCoffee
      }
    ]
  },
  
]);

export default router;
