import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home/HomePage";
import MenPage from "../pages/Men/MenPage";
import DetailsHero from "../pages/WDetails/sections/DetailsHero";
const router= createBrowserRouter([
    {
      
    path: "/",          // ✅ should be "/" not ""
    element: <App />,
    children: [
      {
        index: true,    
        element: <HomePage />,
      },
       {
        path: "men",
        element: <MenPage />,
      },
      {
        path: "/watchDetails/:id",
        element: <DetailsHero/>
      }

    ],
    },
]);
export default router;