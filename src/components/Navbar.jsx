
import { NavLink } from "react-router-dom";

const Navbar = () => {
    return (
        <nav>
            <div className="navbar-container">
                <div className="nav-title">
                    <h3 className="nav-title-text">Caturday</h3>
                </div>
                <div className="nav-links-container">
                    <NavLink
                        to="/"
                        className={({ isActive }) =>
                            isActive ? "link active" : "link"
                        }
                    >
                        Home
                    </NavLink>
                    <NavLink
                        to="/cat-of-the-day"
                        className={({ isActive }) =>
                            isActive ? "link active" : "link"
                        }
                    >
                        Cat of the Day
                    </NavLink>
                    <NavLink
                        to="/which-cat-breed-are-you"
                        className={({ isActive }) =>
                            isActive ? "link active" : "link"
                        }
                    >
                        Which Cat Breed are You?
                    </NavLink>
                </div>
            </div>
        </nav>
    );
};
export default Navbar;
