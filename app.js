const addBtn = document.querySelector(".addBtn")
const modal = document.querySelector(".modal")


const myLibrary = []

// constructor
function Book(title, author, pages, hasRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasRead
}

function addBookToLibrary() {
    // loop through array
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(myLibrary[i])
    }
}

// Takes contents of myLibrary and displays it in the DOM
// For each object in the array, create a div for it's information...
function displayLibrary() {
    const bookTitle = document.querySelector("#book_title")
    const bookAuthor = document.querySelector('#book_author')
    const bookPages = document.querySelector('#book_pages')
    console.log(bookTitle.value)
}

// fn that creates the table elements for each object in array
function createRow() {
   const tableBody = document.querySelector('.book_table')
   for (let i = 0; i < myLibrary.length; i++) {
    const tr = document.createElement('tr')
    tr.innerHTML = `
        <td>${myLibrary[i].title}</td>
        <td>${myLibrary[i].author}</td>
        <td>${myLibrary[i].pages}</td>
        <td>${myLibrary[i].hasRead}</td>
        `;
        tableBody.appendChild(tr)
   }
}

// BUTTON
addBtn.addEventListener("click", () => {
    console.log("Event listener called.")
    // Open modal
    modal.style.display = "block"
})

// Manually added books; delete later.
let book1 = new Book("12 Rules for Life", "Jordan B. Peterson", 400, true)
let book2 = new Book("Extreme Ownership", "Jocko Willink", 300, false)
let book3 = new Book("Thinking, Fast and Slow", "Daniel Kahneman", 500, false)
myLibrary.push(book1, book2, book3)

// Attach this to the modal button at some point
addBookToLibrary()