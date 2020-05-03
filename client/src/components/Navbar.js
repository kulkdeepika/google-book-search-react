import React from "react";
import { Link , useLocation} from "react-router-dom";

function Navbar(){
    const navbarStyle = {
        fontFamily: "Josefin Sans, sans-serif",
        backgroundColor:"cadetblue",
        color:"white"
    }

    const location = useLocation();
    return(
        <div className="d-flex flex-column flex-row px-md-4 mb-3" style={navbarStyle}>
            <nav className=" navbar navbar-expand-lg  navbar-light" > 
            <Link className="navbar-brand align-items-left" to="/"><strong>Google Books</strong></Link>
            <div className="w-100"></div> 

            <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
            <span className="navbar-toggler-icon"></span>
            </button>
        
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
                <ul className="navbar-nav mr-auto ml-auto">
                    <li className="nav-item">
                        <Link to="/" className= {location.pathname === "/" ? "nav-link active" : "nav-link"}>Search</Link>
                    </li>
                    <li className="nav-item">
                        <Link to="/saved" className={location.pathname === "/saved" ? "nav-link active" : "nav-link"} >Saved</Link>
                    </li>
                </ul>
            </div>
        </nav>
    </div>
    )
}

export default Navbar;