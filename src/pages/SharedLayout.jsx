import { Outlet } from "react-router";
import Navbar from "../components/Navbar";

const SharedLayout = () => {
    return (
        <>
            <Navbar /> 
            <Outlet />
            <footer>&copy;2023 Because every Day is Caturday</footer>
        </>
    );
};
export default SharedLayout;
