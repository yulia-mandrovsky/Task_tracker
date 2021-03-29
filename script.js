
// добавление записи

let block = document.querySelector('.note');
const mainOriginalBlock = block;
const submitBtn = document.querySelector('.submit') 
const sortImage = document.querySelector('.sort-image')
let removeBtns = document.querySelectorAll('.remove-btn');
const listToDo = document.querySelector('.myUL');

const btn = document.querySelector('.remove-btn')
btn.addEventListener('click', (event) => {
    console.log('kjnjljnlkm')
    block.remove();
});


submitBtn.addEventListener('click', () => {
    let block2 = mainOriginalBlock.cloneNode(true);
    block2.querySelector('.input-for-note').value = '';
    listToDo.appendChild(block2);
    const btn = block2.querySelector('.remove-btn')
    btn.addEventListener('click', (event) => {
        console.log('kjnjljnlkm')
        block2.remove();
    });
})

// // сортировка

const sortButton = document.querySelector('.for-sort');
const sortImg1 = document.querySelector('.sort-image1');
const sortImg2 = document.querySelector('.sort-image2');

let flagName = true;

sortButton.addEventListener('click', (event) => {
    const inputNotes = document.querySelectorAll('.input-for-note');
    const inputArray = Array.prototype.slice.call(inputNotes)
    inputArray.sort((el1, el2) => {
        return el1.value.localeCompare(el2.value) * (flagName ? -1 : 1);
    })
    flagName = !flagName;
    inputArray.forEach((input) => {
        const parentElement = input.parentElement;
        parentElement.remove();
        listToDo.appendChild(parentElement)
    })
    sortImg1.classList.toggle('display-none');
    sortImg2.classList.toggle('display-none');
});

// drag-n-drop

