import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home/HomePage";
import MenPage from "../pages/Men/MenPage";

import WatchDetaisPage from "../pages/WDetails/WatchDetaisPage";
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
      }

    ],
    },
]);
export default router;