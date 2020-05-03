import React, { Component } from "react";
import API from "../utils/API";
import SavedBook from "../components/SavedBook";
const SearchStyle = {
    fontFamily: "Josefin Sans, sans-serif"
}

class Saved extends Component {

    state = {
        savedBooks: []
    }

    loadBooks = () => {
        API.getBooks()
            .then(data => {
                console.log(data.data);
                this.setState({
                    savedBooks: data.data
                }, ()=>{
                    console.log(this.state.savedBooks);
                })
        })
    }

    componentDidMount(){
        this.loadBooks();
    }

    handleDelete = (event) => {
        console.log("handleDelete HIT!");
        console.log(event.target.dataset.bookid);
        API.deleteBook(event.target.dataset.bookid)
            .then(data => {
                console.log(data);
                this.loadBooks();
            })
    }
    
    render(){
            return(
            <div className="container" style={SearchStyle}>
                <div className="alert alert-secondary text-center" style={{backgroundColor:"cadetblue", color:"white"}} role="alert">
                    <strong>Saved Books</strong>
                </div>
                {
                    this.state.savedBooks.map((savedBook) => (
                        <SavedBook
                            title={savedBook.title}
                            author={savedBook.author}
                            imageLink={savedBook.imageLink}
                            description={savedBook.description}
                            bookLink={savedBook.bookLink}
                            bookId={savedBook.bookId}
                            key={savedBook.bookId}
                            handleDelete={this.handleDelete}
                        ></SavedBook>
                    ))
                }
            </div>
        )
    }
}

export default Saved;