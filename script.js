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

const New_Book = document.querySelector(".new-book")
New_Book.addEventListener('click', hidden)