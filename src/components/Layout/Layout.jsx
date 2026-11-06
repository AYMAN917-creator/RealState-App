import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import ScrollToTop from "../ScrollToTop/ScrollToTop";
import { Outlet } from "react-router-dom";

function Layout() {
    return (
        <>
            <ScrollToTop />
            <Navbar />
            <Outlet />
            <Footer />
        </>
    );
}

export default Layout;