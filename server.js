const express = require("express");
const mongoose = require("mongoose");
const path = require("path");
const db = require("./models");
const PORT = process.env.PORT || 3001;
const app = express();

// Define middleware here
app.use(express.urlencoded({ extended: true }));
app.use(express.json());

// Serve up static assets (usually on heroku)
if (process.env.NODE_ENV === "production") {
  app.use(express.static("client/build"));
}

// Send every request to the React app
// Define any API routes before this runs

app.get("/api/books", (req,res) => {
  console.log("GET ROUTE HIT!");
  db.Book.find({})
        .then(dbBooks => {
            console.log(dbBooks)
            res.json(dbBooks);
        })
        .catch(err => {
            console.log(err);
            res.json(err);
        })
})
app.post("/api/books", (req, res) => {
  console.log("POST ROUTE HIT!");
  console.log(req.body);
  db.Book
      .create(req.body)
      .then(dbModel => {res.json(dbModel)})
      .catch(err => res.status(422).json(err));
});

app.delete("/api/books/:id", (req, res) => {
  console.log("DELETE ROUTE HIT!");
  console.log(req.params.id);
  db.Book.deleteOne({bookId: req.params.id}, function(err) {
    if(err){
      throw err;
    }
    console.log("successfully deleted");
    res.sendStatus(200);
  })
})

app.get("*", function(req, res) {
  res.sendFile(path.join(__dirname, "./client/build/index.html"));
});

//mongoose.connect(process.env.MONGODB_URI || "mongodb://localhost/reactbookslist");

mongoose.connect(process.env.MONGODB_URI || "mongodb://bootcamp-user:password123@ds145178.mlab.com:45178/heroku_rw96t5fz");

app.listen(PORT, function() {
  console.log(`🌎 ==> API server now on port ${PORT}!`);
});
