function changeRead(event) {
    const index = event.target.getAttribute('data-index')
    const book = Library[index]
    toggleRead(book)
}

function toggleRead(book) {
    if (book.read == true) {
        book.read = false
    } else {
        book.read = true
    }
}


    const toggle_Button = document.createElement('button')
    div.appendChild(toggle_Button)
    toggle_Button.textContent = 'toggle-read'
    toggle_Button.setAttribute('data-index', Library.indexOf(book)) // isko bhi diya data attr cause we want to use get attr for this button's click event
    toggle_Button.addEventListener('click', changeRead)