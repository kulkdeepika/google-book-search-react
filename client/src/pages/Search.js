import React, { Component } from "react";
import Searchbar from "../components/Searchbar";
import Result from "../components/Result";
import API from "../utils/API";
import "../style.css";
const SearchStyle = {
    fontFamily: "Josefin Sans, sans-serif"
}



class Search extends Component{

    state = {
        search: "",
        results: [],
    }

    handleInputChange = (event) => {
        this.setState({
            search: event.target.value
        },()=>{
            console.log(this.state.search)
        })
    }

    handleSubmit = (event) => {
        event.preventDefault();
        console.log("clicked!");
        API.searchBook(this.state.search)
            .then(data => {
                console.log(data.data);
                console.log(data.data.hasOwnProperty("items"));
                //console.log(data.data.items.length);
                if(data.data.hasOwnProperty("items") && data.data.items.length !== 0){
                    this.setState({
                        results: data.data.items
                    },()=>{
                        console.log(this.state.results);
                    })
                }
                else{
                    this.setState({
                        results: []
                    },()=>{
                        console.log(this.state.results);
                    })
                }
            })
    }

    handleToastAnimationEnd = (event) => {
        document.getElementById("toast").removeAttribute("class");
    }

    handleSave = (event) => {
        console.log("Save Clicked");
        console.log(event.target.dataset.title);
        console.log(event.target.dataset.author);
        console.log(event.target.dataset.imagelink);
        console.log(event.target.dataset.description);
        console.log(event.target.dataset.booklink);
        console.log(event.target.dataset.bookid);

        document.getElementById("toast").addEventListener("animationend", this.handleToastAnimationEnd);

        document.getElementById("toast").classList.add("success");

        let bookData = {
            title: event.target.dataset.title,
            author: event.target.dataset.author,
            imageLink: event.target.dataset.imagelink,
            description: event.target.dataset.description,
            bookLink: event.target.dataset.booklink,
            bookId: event.target.dataset.bookid
        }

        API.saveBook(bookData);
    }

    render(){
        return(
            <div className="container" style={SearchStyle}>
                <Searchbar 
                    search={this.state.search} 
                    onChange={this.handleInputChange}
                    onClick={this.handleSubmit}
                ></Searchbar>

                {
                    this.state.results.length ? 
                    this.state.results.map((book) => (
                        <Result
                            title={ book.volumeInfo.hasOwnProperty("title") ? book.volumeInfo.title : ""}
                            author={ (book.volumeInfo.hasOwnProperty("authors") &&  book.volumeInfo.authors.length !== 0) ?  book.volumeInfo.authors[0] : ""}
                            imageLink={ (book.volumeInfo.hasOwnProperty("imageLinks") && book.volumeInfo.imageLinks.hasOwnProperty("smallThumbnail")) ? book.volumeInfo.imageLinks.smallThumbnail : ""}
                            description={book.volumeInfo.hasOwnProperty("description") ? book.volumeInfo.description : ""}
                            bookLink={ book.accessInfo.hasOwnProperty("webReaderLink") ? book.accessInfo.webReaderLink : ""}
                            bookId={book.id}
                            key={book.id}
                            handleSave={this.handleSave}
                        ></Result>
                    )) : <h3>No results to display</h3>
                }

            </div>
        )
    }
}

export default Search;

//dfsffaff
