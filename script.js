let Library = [];

function Book(title, author, pgnum, read = false) {
    this.title = title
    this.author = author
    this.pgnum = pgnum
    this.read = read

    this.info = function () {
        return `${title} by ${author} has ${pgnum}`
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
    delete_Button.classList.add('delete-book') //added class so we can get list of all delete buttons
    delete_Button.setAttribute('data-index', Library.indexOf(book)) // Link Dom element and book obj in Library, Every button now will have an index of the book object it is related to
    delete_Button.addEventListener('click',deleteBook)

    const toggle_Button = document.createElement('button')
    div.appendChild(toggle_Button)
    toggle_Button.textContent = displayReadStatus(book)
    toggle_Button.classList.add('toggle-book')
    toggle_Button.setAttribute('data-index', Library.indexOf(book)) // isko bhi diya data attr cause we want to use get attr for this button's click event
    toggle_Button.addEventListener('click', changeRead)
}

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
    const delete_btns = document.getElementsByClassName('delete-book')
    const toggle_btns = document.getElementsByClassName('toggle-book')
    for (let i = 0; i < delete_btns.length; i++) {
        delete_btns[i].setAttribute('data-index', i) // adjust data attribute according to the state of Library array. Sync attr and actual array index
        toggle_btns[i].setAttribute('data-index', i) // doing the same sync, like for delete button
    }

}

function changeRead(event) {
    const index = event.target.getAttribute('data-index')
    const book = Library[index]
    book.toggleRead()
    event.target.textContent= displayReadStatus(book)
}

Book.prototype.toggleRead = function() {
    if (this.read == true) {
        this.read = false
    } else {
        this.read = true
    }
}

function displayReadStatus(book) {
    if (book.read === true) {
        return 'book is read'
    } else {
        return 'book is not read'
    }
}