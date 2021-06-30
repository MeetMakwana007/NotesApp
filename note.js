const addButton = document.querySelector('#add');

const addNewNote = ( text = '') =>{

    const note = document.createElement('div');
    note.classList.add('note');

    const htmlData = `
    <div class="operation">
    <button class="edit"><i class="far fa-edit"></i></button>
    <button class="delete"><i class="far fa-trash-alt"></i></button>
</div>

<div class="main"></div>
<textarea class=""></textarea>      `;

note.insertAdjacentHTML('afterbegin',htmlData);


const editButton = note.querySelector('.edit');
const delButton = note.querySelector('.delete');
const mainDiv  = note.querySelector('.main');
const textarea = note.querySelector('textarea');

delButton.addEventListener('click',()=>{
    note.remove();
});



document.body.appendChild(note);
}

addButton.addEventListener('click',() => addNewNote());
