const express = require("express");
const morgan = require("morgan");
const cors = require("cors");
const helmet = require("helmet");
const app = express();
const port = 3000;

// Middleware
app.use(helmet());
app.use(cors()); // Corrected the cors usage
app.use(morgan("dev"));

const books = [
  { id: 1, title: "The Great Gatsby" },
  { id: 2, title: "To Kill a Mockingbird" },
  { id: 3, title: "1984" },
];

// Routes


app.get("/books/long", (req, res) => {
    res.send("This is the second response")
    res.send('List of long books');
   
});


app.get("/books", (req, res) => {
  // You can send the 'books' array as a JSON response
  res.json(books);
});

app.get("/books/:id", (req, res) => {
  const bookId = parseInt(req.params.id);
  const book = books.find((b) => b.id === bookId);

  if (!book) {
    return res.status(404).send("Book not found");
  }

  res.send(`Book Title: ${book.title}`);
});


app.get('/fixed-example/:id', (req, res) => { const bookId = parseInt(req.params.id); const book = books.find((b) => b.id === bookId); 
    if (!book) { return res.status(404).send("Book not found"); 
} res.send(`Book Title: ${book.title}`); 
});


app.get('/greet/:firstname/:lastname', (req, res) => { 
    res.send(`Hello ${req.params.firstname} ${req.params.lastname}`)
});




// Start the server
app.listen(port, () => {
  console.log(`Server is running on port ${port}`);
});
