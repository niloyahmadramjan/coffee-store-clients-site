import { createBrowserRouter } from "react-router";
import Home from "../Pages/Home";
import Routers from "../Routers/Routers";
import AddCoffee from "../Pages/AddCoffee";
import CoffeeViewInfo from "../Pages/CoffeeViewInfo";

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
      },
      {
        path: '/coffeeViewInfo/:id',
        loader: ({params})=> fetch(`http://localhost:3000/coffees/${params.id}`),
        Component: CoffeeViewInfo,
      }
    ]
  },
  
]);

export default router;
