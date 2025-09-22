import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home/HomePage";
import MenPage from "../pages/Men/MenPage";

import WatchDetaisPage from "../pages/WDetails/WatchDetaisPage";

import WomensPage from "../pages/Women/WomensPage";
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
        path: "/:gender/:id",
        element: <WatchDetaisPage/>
      },
      {
        path: "women",
        element: <WomensPage/>,
      },

    ],
    },
]);
export default router;