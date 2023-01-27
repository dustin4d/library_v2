const addBtn = document.querySelector(".addBtn")
const modal = document.querySelector(".modal")
const modalAdd = document.querySelector('.modalAdd')
const modalClose = document.querySelector('.modalClose')
const readBtn = document.querySelector('.readBox')
const entries = document.querySelector('.entries')

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
   const tableBody = document.querySelector('.tableBody')
   const lastAddedBook = myLibrary[myLibrary.length - 1]
   const tr = document.createElement('tr')

    if (lastAddedBook.hasRead === false) {
        tr.innerHTML = `
            <td>${lastAddedBook.title}</td>
            <td>${lastAddedBook.author}</td>
            <td>${lastAddedBook.pages}</td>
            <td class="readBox">No</td>
            `
            tableBody.appendChild(tr)
        } else if(lastAddedBook.hasRead === true){
        tr.innerHTML = `
            <td>${lastAddedBook.title}</td>
            <td>${lastAddedBook.author}</td>
            <td>${lastAddedBook.pages}</td>
            <td class="readBox">Yes</td>
            `
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

    const addBook = new Book(bookTitle.value, bookAuth.value, bookPages.value, bookRead.checked)

    if (bookTitle.value === "") {
        console.log("You need a title")
        return
    } else if (bookAuth.value === "") {
        console.log("You need an author")
        return
    } else if (bookPages.value === "") {
        console.log("You need to add page count")
        return
    } else {
        myLibrary.push(addBook)
        return
    }
}

// BUTTONS
addBtn.addEventListener("click", () => {
    console.log("Event listener called.")
    // Open modal
    modal.style.display = "block"
    entries.style.display = 'none'
})

readBtn.addEventListener("click", (e) => {
    console.log("Read button clicked")
    // Todo: Grab the object's read status
    // and switch it when this is clicked
    console.log(e)
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
modalClose.addEventListener("click", (e) => {
    e.preventDefault()
    modal.style.display = "none"
    entries.style.display = "block"
})