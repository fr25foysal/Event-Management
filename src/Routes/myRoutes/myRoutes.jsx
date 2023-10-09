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

const myRoutes = createBrowserRouter([
    {
        path : '/',
        element: <RootLayout></RootLayout>,
        children: [
            {
                path : '/',
                element: <Home></Home>,
                loader: ()=> fetch('/services.json')
            },
            {
                path: '/services',
                element: <Services></Services>
            },
            {
                path: '/about-us' ,
                element: <AboutUs></AboutUs>
            },
            {
                path : '/dashboard',
                element: <Dashboard></Dashboard>
            },
            {
                path : '/managements',
                element: <Managemants></Managemants>
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
                element: <SingleService></SingleService>
            }
           
        ]
    }
])

export default myRoutes;