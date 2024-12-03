import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import Home from "../pages/Home";
import AllReviews from "../pages/AllReviews";
import AddReview from "../pages/AddReview";
import MyReviews from "../pages/MyReviews";
import GameWatchList from "../pages/GameWatchList";

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
                element: <AddReview></AddReview>
            },
            {
                path: "/myReviews",
                element: <MyReviews></MyReviews>
            },
            {
                path: "/gameWatchList",
                element: <GameWatchList></GameWatchList>
            },
        ],
    },
]);

export default router;