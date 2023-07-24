import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./components/home";
import ThreeD from "./components/3d";
import TwoD from "./components/2d";
import Audio from "./components/audio";
import Animation from "./components/animation";
import Tools from "./components/tools";
import AssetDetails from "./components/tools";
import {
  BrowserRouter,
  createBrowserRouter,
  RouterProvider,
  useRoutes
} from "react-router-dom";
import App from "./App";
const rootElement = document.getElementById("root")!;
const root = ReactDOM.createRoot(rootElement);
// const routes = useRoutes([
//   {
//     path: "/",
//     element: <Home />
//   },
//   {
//     path: "/3d",
//     element: <ThreeD />,
//     children: [{ path: ":id", element: <AssetDetails /> }]
//   },
//   {
//     path: "/2d",
//     element: <TwoD />
//   },
//   {
//     path: "/audio",
//     element: <Audio />
//   },
//   {
//     path: "/animation",
//     element: <Animation />
//   },
//   {
//     path: "/audio",
//     element: <Audio />
//   },
//   {
//     path: "/tool",
//     element: <Tools />
//   }
// ]);
// const router = createBrowserRouter([]);

root.render(
  <React.StrictMode>
    <BrowserRouter>
      <App />
    </BrowserRouter>
  </React.StrictMode>
);
