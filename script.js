
// добавление записи
let block = document.querySelector('.note');
const submitBtn = document.querySelector('.submit') 
const sortImage = document.querySelector('.sort-image')

submitBtn.addEventListener('click', () => {
    let block2 = block.cloneNode(true);
    // console.log(block2.querySelector('.input-for-note'))
    block2.querySelector('.input-for-note').value = '';
    block.after(block2);
})

// кнопка удаления 

let removeBtn = document.querySelectorAll('.remove-btn');

removeBtn.addEventListener('click', (event) => {
    console.log(uhiuh);
    // remove(this.document.querySelector('.note'));
});

// greenBox.addEventListener('mouseover', (event) => {
//     event.target.style.backgroundColor = 'yellow';
// });




// // сортировка
// const sortButton = document.querySelector('.for-sort');

// const frame = document.querySelector('.frame');
// const notes = document.querySelectorAll('.note');

// console.log(notes)


// function forArr(notes) {
//     for (let i = 0; i < notes.length; i++) {
//         // const el = notes[i];
//         arrNotes.push(el)
//         return arrNotes;
//     }
// }




// let flagName = true;

// sortButton.addEventListener('click', (event) => {
//    if (flagName == true) {
//         document.querySelector('.sort-image').getElementsByClassName.display = 'none';
//       let sortedNotes = Array.from(frame.notes)
//       console.log(sortedNotes)
//         .sort((noteA, noteB) => 
//          noteA.value > noteB.value ? 1 : -1);
//          frame[0].append( ...sortedNotes);
//          console.log(hgjkh)
//          flagName = false;
//    } else {
// //       headerName.innerHTML = 'Name ˄';
//          let sortedNotes = Array.from(frame.notes)
//             .sort((noteA, noteB) => 
//             noteA.value < noteB.value ? 1 : -1);
//          frame[0].append( ...sortedNotes);
//          flagName = true;
//    }
// });

