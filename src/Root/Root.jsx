import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Routers from "../Routers/Routers";
import AddCoffee from "../Pages/AddCoffee";
import CoffeeViewInfo from "../Pages/CoffeeViewInfo";
import NotFound from "../Pages/NotFound";
import CoffeeUpdate from "../Pages/CoffeeUpdate";

const router = createBrowserRouter([
  {
    path: "/",
    Component: Routers,
    children: [
      {
        index: true,
        Component: Home,
      },
      {
        path: "/addCoffee",
        Component: AddCoffee,
      },
      {
        path: "/coffeeViewInfo/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: CoffeeViewInfo,
      },
      {
        path: "/coffeeUpdate/:id",
        loader: ({ params }) =>
          fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: CoffeeUpdate,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
