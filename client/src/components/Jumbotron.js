import React from "react";

function Jumbotron(){
    const jumbotronStyle = {
        fontFamily: "Josefin Sans, sans-serif"
    }
    return(
        <div className="jumbotron text-center shadow" style={jumbotronStyle}>
            <h1 className="display-8 ">Google Books Search <i className="fas fa-book"></i></h1>
            <hr className="my-4"></hr>
            <p>Search for and save books of Interest</p>
        </div>
    )
}

export default Jumbotron;