import React from "react";

function SavedBook(props){
    return(
        <div className="border bg-light" style={{marginTop:"5px", marginBottom:"5px"}}>
        <div className="pt-3 px-3">
            <div className="row ">
                <div className="col-5">
                    <p>{props.title}</p>
                    <p>Written By: <span>{props.author}</span></p>
                </div>
                <div className="col-4">
                    <a href={props.bookLink} target="_blank" rel="noopener noreferrer" className="btn btn-info mr-2" style={{backgroundColor:"cadetblue", borderColor:"cadetblue", cursor:"pointer"}}>View</a>
                    <a className="btn btn-secondary" style={{backgroundColor:"#ff704d", borderColor:"#ff704d", color:"white", cursor:"pointer"}} onClick={props.handleDelete}
                        data-bookid={props.bookId}
                    >Delete</a>
                </div>
            </div>

            <div className="row">

                <div className="col-3">
                    <img src={props.imageLink} alt="bookimage" ></img>

                </div>
                <div className="col-9">
                    <p>{props.description}</p>
                    
                    
                </div>
                
            </div>

        </div>
        </div>
    )
}

export default SavedBook;
