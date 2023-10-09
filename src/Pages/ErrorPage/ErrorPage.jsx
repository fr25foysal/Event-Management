import Footer from "../../Layouts/Footer/Footer";
import Navbar from "../../Layouts/NavBar/Navbar";

const ErrorPage = () => {
    return (
        <div>
            <Navbar></Navbar>
            <div className="w-full grid h-screen content-center">
                <h2 className="font-bold text-7xl  text-center">Something Went Wrong...</h2>
            </div>
            <Footer></Footer>
        </div>
    );
};

export default ErrorPage;