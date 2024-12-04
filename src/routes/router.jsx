import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllReviews from "../pages/AllReviews";
import AddReview from "../pages/AddReview";
import MyReviews from "../pages/MyReviews";
import GameWatchList from "../pages/GameWatchList";
import PrivateRoute from "./PrivateRoute";
import Login from "../pages/Login";
import Register from "../pages/Register";

const router = createBrowserRouter([
    {
        path: "/",
        element: <MainLayout></MainLayout>,
        children: [
            {
                path: "/",
                element: <Home></Home>
            },
            {
                path: "/allReviews",
                element: <AllReviews></AllReviews>
            },
            {
                path: "/addReview",
                element: <PrivateRoute><AddReview></AddReview></PrivateRoute>
            },
            {
                path: "/myReviews",
                element: <PrivateRoute><MyReviews></MyReviews></PrivateRoute>
            },
            {
                path: "/gameWatchList",
                element: <PrivateRoute><GameWatchList></GameWatchList></PrivateRoute>
            },
            {
                path: "/login",
                element: <Login></Login>
            },
            {
                path: "/register",
                element: <Register></Register>
            },
        ],
    },
]);

export default router;