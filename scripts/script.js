console.log("Library | The Odin Project");

let formBox = document.querySelector('#form-box')
let addBtn = document.querySelector('#add-btn');
addBtn.addEventListener('click', () => {
    formBox.showModal();
});

let closeBtn = document.querySelector('.close');
closeBtn.addEventListener('click', () => {
    formBox.close();
})