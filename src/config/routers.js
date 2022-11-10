import { useRoutes } from "react-router-dom";
import Home from "../pages/Home"

export default function Router() {
    return useRoutes([
        {
            path: '/',
            children: [
                {
                    path: '/', element: <Home />
                }
            ]
        }
    ])
}