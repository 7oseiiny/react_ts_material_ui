import { createBrowserRouter } from "react-router-dom";
import Layout from "../components/Layout";
import Home from "../components/home";
import Aboutus from "../components/aboutus";
import Products from "../components/Products";

export const router =createBrowserRouter(
    [
        {
            path:"",
            element:<Layout/>,
            children:[
                {
                    index:true,
                    element:<Home/>
                },
                {
                    path:'aboutus',
                    element:<Aboutus/>
                },
                {
                    path:'products',
                    element:<Products/>
                },
            ]
            
        }
    ]
)