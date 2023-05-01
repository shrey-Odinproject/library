let Library = [];

function Book(title, author, pgnum, read = false) {
    this.title = title
    this.author = author
    this.pgnum = pgnum
    this.read = read

    this.info = function () {
        return `${title} by ${author} has ${pgnum} pages and is ${read}`
    }
}

function addBookToLibrary(book) {
    Library.push(book)
}

function displayLibrary () {
    for (book of Library) {
        displayBook (book)
    }
}

function displayBook (book) {
    let div = document.getElementsByClassName('library')[0].appendChild(document.createElement('div'))
    div.classList.add('book')
    div.innerHTML = book.info()
    
    const delete_Button = document.createElement('button')
    div.appendChild(delete_Button)
    delete_Button.textContent = 'delete book'
    delete_Button.classList.add('delete-book')
    delete_Button.setAttribute('data-index', Library.indexOf(book)) // Link Dom element and book obj in Library, Every button now will have an index of the book object it is related to
    delete_Button.addEventListener('click',deleteBook)
}

// const book1 = new Book('Star Wars', 'George Lucas', 345, true)
// const book2 = new Book('Laura: The Adventure', 'Läusel Keil', 35, false)
// const book3 = new Book('Apfel essen leicht gemacht', 'Läusel Keilo', 5601, false)

// addBookToLibrary(book1)
// addBookToLibrary(book2)
// addBookToLibrary(book3)

// displayLibrary()

function hidden() {
    document.getElementsByClassName("book-form")[0].classList.toggle('hidden')
}

const new_Book = document.querySelector(".new-book")
new_Book.addEventListener('click', hidden)

function createBook(){
    newBook = new Book(document.getElementById('title').value,
                    document.getElementById('author').value,
                    document.getElementById('pages').value,
                    document.getElementById('read').checked)
    
    addBookToLibrary(newBook)
    displayBook(newBook)
}
function clearForm(){
    inputs = document.getElementsByTagName('input')
    
    for(input of inputs) {
        input.value = ''
    }
}

const create_Book = document.querySelector(".create-book")
create_Book.addEventListener('click', event => {
    event.preventDefault()
    createBook() 
    clearForm()
})

function deleteBook(event) {
    const index = event.target.getAttribute('data-index')
    Library.splice(index, 1)
    event.target.parentNode.remove() // because button is inside the book div
    adjustDataIndex()
}

function adjustDataIndex(){
    const btns = document.getElementsByClassName('delete-book')
    for (let i = 0; i < btns.length; i++) {
        const element = btns[i];
        element.setAttribute('data-index', i) // adjust data attribute according to the state of Library array. Sync attr and actual array index
    }
}