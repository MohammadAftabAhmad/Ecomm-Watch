import { createBrowserRouter } from "react-router-dom";
import { Suspense, lazy } from "react";
import App from "../App";

// Lazy load the components
const HomePage = lazy(() => import("../pages/Home/HomePage"));
const MenPage = lazy(() => import("../pages/Men/MenPage"));
const WatchDetailsPage = lazy(
  () => import("../pages/WDetails/WatchDetaisPage")
);
const WomensPage = lazy(() => import("../pages/Women/WomensPage"));
const Cart = lazy(() => import("../pages/cart/Cart"));
const SlickPage = lazy(() => import("../pages/slick/SlickPage"));
const BoldPage = lazy(() => import("../pages/bold/BoldPage"));
const CouplePage = lazy(() => import("../pages/couple/CouplePage"));

const router = createBrowserRouter([
  {
    path: "/",
    element: (
      <Suspense>
        <App />
      </Suspense>
    ),
    children: [
      {
        index: true,
        element: (
          <Suspense>
            <HomePage />
          </Suspense>
        ),
      },
      {
        path: "men",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <MenPage />
          </Suspense>
        ),
      },
      {
        path: "/:gender/:id",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <WatchDetailsPage />
          </Suspense>
        ),
      },
      {
        path: "women",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <WomensPage />
          </Suspense>
        ),
      },
      {
        path: "cart",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <Cart />
          </Suspense>
        ),
      },
      {
        path: "slick",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <SlickPage />
          </Suspense>
        ),
      },
      {
        path: "bold",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <BoldPage />
          </Suspense>
        ),
      },
      {
        path: "couples",
        element: (
          <Suspense fallback={<div>Loading...</div>}>
            <CouplePage />
          </Suspense>
        ),
      },
    ],
  },
]);

export default router;
