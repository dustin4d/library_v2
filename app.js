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
function displayLibrary() {

}

// BUTTON
addBtn.addEventListener("click", () => {
    console.log("Event listener called.")
    // Open modal
    modal.style.display = "block"
})

let book1 = new Book("12 Rules for Life", "Jordan B. Peterson", 400, true)
let book2 = new Book("Extreme Ownership", "Jocko Willink", 300, false)
let book3 = new Book("Thinking, Fast and Slow", "Daniel Kahneman", 500, false)
myLibrary.push(book1, book2, book3)

// Attach this to the modal button at some point
addBookToLibrary()