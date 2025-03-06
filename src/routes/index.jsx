import { createBrowserRouter, RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home";
import WriterPage from "../pages/WriterPage";
import Signup from "../pages/Signup/signup";
import Login from "../pages/Login";
import Verify from "../pages/verify";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      { index: true, element: <HomePage /> },
      { path: "writers/:id", element: <WriterPage /> },
    ],
  },
  { path: "/signup", element: <Signup /> },
  {path:"/login",element:<Login/>},
  {path:"/verify",element:<Verify/>}
]);

export default function AppRoutes() {
  return <RouterProvider router={router} />;
}
