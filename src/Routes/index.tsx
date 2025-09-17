import { createBrowserRouter } from "react-router-dom";
import App from "../App";
import HomePage from "../pages/Home/HomePage";
import MenPage from "../pages/Men/MenPage";
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

    ],
    },
]);
export default router;