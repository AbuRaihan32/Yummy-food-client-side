import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import PrivateRouts from "../Components/PrivateRouts";
import AddFood from "../pages/AddFood/AddFood";


const router = createBrowserRouter([
    {
      path: "/",
      element: <Root></Root>,
      errorElement: <ErrorPage></ErrorPage>,
      children: [
        {
            path: '/',
            element: <Home></Home>,
        },
        {
          path: '/details/:id',
          element: <PrivateRouts><FoodDetails></FoodDetails></PrivateRouts>
        },
        {
          path: '/addFood',
          element: <PrivateRouts><AddFood></AddFood></PrivateRouts>
        },
        {
            path: '/login',
            element: <Login></Login>
        },
        {
            path: '/register',
            element: <Register></Register>
        }
      ]
    },
  ]);

export default router;