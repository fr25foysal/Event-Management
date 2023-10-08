import { Outlet } from "react-router-dom";
import Navbar from "../NavBar/Navbar";

const RootLayout = () => {
    return (
        <div className="font-poppins">
            
            <Navbar></Navbar>
            <Outlet></Outlet>
        </div>
    );
};

export default RootLayout;