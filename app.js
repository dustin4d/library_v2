const addBtn = document.querySelector(".addBtn")
const modal = document.querySelector(".modal")
const modalAdd = document.querySelector('.modalAdd')
const modalClose = document.querySelector('.modalClose')
const readBtn = document.querySelector('#readBox')

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
    if (myLibrary[i].hasRead === false) {`
        <td>${myLibrary[i].title}</td>
        <td>${myLibrary[i].author}</td>
        <td>${myLibrary[i].pages}</td>
        <td class="readBtn">${myLibrary[i].hasRead}</td>
        `
    }
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

    if (myLibrary.length === 0) {
        console.log("Array is empty.")
        return
    } else {
        myLibrary.push(addBook)
    }
}

// BUTTONS
addBtn.addEventListener("click", () => {
    console.log("Event listener called.")
    // Open modal
    modal.style.display = "block"
})

readBtn.addEventListener("click", () => {
    console.log("Read button clicked")
    // Todo: Grab the object's read status
    // and switch it when this is clicked
})

// Add book to array, then add content from array to DOM
modalAdd.addEventListener("click", (e) => {
    e.preventDefault()
    addBookToArray()
    addBookToLibrary()
})

// Just close the modal
// Will throw an error because the elements
// get removed from the DOM.
modalClose.addEventListener("click", () => {
    modal.style.display = "none"
})