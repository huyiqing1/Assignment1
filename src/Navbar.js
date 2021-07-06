import { Link } from "react-router-dom";

const Navbar = () => {
    return ( 
        <div className="navbar">
            <Link to="/">Home</Link>
            <Link to="/tv">TV</Link>
            <Link to="/my-movies">My Movies</Link>
            <Link to="/login">Sign in</Link>
        </div>
     );
}
 
export default Navbar;