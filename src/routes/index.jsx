import { createBrowserRouter,RouterProvider } from "react-router-dom";
import MainLayout from "../layouts/MainLayout";
import HomePage from "../pages/Home";
import WriterPage from "../pages/WriterPage";

const router = createBrowserRouter([
    {
        path:"/",
        element:<MainLayout/>,
        children:[
            {index:true,element:<HomePage/>},
            {path:"writers/:id",element:<WriterPage/>}
        ]
    }
])

export default function AppRoutes(){
    return <RouterProvider router={router}/>
}