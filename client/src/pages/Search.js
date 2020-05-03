import React, { Component } from "react";
import Searchbar from "../components/Searchbar";
import Result from "../components/Result";
import API from "../utils/API";
import "../style.css";
import Toast from "../components/Toast";
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
                this.setState({
                    results: data.data.items,
                },()=>{
                    console.log(this.state.results);
                })
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
                    this.state.results.map((book) => (
                        <Result
                            title={book.volumeInfo.title}
                            author={book.volumeInfo.authors[0]}
                            imageLink={book.volumeInfo.imageLinks.smallThumbnail}
                            description={book.volumeInfo.description}
                            bookLink={book.accessInfo.webReaderLink}
                            bookId={book.id}
                            key={book.id}
                            handleSave={this.handleSave}
                        ></Result>
                    ))
                }

            </div>
        )
    }
}

export default Search;