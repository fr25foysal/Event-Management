import { createBrowserRouter } from "react-router-dom";
import RootLayout from "../../Layouts/RootLayout/RootLayout";
import Home from "../../Pages/Home/Home";
import Services from "../../Pages/Services/Services";
import AboutUs from "../../Pages/AboutUs/AboutUs";
import Dashboard from "../../Pages/Dashboard/Dashboard";
import Managemants from "../../Pages/Managements/Managemants";
import Login from "../../Pages/Login/Login";
import Register from "../../Pages/Register/Register";
import SingleService from "../../Pages/SingleService/SingleService";
import PrivateRoute from "../PrivateRoute/PrivateRoute";
import ErrorPage from "../../Pages/ErrorPage/ErrorPage";

const myRoutes = createBrowserRouter([
    {
        path : '/',
        element: <RootLayout></RootLayout>,
        errorElement: <ErrorPage></ErrorPage>,
        children: [
            {
                path : '/',
                element: <Home></Home>,
                loader: ()=> fetch('/services.json')
            },
            {
                path: '/services',
                element: <Services></Services>,
                loader: ()=> fetch('/services.json')
            },
            {
                path: '/about-us' ,
                element: <AboutUs></AboutUs>
            },
            {
                path : '/dashboard',
                element: <PrivateRoute><Dashboard></Dashboard></PrivateRoute> 
            },
            {
                path : '/managements',
                element:<PrivateRoute><Managemants></Managemants></PrivateRoute>,
                
                
            },
            {
                path: '/login',
                element: <Login></Login>
            },
            {
                path: '/register',
                element: <Register></Register>
            },
            {
                path: 'services/:id',
                element: <PrivateRoute><SingleService></SingleService></PrivateRoute> ,
                loader: ()=> fetch('/services.json')
            }
           
        ]
    }
])

export default myRoutes;