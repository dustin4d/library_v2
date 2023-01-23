const addBtn = document.querySelector(".addBtn")
const modal = document.querySelector(".modal")
const modalAdd = document.querySelector('.modalAdd')
const modalClose = document.querySelector('.modalClose')

const myLibrary = []

// constructor
function Book(title, author, pages, hasRead) {
    this.title = title
    this.author = author
    this.pages = pages
    this.hasRead = hasRead
}

// Target the table body element, then open a table row, and insert
// data on each array object by using temp literals, then append to parent
function addBookToLibrary() {
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

// Select each field that contains data (in the modal),
// Insert the data as arguments for new Book instance,
// push new book obj to array.
function addBookToArray() {
    const bookTitle = document.querySelector('#book_title')
    const bookAuth = document.querySelector('#book_author')
    const bookPages = document.querySelector('#book_pages')
    const bookRead = document.querySelector('#book_read')

    console.log(bookTitle.value)
    const addBook = new Book(bookTitle.value, bookAuth.value, bookPages.value, bookRead.checked)

    myLibrary.push(addBook)
}

// BUTTONS
addBtn.addEventListener("click", () => {
    console.log("Event listener called.")
    // Open modal
    modal.style.display = "block"
})

// Add book to array, then add content from array to DOM
modalAdd.addEventListener("click", () => {
    addBookToArray()
    addBookToLibrary()
})

// Just close the modal
modalClose.addEventListener("click", () => {
    modal.style.display = "none"
})