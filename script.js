
let block = document.querySelector('.note');
const submitBtn = document.querySelector('.submit') 
const sortImage = document.querySelector('.sort-image')

submitBtn.addEventListener('click', () => {
    let block2 = block.cloneNode(true);
    console.log(block2.querySelector('.input-for-note'))
    block2.querySelector('.input-for-note').value = '';
    block.after(block2);
})


const sortButton = document.querySelector('.sort-image')

// // const headerName = document.querySelector('.header-name');
const notes = document.querySelectorAll(('input').value);
// // const rows = document.querySelectorAll('tr');
const frame = document.querySelector('.frame');
// // const table = document.querySelector('table');

let flagName = true;
console.log(notes)
console.log(frame.notes)

headerName.addEventListener('click', (event) => {
   if (flagName == true) {
//       headerName.innerHTML = 'Name ˅';
//       let sortedNameRows = Array.from(table.rows)
//          .slice(1)
//          .sort((rowA, rowB) => 
//          rowA.cells[0].innerHTML > rowB.cells[0].innerHTML ? 1 : -1);
//          table.tBodies[0].append( ...sortedNameRows);
//          flagName = false;
//    } else {
//       headerName.innerHTML = 'Name ˄';
//          let sortedNameRows = Array.from(table.rows)
//             .slice(1)
//             .sort((rowA, rowB) => 
//             rowA.cells[0].innerHTML < rowB.cells[0].innerHTML ? 1 : -1);
//          table.tBodies[0].append( ...sortedNameRows);
//          flagName = true;
//    }
// });

