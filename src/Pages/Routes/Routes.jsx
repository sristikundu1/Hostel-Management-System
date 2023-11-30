import { createBrowserRouter } from "react-router-dom";
import MainLayOut from "../../LayOut/MainLayOut";
import Home from "../Home/Home";
import Login from "../Login/Login";
import SignUp from "../SignUp/SignUp";
import MealDetails from "../MealDetails/MealDetails";
import CheckOut from "../CheckOut/CheckOut";
import AllMeal from "../AllMeal/AllMeal";
import DashBoard from "../../LayOut/DashBoard";
import Profile from "../DashBoard/Profile/Profile";
import MyReview from "../DashBoard/MyReview/MyReview";
import RequestedMeal from "../DashBoard/RequestedMeal/RequestedMeal";
import ManageUsers from "../DashBoard/ManageUsers/ManageUsers";
import AddItem from "../DashBoard/AddItem/AddItem";
import ErrorPage from "../ErrorPage/ErrorPage";
import AdminProfile from "../DashBoard/AdminProfile/AdminProfile";
import AdminRoute from "./AdminRoute";
import AllMeals from "../DashBoard/All Meals/AllMeals";
import UpcomingMeal from "../DashBoard/UpcomingMeal/UpcomingMeal";


const Routes = createBrowserRouter([
    {
      path:"/",
      element:<MainLayOut></MainLayOut>,
      errorElement:<ErrorPage></ErrorPage>,
      children:[
        {
            path:"/",
            element:<Home></Home>
           
        },
        {
          path:"/allmeal",
          element:<AllMeal></AllMeal>
        },
        {
          path:"/login",
          element:<Login></Login>
        },
        {
          path:"/signup",
          element:<SignUp></SignUp>
        },
        {
          path:"/mealdetail/:id",
          element:<MealDetails></MealDetails>
        },
        {
          path:"/checkout/:id",
          element:<CheckOut></CheckOut>
        }
      ]
    },
    {
      path:"dashboard",
      element:<DashBoard></DashBoard>,
      children:[
        {
          path:"profile",
          element:<Profile></Profile>
        },
        {
          path:"myreview",
          element:<MyReview></MyReview>
        },
        {
          path:"requestedmeal",
          element:<RequestedMeal></RequestedMeal>
        },

        // admin routes 

        {
          path:"adminprofile",
          element:<AdminRoute><AdminProfile></AdminProfile></AdminRoute>
        },

        {
          path:"users",
          element:<AdminRoute><ManageUsers></ManageUsers></AdminRoute>
        },
        {
          path:"addmeal",
          element:<AdminRoute><AddItem></AddItem></AdminRoute>
        },
        {
           path:"allmeal",
           element:<AdminRoute><AllMeals></AllMeals></AdminRoute>
        },
        {
          path:"upcoming",
          element:<AdminRoute><UpcomingMeal></UpcomingMeal></AdminRoute>
        }
      ]
    }
])

export default Routes;