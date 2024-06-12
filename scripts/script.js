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
  this.read = read;
}

// Create Book Object
function getTitle() {
  let inputTitle = document.querySelector("#title");
  let inputValue = inputTitle.value;
  inputTitle.value = "";
  return inputValue;
}

function getAuthor() {
  let inputAuthor = document.querySelector("#author");
  let inputValue = inputAuthor.value;
  inputAuthor.value = "";
  return inputValue;
}

function getNoOfPages() {
  let inputPages = document.querySelector("#pages");
  let inputValue = parseInt(inputPages.value);
  inputPages.value = "";
  return inputValue;
}

function getRead() {
  let inputRead = document.querySelector('input[name="read"]:checked');
  let inputValue = inputRead.value;
  inputValue.value = "";
  if (inputValue == "false") {
    inputValue = false;
  } else if (inputValue == "true") {
    inputValue = true;
  }
  return inputValue;
}

let addBtn = document.querySelector(".add");
addBtn.addEventListener("click", (e) => {
  let title = getTitle();
  let author = getAuthor();
  let pages = getNoOfPages();
  let read = getRead();

  let newBook = new Book(title, author, pages, read);
  getListOfBooks(newBook);
  e.preventDefault();
  list();
  formBox.close();
});

// Books Array
let books = [];

// Object.Book <- Books[] = Prototype
Object.setPrototypeOf(Book, books);

// Push book to array
function getListOfBooks(book) {
  books.push(book);
  //   console.log(books);
}

let modals = document.querySelector(".modals");
function list() {
  while (modals.hasChildNodes()) {
    modals.removeChild(modals.firstChild);
  }
  for (let i = 0; i < books.length; i++) {
    let modal = document.createElement("div");
    modal.classList.add("modal");
    modals.appendChild(modal);

    setTitle(modal, books, i);
    setAuthor(modal, books, i);
    setPages(modal, books, i);
    changeRead(modal, books, i);
    setDelete(modal, books, i);
    // console.log("asdfa");
    // console.log(books);
  }
}

function setTitle(modal, books, i) {
  let title = document.createElement("h2");
  title.textContent = books[i].title;
  modal.appendChild(title);
}

function setAuthor(modal, books, i) {
  let heading3 = document.createElement("h3");
  heading3.textContent = "by ";

  let author = document.createElement("span");
  author.textContent = books[i].author;
  heading3.appendChild(author);

  modal.appendChild(heading3);
}

function setPages(modal, books, i) {
  let heading4 = document.createElement("h4");
  heading4.textContent = books[i].pages + " ";
  modal.appendChild(heading4);

  let span = document.createElement("span");
  span.textContent = "Pages";
  heading4.appendChild(span);
}

function changeRead(modal, books, i) {
  let heading5 = document.createElement("h5");
  let label = document.createElement("label");
  label.setAttribute("for", "read");
  label.textContent = "Read";
  heading5.appendChild(label);

  let input = document.createElement("input");
  input.setAttribute("type", "checkbox");
  input.setAttribute("name", "page");

  if (books[i].read == true) {
    input.setAttribute("checked", "");
    heading5.appendChild(input);
  } else {
    heading5.appendChild(input);
    modal.style.backgroundColor = 'red'
  }

  modal.appendChild(heading5);

  input.addEventListener("change", (e) => {
    if(e.currentTarget.checked) {
        books[i].read = true
    } else {
        books[i].read = false;
    }
    list();
  });


}

function setDelete(modal, books, i) {
  let btn = document.createElement("button");
  btn.textContent = "Delete";
  btn.classList.add("delete-btn");
  modal.appendChild(btn);

  btn.addEventListener("click", () => {
    books.splice(books.indexOf(books[i]), 1);
    list();
  });
}

// console.log(books);
