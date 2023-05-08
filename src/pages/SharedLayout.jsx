import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const SharedLayout = () => {
    return (
        <>
            <Navbar />
            <Outlet />
            <footer>
                <div className="footer-text">&copy;2023 Because every Day is Caturday</div>
            </footer>
        </>
    );
};
export default SharedLayout;
