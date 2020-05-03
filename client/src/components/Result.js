import React from "react";

function Result(props){
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
                    <a className="btn btn-secondary" style={{backgroundColor:"#cccc00", borderColor:"#cccc00", color:"white", cursor:"pointer"}} onClick={props.handleSave}
                    data-title={props.title}
                    data-author={props.author}
                    data-imagelink={props.imageLink} 
                    data-description={props.description}
                    data-booklink={props.bookLink}
                    data-bookid={props.bookId}>Save</a>
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

export default Result;

//{
//     authors: ["Suzanne Collins"]
//     description: "Set in a dark vision of the near future, a terrifying reality TV show is taking place. Twelve boys and twelve girls are forced to appear in a live event called The Hunger Games. There is only one rule: kill or be killed. When sixteen-year-old Katniss Everdeen steps forward to take her younger sister's place in the games, she sees it as a death sentence. But Katniss has been close to death before. For her, survival is second nature."
//     image: "http://books.google.com/books/content?id=sazytgAACAAJ&printsec=frontcover&img=1&zoom=1&source=gbs_api"
//     link: "http://books.google.com/books?id=sazytgAACAAJ&dq=title:The+Hunger+Games&hl=&source=gbs_api"
//     title: "The Hunger Games"
//   }
  