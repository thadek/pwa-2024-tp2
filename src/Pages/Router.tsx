import { ROUTES} from "./../const/routes"
import {
    createBrowserRouter,
} from "react-router-dom";

import { Home, ChampionDetail } from "./";

export const router = createBrowserRouter([
    {
        path: ROUTES.home,
        element: <Home />,
    },
    {
        path: ROUTES.detail + ":id", //Ruta dinamica
        element: <ChampionDetail/>,
    },
    {
        path:"*",
        element: <h1>404 Not Found</h1>
    }
]);