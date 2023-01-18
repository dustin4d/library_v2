const addBtn = document.querySelector(".addBtn")
const modal = document.querySelector(".modal")
const modalClose = document.querySelector(".modal-close")

const myLibrary = []

// constructor
function Book(title, pages, hasRead) {
    this._title = title
    this._pages = pages
    this._hasRead = hasRead
}

function addBookToLibrary() {
    // loop through array
    for (let i = 0; i < myLibrary.length; i++) {
        console.log(`${i.title}`)
    }
}

// BUTTON
addBtn.addEventListener("click", () => {
    console.log("Event listener called.")
    // Open modal
    modal.style.display = "block"
})

modalClose.addEventListener("click", () => {
    modal.style.display = "none"
})