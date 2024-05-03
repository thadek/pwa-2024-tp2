import { ROUTES} from "./../const/routes"
import {
    createBrowserRouter,
} from "react-router-dom";

import { Home, ChampionDetail,Landing } from "./";
import { NotFoundPage } from "./Error/404";


export const router = createBrowserRouter([
    {
        path: ROUTES.landing,
        element: <Landing/>,
    },
    {
        path: ROUTES.detail + ":id", //Ruta dinamica
        element: <ChampionDetail/>,
    },
    {
        path: ROUTES.home,
        element: <Home/>
    },
    {
        path:"*",
        element: <NotFoundPage/>
    },
    
]);