console.log("Library | The Odin Project");

// Dialog box open and close

let formBox = document.querySelector("#form-box");
let addBook = document.querySelector("#add-btn");
addBook.addEventListener("click", () => {
  formBox.showModal();
});

let closeBtn = document.querySelector(".close");
closeBtn.addEventListener("click", () => {
  formBox.close();
});


// Book Object Constructor
function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read
}

// Create Book Object
function getTitle() {
    let inputTitle = document.querySelector('#title');
    let inputValue = inputTitle.value;
    inputTitle.value = '';
    return inputValue;
}

function getAuthor() {
    let inputAuthor = document.querySelector('#author');
    let inputValue = inputAuthor.value;
    inputAuthor.value = '';
    return inputValue;
}

function getNoOfPages() {
    let inputPages = document.querySelector('#pages');
    let inputValue = inputPages.value;
    inputPages.value = '';
    return inputValue;
}

function getRead() {
    let inputRead = document.querySelector('input[name="read"]:checked');
    let inputValue = inputRead.value
    inputValue.value = ''
    if(inputValue == 'false') {
        inputValue = false
    } else if (inputValue == 'true') {
        inputValue = true
    }
    return inputValue
}

let addBtn = document.querySelector('.add');
addBtn.addEventListener('click', (e) => {
    e.preventDefault();

    let title = getTitle();
    let author = getAuthor();
    let pages = getNoOfPages();
    let read = getRead();

    let newBook = new Book(title, author, pages, read)
    getListOfBooks(newBook);
    formBox.close()
})

// Books Array
let books = [];

function getListOfBooks(book) {
    books.push(book)
    console.log(books)
}