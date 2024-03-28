//Array of book objects
const books=[
    {title: "The Hobbit", author: "Tolkien"},
    {title: "1984", author: "Orwell"},
    {title: "Brave New World", author: "Orwell"},
    {title: "To Kill A Mockingbird", author: "Lee"},
];

//Array to hold formatted book strings
let formattedbooks = [];

//Use forEach to iterate over the books array
books.forEach(book => {
    //construct a string combining title and author
    const bookString = `${book.title} by ${book.author}`;
    
    //add the formatted 
    formattedbooks.push(bookString);
});

console.log(formattedbooks);
