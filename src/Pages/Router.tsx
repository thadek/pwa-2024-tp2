import {
    createBrowserRouter,
} from "react-router-dom";

import { Home, ChampionDetail } from "./";

export const router = createBrowserRouter([
    {
        path: "/",
        element: <Home />,
    },
    {
        path: "/champion/:id",
        element: <ChampionDetail />,
    },
    {
        path:"*",
        element: <h1>404 Not Found</h1>
    }
]);