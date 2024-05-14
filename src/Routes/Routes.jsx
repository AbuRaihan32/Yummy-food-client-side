import { createBrowserRouter } from "react-router-dom";
import Root from "../layout/Root";
import Home from "../pages/Home/Home";
import Login from "../pages/Login/Login";
import Register from "../pages/Register/Register";
import ErrorPage from "../pages/ErrorPage/ErrorPage";
import FoodDetails from "../pages/FoodDetails/FoodDetails";
import PrivateRouts from "../Components/PrivateRouts";
import AddFood from "../pages/AddFood/AddFood";
import AvailableFoods from "../pages/AvailableFoods/AvailableFoods";
import ManageFood from "../pages/ManageFood/ManageFood";
import MyRequest from "../pages/MyRequest/MyRequest";


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
          path: '/availableFoods',
          element: <AvailableFoods></AvailableFoods>
        },
        {
          path: '/manageFoods',
          element: <PrivateRouts><ManageFood></ManageFood></PrivateRouts>
        },
        {
          path: '/myRequest',
          element: <PrivateRouts><MyRequest></MyRequest></PrivateRouts>
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