import { createBrowserRouter,RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {index:true,element:<HomePage/>}
        ]
    }
])

export default function AppRoutes(){
    return <RouterProvider router={router}/>
}