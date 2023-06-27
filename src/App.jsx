
import { createBrowserRouter } from "react-router-dom";
import Main from "./Pages/Layout/Main";
import Home from "./Pages/Home";


export const router = createBrowserRouter([
  {
    path: "/",
    element: <Main/>,
    children : [
      {
        path: "/",
        element: <Home/>
      }
    ]
  },
]);